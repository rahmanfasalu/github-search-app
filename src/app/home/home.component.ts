import { AppConfig } from './../_helpers/app.config';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, RepoService } from '../_services';

/*
 ---------------   HomeComponent --------------
 @description:
 Home page search component
 @invoke : /home
*/
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

    /*
    * @description: 
    * UserService,RepoService,router initialization
    * userService for user search,  repoService for repo searchs
    */
    constructor(private userService: UserService, private repoService: RepoService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    /**
     * A callback method that is invoked immediately after the component init
     * 
     * @description: 
     * nil
     * @param : none
     * @returns:void
    */
    ngOnInit() {

    }

    /*
    * searchReset
    *
    * @description: 
    * reset search based on the radio button click
    * @param:
    * radio button clicked type
    */
    searchReset(type){
        if(this.searchType !== type){
            let event = {
                keyCode:13
            }
            this.searchType = type;
            this.onKeyDownEvt(event);
        }
    }

   /*
    * onScrollDown
    *
    * @description: 
    * scroll handler for input data - for infinte data
    * @param:
    * scroll event
    */
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


    /*
    * onKeyDownEvt
    *
    * @description: 
    * Enter key handler for input data
    * @param:
    * scroll event
    */
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

    /*
    * fetchGitUsers
    *
    * @description: 
    * for fetch user data based on the searh query 
    * @param:
    * page  - pagination number
    */
    fetchGitUsers(page) {
        this.userService.getAllUsers(this.searchparam, page).subscribe((response) => {
            if (response && response.items) {
                this.users = this.users.concat(response.items);
            }
            this.totalCount = response && response.total_count ? response.total_count : 0

        }, error => {
            console.log(" Retrieve error ");
        });
    }

    /*
    * fechGitRepos
    *
    * @description: 
    * for fetch repo data based on the searh query 
    * @param:
    * page  - pagination number
    */
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