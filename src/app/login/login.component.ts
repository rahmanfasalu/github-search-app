import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services';

/*
 ---------------   LoginComponent --------------
 @description:
 Login  component
 @invoke : /login
*/
@Component(
        {
        templateUrl: 'login.component.html',
        styleUrls: ['login.scss']
        })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    
    /*
    * @description: 
    * FormBuilder,ActivatedRoute,router,authenticationService initialized
    * form bulder for form component, activated route for retriving params, AuthenticationService for auth related service
    */
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}
    
   /**
     * A callback method that is invoked immediately after the component init
     * 
     * @description: 
     * just for initialize the variable
     * @param : none
     * @returns:void
    */
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.authenticationService.logout();
        this.returnUrl = '/home';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


    /**
     * onSubmit
     * 
     * @description: 
     * form submit handler 
     * @param : none
     * @returns:void
    */
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                });
    }
}
