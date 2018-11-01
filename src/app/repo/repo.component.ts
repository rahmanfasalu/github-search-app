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

  private repoName:any;
  private repoOwner:any;
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
      console.log(param);
      this.repoName = param.name;
      this.repoOwner = param.owner;
      let id= param.id;

      this.repoInfo = this.repoService.getRepoDetail(id);
      if(this.repoInfo && this.repoInfo.name){
        this.repo = this.repoInfo.name;
        this.owner = this.repoInfo.owner  && this.repoInfo.owner.login ? this.repoInfo.owner.login: '';
        this.initRepo(this.owner,this.repo);
      }else{
        if(this.repoName && this.repoOwner){ 
          this.repoService.getSingleRepoDetails(this.repoOwner,this.repoName).subscribe((response)=>{
            this.repoInfo = response
            this.initRepo(this.repoOwner,this.repoName);
          });
        }
      }
    });
  }

  initRepo(owner,repo){
    this.viewMode = 'tab1';
    let readMeContentURL  = environment.apiUrl + AppConfig.SERVICE.GET_READ_ME.replace('##', owner).replace('$$', repo); 
    /*this.repoService.getRepoTabContent(readMeContentURL,owner,repo).subscribe((res)=>{
      this.readMeContent =  atob(res.content);
    });*/


    let contributersURL  = environment.apiUrl + AppConfig.SERVICE.GET_CONTRIB.replace('##', owner).replace('$$', repo); 
    this.repoService.getRepoTabContent(contributersURL,owner,repo).subscribe((res)=>{
      this.contributors = res;
      console.log("contributers",res);
    });

    let branchesURL  = environment.apiUrl + AppConfig.SERVICE.GET_BRANCHES.replace('##', owner).replace('$$', repo); 
    this.repoService.getRepoTabContent(branchesURL,owner,repo).subscribe((res)=>{
      this.branches =  res;
      console.log("branches",res);
    });

    let issuesURL  = environment.apiUrl + AppConfig.SERVICE.GET_ISSUES.replace('##', owner).replace('$$', repo); 
    this.repoService.getRepoTabContent(issuesURL,owner,repo).subscribe((res)=>{
      this.issues =  res;
      console.log("issues",res);
    });
  }
  
}
