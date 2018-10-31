import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RepoService } from '../_services';
import { AppConfig } from '../_helpers';
import { environment } from 'src/environments/environment.prod';

@Component({
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  private repoId:any;
  private repoInfo:any;
  private viewMode:string;
  private repo:string;
  private owner:string;

  readMeContent:any;
  contributors:any = [];
  branches:any = [];
  issues:any = [];
  constructor(private repoService: RepoService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.repoId = param.id;
      this.repoInfo = this.repoService.getRepoDetail(this.repoId);
      if(this.repoInfo){
        this.repo = this.repoInfo.name;
        this.owner = this.repoInfo.owner  && this.repoInfo.owner.login ? this.repoInfo.owner.login: '';
        this.initRepo(this.repo,this.owner);
      }else{
        console.log(this.repoId);
      }
    });
  }

  initRepo(owner,repo){
    this.viewMode = 'tab1';
    let readMeContentURL  = environment.apiUrl + AppConfig.SERVICE.GET_READ_ME.replace('##', owner).replace('$$', owner); 
    this.repoService.getRepoTabContent(readMeContentURL,owner,repo).subscribe((res)=>{
      this.readMeContent =  atob(res.content);
    });


    let contributersURL  = environment.apiUrl + AppConfig.SERVICE.GET_CONTRIB.replace('##', owner).replace('$$', owner); 
    this.repoService.getRepoTabContent(contributersURL,owner,repo).subscribe((res)=>{
      this.contributors = res;
      console.log("contributers",res);
    });

    let branchesURL  = environment.apiUrl + AppConfig.SERVICE.GET_BRANCHES.replace('##', owner).replace('$$', owner); 
    this.repoService.getRepoTabContent(branchesURL,owner,repo).subscribe((res)=>{
      this.branches =  res;
      console.log("branches",res);
    });

    let issuesURL  = environment.apiUrl + AppConfig.SERVICE.GET_ISSUES.replace('##', owner).replace('$$', owner); 
    this.repoService.getRepoTabContent(issuesURL,owner,repo).subscribe((res)=>{
      this.issues =  res;
      console.log("issues",res);
    });
  }
  
}
