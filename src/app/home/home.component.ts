import { AppConfig } from './../_helpers/app.config';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, RepoService } from '../_services';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
    currentUser: User;
    searchparam: string;
    throttle = 300;
    scrollDistance = 1;
    searchType = 'repo'


    /* search specefic variables */
    public users = [];
    public totalCount: number = 0;

    public repos = [];
    public totalRepoCount: number = 0;

    constructor(private userService: UserService, private repoService: RepoService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {

    }

    onScrollDown(ev) {
        let pageSize = Number(AppConfig.DATAPERPAGE);
        if (this.users && this.users.length && this.users.length < this.totalCount) {
            let page = (this.users.length / pageSize) + 1;
            this.fetchGitUsers(page);
        } else if (this.repos && this.repos.length && this.repos.length < this.totalRepoCount) {
            let page = (this.repos.length / pageSize) + 1;
            this.fechGitRepos(page);
        }
    }
    onKeyDownEvt(event) {

        if (event.keyCode == 13) {
            let page = 1;
            this.repos = [];
            this.users = [];
            this.totalCount = 0
            this.totalRepoCount = 0;


            /* clear application cache */
            this.userService.clearUserDetail();

            /* clear application cache */
            this.repoService.clearRepoDetail();

            if (this.searchType === 'repo' && this.searchparam) {
                this.fechGitRepos(page);
            } else if (this.searchType === 'user' && this.searchparam) {
                this.fetchGitUsers(page);
            }

        }
    }


    fetchGitUsers(page) {
        this.userService.getAllUsers(this.searchparam, page).subscribe((response) => {
            if (response && response.items) {
                this.users = this.users.concat(response.items);
            }
            console.log(this.users);
            this.totalCount = response && response.total_count ? response.total_count : 0

        }, error => {
            console.log(" Retrieve error ");
        });
    }

    fechGitRepos(page) {
        this.repoService.getAllRepos(this.searchparam, page).subscribe((response) => {
            if (response && response.items) {
                this.repos = this.repos.concat(response.items);
            }
            console.log(this.repos);
            this.totalRepoCount = response && response.total_count ? response.total_count : 0
        }, error => {
            console.log(" Retrieve error ");
        });
    }
}