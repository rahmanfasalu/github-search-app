import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RepoService } from '../_services';

@Component({
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  private repoId;
  constructor(private userService: RepoService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.repoId = param.id;
      console.log(param)
      console.log(this.userService.getRepoDetail(this.repoId));
    })
  }

}
