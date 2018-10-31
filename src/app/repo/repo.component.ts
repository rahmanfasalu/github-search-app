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
      this.repoInfo =  {
        "id": 24195339,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNDE5NTMzOQ==",
        "name": "angular",
        "full_name": "angular/angular",
        "private": false,
        "owner": {
          "login": "angular",
          "id": 139426,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
          "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/angular",
          "html_url": "https://github.com/angular",
          "followers_url": "https://api.github.com/users/angular/followers",
          "following_url": "https://api.github.com/users/angular/following{/other_user}",
          "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
          "organizations_url": "https://api.github.com/users/angular/orgs",
          "repos_url": "https://api.github.com/users/angular/repos",
          "events_url": "https://api.github.com/users/angular/events{/privacy}",
          "received_events_url": "https://api.github.com/users/angular/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "html_url": "https://github.com/angular/angular",
        "description": "One framework. Mobile & desktop.",
        "fork": false,
        "url": "https://api.github.com/repos/angular/angular",
        "forks_url": "https://api.github.com/repos/angular/angular/forks",
        "keys_url": "https://api.github.com/repos/angular/angular/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/angular/angular/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/angular/angular/teams",
        "hooks_url": "https://api.github.com/repos/angular/angular/hooks",
        "issue_events_url": "https://api.github.com/repos/angular/angular/issues/events{/number}",
        "events_url": "https://api.github.com/repos/angular/angular/events",
        "assignees_url": "https://api.github.com/repos/angular/angular/assignees{/user}",
        "branches_url": "https://api.github.com/repos/angular/angular/branches{/branch}",
        "tags_url": "https://api.github.com/repos/angular/angular/tags",
        "blobs_url": "https://api.github.com/repos/angular/angular/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/angular/angular/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/angular/angular/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/angular/angular/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/angular/angular/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/angular/angular/languages",
        "stargazers_url": "https://api.github.com/repos/angular/angular/stargazers",
        "contributors_url": "https://api.github.com/repos/angular/angular/contributors",
        "subscribers_url": "https://api.github.com/repos/angular/angular/subscribers",
        "subscription_url": "https://api.github.com/repos/angular/angular/subscription",
        "commits_url": "https://api.github.com/repos/angular/angular/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/angular/angular/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/angular/angular/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/angular/angular/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/angular/angular/contents/{+path}",
        "compare_url": "https://api.github.com/repos/angular/angular/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/angular/angular/merges",
        "archive_url": "https://api.github.com/repos/angular/angular/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/angular/angular/downloads",
        "issues_url": "https://api.github.com/repos/angular/angular/issues{/number}",
        "pulls_url": "https://api.github.com/repos/angular/angular/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/angular/angular/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/angular/angular/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/angular/angular/labels{/name}",
        "releases_url": "https://api.github.com/repos/angular/angular/releases{/id}",
        "deployments_url": "https://api.github.com/repos/angular/angular/deployments",
        "created_at": "2014-09-18T16:12:01Z",
        "updated_at": "2018-10-31T05:52:01Z",
        "pushed_at": "2018-10-31T00:58:42Z",
        "git_url": "git://github.com/angular/angular.git",
        "ssh_url": "git@github.com:angular/angular.git",
        "clone_url": "https://github.com/angular/angular.git",
        "svn_url": "https://github.com/angular/angular",
        "homepage": "https://angular.io",
        "size": 92877,
        "stargazers_count": 42163,
        "watchers_count": 42163,
        "language": "TypeScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": false,
        "forks_count": 10595,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 2570,
        "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
        },
        "topics": [
          "angular",
          "javascript",
          "pwa",
          "typescript",
          "web",
          "web-framework",
          "web-performance"
        ],
        "forks": 10595,
        "open_issues": 2570,
        "watchers": 42163,
        "default_branch": "master",
        "score": 149.4488
      }
      console.log(this.repoInfo);

      if(this.repoInfo){
        this.repo = this.repoInfo.name;
        this.owner = this.repoInfo.owner  && this.repoInfo.owner.login ? this.repoInfo.owner.login: '';
        this.initRepo(this.repo,this.owner);
      }else{

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
