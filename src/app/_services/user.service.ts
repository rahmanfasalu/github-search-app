import { UserObj } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import { AppConfig } from '../_helpers/app.config';
import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UserService {
  private userInfo: UserObj[] = [];
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  getAllUsers(query: string, page: string): Observable<any> {
    let url = environment.apiUrl + AppConfig.SERVICE.USER_SEARCH;
    let pageSize = AppConfig.DATAPERPAGE;
    let obj = {
      'per_page': pageSize,
      'page': page,
      'q': query
    }
    let httpParams = new HttpParams({ fromObject: obj });
    const options = query ? { params: httpParams } : {};
    return this.http.get(url, options)
      .pipe(map(response => {
        this.userInfo = this.userInfo.concat(response && response['items'] || []);
        return response;
      }),
        catchError(this.handleError('getAllUsers', []))
    );
  }

  getUserDetail(id) {
    return this.userInfo.filter(item => item.id === Number(id));
  }

  clearUserDetail() {
    return this.userInfo = [];
  }
}