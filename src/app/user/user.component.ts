import { ActivatedRoute } from '@angular/router';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AppConfig } from '../_helpers';



/*
 ---------------   UserComponent --------------
 @description:
 User Details  component
 @invoke : /user/{user name}
*/
@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userName;

  userInfo:any;
  reposInfo:any = [];
  followers:any = [];

  /*
  * @description: 
  * user service and activated route initialized,
  * user service for user related service and activated route for gettting route param
  */
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {

  }

  /**
  * A callback method that is invoked immediately after the component init
  * 
  * @description: 
  * for fetching user related data for the page,
  * the function will search user info in the application cache, if not found then will call backend API for fetch data.
  * @param : none
  * @returns:void
  */
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
  
  /**
  * initUserDetails 
  * 
  * @description: 
  * for fetching repositery list corresponding to user and followers list
  * @param : info- user details object
  * @returns:void
  */
  initUserDetails(info){
    let owner = info.login;
    let reposURL  = environment.apiUrl + AppConfig.SERVICE.GET_REPO_DETAILS.replace('##', owner); 
    this.userService.getUserPageContent(reposURL,owner).subscribe((res)=>{
      this.reposInfo =  res;
    });


    let followersURL  = environment.apiUrl + AppConfig.SERVICE.GET_FOLLOWER_DETAILS.replace('##', owner); 
    this.userService.getUserPageContent(followersURL,owner).subscribe((res)=>{
      this.followers = res;
    });
  }
}
