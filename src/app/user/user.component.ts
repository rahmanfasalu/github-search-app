import { ActivatedRoute } from '@angular/router';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userId;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.userId = param.id;
      console.log(param)
      console.log(this.userService.getUserDetail(this.userId));
    })
  }

}
