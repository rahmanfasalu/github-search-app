import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppConfig } from '../_helpers/app.config';
import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable()
export class RepoService {

  private repoInfo = [];
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('RepoService');
  }

  getAllRepos(query: string, page: string): Observable<any> {
    let pageSize = AppConfig.DATAPERPAGE;
    let url = environment.apiUrl + AppConfig.SERVICE.REPO_SEARCH;
    let obj = {
      'per_page': pageSize,
      'page': page,
      'q': query
    }
    let httpParams = new HttpParams({ fromObject: obj });
    const options = { params: httpParams }

    return this.http.get(url, options)
      .pipe(map(response => {
        this.repoInfo = this.repoInfo.concat(response && response['items'] || []);
        return response;
      }),
        catchError(this.handleError('getAllUsers', []))
    );
  }


  getRepoDetail(id) {
    return this.repoInfo.filter(item => item.id === Number(id));
  }

  clearRepoDetail() {
    return this.repoInfo = [];
  }

  getReleases(){
    return this.http.get('https://api.github.com/repos/angular/angular/readme')
      .pipe(map(response => {
        this.repoInfo = this.repoInfo.concat(response && response['items'] || []);
        return response;
      }),
        catchError(this.handleError('getAllUsers', []))
    );
  }

  getRepoTabContent(url,owner,repo): Observable<any>{
    return this.http.get(url)
      .pipe(map(response => {
        return response;
      }),
        catchError(this.handleError('getAllUsers', []))
    );
  }
}
