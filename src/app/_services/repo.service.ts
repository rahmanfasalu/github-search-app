import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AppConfig } from "../_helpers/app.config";
import {
  HttpErrorHandler,
  HandleError,
} from "../_helpers/http-error-handler.service";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class RepoService {
  private repoInfo = [];
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("RepoService");
  }

  getAllRepos(query: string, page: string): Observable<any> {
    let pageSize = AppConfig.DATAPERPAGE;
    let url = environment.apiUrl + AppConfig.SERVICE.REPO_SEARCH;
    let obj = {
      per_page: pageSize,
      page: page,
      q: query,
    };
    let httpParams = new HttpParams({ fromObject: obj });
    const options = { params: httpParams };

    return this.http.get(url, options).pipe(
      map((response) => {
        this.repoInfo = this.repoInfo.concat(
          (response && response["items"]) || []
        );
        return response;
      }),
      catchError(this.handleError("getAllUsers", []))
    );
  }

  getRepoDetail(id) {
    let arr = this.repoInfo.filter((item) => item.id === Number(id));
    if (arr && arr.length) {
      return arr[0];
    } else {
      return {};
    }
  }

  clearRepoDetail() {
    return (this.repoInfo = []);
  }

  getRepoTabContent(url, owner, repo): Observable<any> {
    return this.http.get(url).pipe(
      map((response) => {
        return response;
      }),
      catchError(this.handleError("getAllUsers", []))
    );
  }

  getSingleRepoDetails(owner: string, name: string): Observable<any> {
    let url =
      environment.apiUrl +
      AppConfig.SERVICE.GET_SING_REPO_DETAILS.replace("##", owner).replace(
        "$$",
        name
      );
    return this.http.get(url).pipe(
      map((response) => {
        return response;
      }),
      catchError(this.handleError("getAllUsers", []))
    );
  }
}
