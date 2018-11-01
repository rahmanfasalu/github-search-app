import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RepoService } from '../_services';
import { AppConfig } from '../_helpers';
import { environment } from 'src/environments/environment.prod';


/*
 ---------------   RepoComponent --------------
 @description:
 Repo Details  component
 @invoke : /repo/{repo ID}/{owner login id}/{repo name}
*/
@Component({
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  public repoName:any;
  public repoOwner:any;
  public repoInfo:any;
  public viewMode:string;
  public repo:string;
  public owner:string;

  readMeContent:any;
  contributors:any = [];
  branches:any = [];
  issues:any = [];

  /*
  * @description: 
  * repo service and activated route initialized,
  * repo service for repo related service and activated route for gettting route param
  */
  constructor(private repoService: RepoService, private activatedRoute: ActivatedRoute) {
  }


  /**
  * A callback method that is invoked immediately after the component init
  * 
  * @description: 
  * for fetching repo related data for the page,
  * the function will search repo info in the application cache, if not found then will call backend API for fetch data.
  * @param : none
  * @returns:void
  */
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
  

  /**
  * initRepo 
  * 
  * @description: 
  * for fetching the following list to show in the repo page
  * - contributors list
  * - branches list
  * - issues list
  * @param : info- user details object
  * @returns:void
  */
  initRepo(owner,repo){
    this.viewMode = 'tab1';
    let readMeContentURL  = environment.apiUrl + AppConfig.SERVICE.GET_READ_ME.replace('##', owner).replace('$$', repo); 
    /*this.repoService.getRepoTabContent(readMeContentURL,owner,repo).subscribe((res)=>{
      this.readMeContent =  atob(res.content);
    });*/


    let contributersURL  = environment.apiUrl + AppConfig.SERVICE.GET_CONTRIB.replace('##', owner).replace('$$', repo); 
    this.repoService.getRepoTabContent(contributersURL,owner,repo).subscribe((res)=>{
      this.contributors = res;
    });

    let branchesURL  = environment.apiUrl + AppConfig.SERVICE.GET_BRANCHES.replace('##', owner).replace('$$', repo); 
    this.repoService.getRepoTabContent(branchesURL,owner,repo).subscribe((res)=>{
      this.branches =  res;
    });

    let issuesURL  = environment.apiUrl + AppConfig.SERVICE.GET_ISSUES.replace('##', owner).replace('$$', repo); 
    this.repoService.getRepoTabContent(issuesURL,owner,repo).subscribe((res)=>{
      this.issues =  res;
    });
  }
  
}
