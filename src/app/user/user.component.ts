import { ActivatedRoute } from '@angular/router';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AppConfig } from '../_helpers';
@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userName;

  userInfo:any;
  reposInfo:any = [];
  followers:any = [];
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.userName = param.login;
      this.userInfo = this.userService.getUserDetail(this.userName);
      if(this.userInfo && this.userInfo.login){
          this.initUserDetails(this.userInfo);
      }else{
        if(this.userName){ 
          this.userService.getSingleUserDetails(this.userName).subscribe((response)=>{
            this.userInfo = response
            this.initUserDetails(this.userInfo);
          });
        }
      }
    })
  }

  initUserDetails(info){
    let owner = info.login;
    let reposURL  = environment.apiUrl + AppConfig.SERVICE.GET_REPO_DETAILS.replace('##', owner); 
    this.userService.getUserPageContent(reposURL,owner).subscribe((res)=>{
      this.reposInfo =  res;
      console.log(res);
    });


    let followersURL  = environment.apiUrl + AppConfig.SERVICE.GET_FOLLOWER_DETAILS.replace('##', owner); 
    this.userService.getUserPageContent(followersURL,owner).subscribe((res)=>{
      this.followers = res;
      console.log(res);
    });
  }
}
