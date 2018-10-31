import { ActivatedRoute } from '@angular/router';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userName;

  userInfo:any;
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

  }
}
