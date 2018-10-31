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
    console.log(url);
    let a = {
      "total_count": 9,
      "incomplete_results": false,
      "items": [
        {
          "login": "rahmanfadhil",
          "id": 28192207,
          "node_id": "MDQ6VXNlcjI4MTkyMjA3",
          "avatar_url": "https://avatars3.githubusercontent.com/u/28192207?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rahmanfadhil",
          "html_url": "https://github.com/rahmanfadhil",
          "followers_url": "https://api.github.com/users/rahmanfadhil/followers",
          "following_url": "https://api.github.com/users/rahmanfadhil/following{/other_user}",
          "gists_url": "https://api.github.com/users/rahmanfadhil/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rahmanfadhil/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rahmanfadhil/subscriptions",
          "organizations_url": "https://api.github.com/users/rahmanfadhil/orgs",
          "repos_url": "https://api.github.com/users/rahmanfadhil/repos",
          "events_url": "https://api.github.com/users/rahmanfadhil/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rahmanfadhil/received_events",
          "type": "User",
          "site_admin": false,
          "score": 97.67221
        },
        {
          "login": "rahmanfaaz",
          "id": 22659209,
          "node_id": "MDQ6VXNlcjIyNjU5MjA5",
          "avatar_url": "https://avatars1.githubusercontent.com/u/22659209?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rahmanfaaz",
          "html_url": "https://github.com/rahmanfaaz",
          "followers_url": "https://api.github.com/users/rahmanfaaz/followers",
          "following_url": "https://api.github.com/users/rahmanfaaz/following{/other_user}",
          "gists_url": "https://api.github.com/users/rahmanfaaz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rahmanfaaz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rahmanfaaz/subscriptions",
          "organizations_url": "https://api.github.com/users/rahmanfaaz/orgs",
          "repos_url": "https://api.github.com/users/rahmanfaaz/repos",
          "events_url": "https://api.github.com/users/rahmanfaaz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rahmanfaaz/received_events",
          "type": "User",
          "site_admin": false,
          "score": 36.557453
        },
        {
          "login": "rahmanfasi",
          "id": 25979200,
          "node_id": "MDQ6VXNlcjI1OTc5MjAw",
          "avatar_url": "https://avatars0.githubusercontent.com/u/25979200?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rahmanfasi",
          "html_url": "https://github.com/rahmanfasi",
          "followers_url": "https://api.github.com/users/rahmanfasi/followers",
          "following_url": "https://api.github.com/users/rahmanfasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/rahmanfasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rahmanfasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rahmanfasi/subscriptions",
          "organizations_url": "https://api.github.com/users/rahmanfasi/orgs",
          "repos_url": "https://api.github.com/users/rahmanfasi/repos",
          "events_url": "https://api.github.com/users/rahmanfasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rahmanfasi/received_events",
          "type": "User",
          "site_admin": false,
          "score": 18.243162
        },
        {
          "login": "rahmanfauzan",
          "id": 29215502,
          "node_id": "MDQ6VXNlcjI5MjE1NTAy",
          "avatar_url": "https://avatars3.githubusercontent.com/u/29215502?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rahmanfauzan",
          "html_url": "https://github.com/rahmanfauzan",
          "followers_url": "https://api.github.com/users/rahmanfauzan/followers",
          "following_url": "https://api.github.com/users/rahmanfauzan/following{/other_user}",
          "gists_url": "https://api.github.com/users/rahmanfauzan/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rahmanfauzan/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rahmanfauzan/subscriptions",
          "organizations_url": "https://api.github.com/users/rahmanfauzan/orgs",
          "repos_url": "https://api.github.com/users/rahmanfauzan/repos",
          "events_url": "https://api.github.com/users/rahmanfauzan/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rahmanfauzan/received_events",
          "type": "User",
          "site_admin": false,
          "score": 18.22653
        },
        {
          "login": "rahmanfadhli",
          "id": 38275115,
          "node_id": "MDQ6VXNlcjM4Mjc1MTE1",
          "avatar_url": "https://avatars0.githubusercontent.com/u/38275115?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rahmanfadhli",
          "html_url": "https://github.com/rahmanfadhli",
          "followers_url": "https://api.github.com/users/rahmanfadhli/followers",
          "following_url": "https://api.github.com/users/rahmanfadhli/following{/other_user}",
          "gists_url": "https://api.github.com/users/rahmanfadhli/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rahmanfadhli/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rahmanfadhli/subscriptions",
          "organizations_url": "https://api.github.com/users/rahmanfadhli/orgs",
          "repos_url": "https://api.github.com/users/rahmanfadhli/repos",
          "events_url": "https://api.github.com/users/rahmanfadhli/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rahmanfadhli/received_events",
          "type": "User",
          "site_admin": false,
          "score": 18.180092
        },
        {
          "login": "rahmanfarid",
          "id": 40599386,
          "node_id": "MDQ6VXNlcjQwNTk5Mzg2",
          "avatar_url": "https://avatars3.githubusercontent.com/u/40599386?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rahmanfarid",
          "html_url": "https://github.com/rahmanfarid",
          "followers_url": "https://api.github.com/users/rahmanfarid/followers",
          "following_url": "https://api.github.com/users/rahmanfarid/following{/other_user}",
          "gists_url": "https://api.github.com/users/rahmanfarid/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rahmanfarid/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rahmanfarid/subscriptions",
          "organizations_url": "https://api.github.com/users/rahmanfarid/orgs",
          "repos_url": "https://api.github.com/users/rahmanfarid/repos",
          "events_url": "https://api.github.com/users/rahmanfarid/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rahmanfarid/received_events",
          "type": "User",
          "site_admin": false,
          "score": 18.150532
        },
        {
          "login": "RahmanFard",
          "id": 15854082,
          "node_id": "MDQ6VXNlcjE1ODU0MDgy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/15854082?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/RahmanFard",
          "html_url": "https://github.com/RahmanFard",
          "followers_url": "https://api.github.com/users/RahmanFard/followers",
          "following_url": "https://api.github.com/users/RahmanFard/following{/other_user}",
          "gists_url": "https://api.github.com/users/RahmanFard/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/RahmanFard/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/RahmanFard/subscriptions",
          "organizations_url": "https://api.github.com/users/RahmanFard/orgs",
          "repos_url": "https://api.github.com/users/RahmanFard/repos",
          "events_url": "https://api.github.com/users/RahmanFard/events{/privacy}",
          "received_events_url": "https://api.github.com/users/RahmanFard/received_events",
          "type": "User",
          "site_admin": false,
          "score": 18.082104
        },
        {
          "login": "Rahmanfatur",
          "id": 20009945,
          "node_id": "MDQ6VXNlcjIwMDA5OTQ1",
          "avatar_url": "https://avatars1.githubusercontent.com/u/20009945?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Rahmanfatur",
          "html_url": "https://github.com/Rahmanfatur",
          "followers_url": "https://api.github.com/users/Rahmanfatur/followers",
          "following_url": "https://api.github.com/users/Rahmanfatur/following{/other_user}",
          "gists_url": "https://api.github.com/users/Rahmanfatur/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Rahmanfatur/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Rahmanfatur/subscriptions",
          "organizations_url": "https://api.github.com/users/Rahmanfatur/orgs",
          "repos_url": "https://api.github.com/users/Rahmanfatur/repos",
          "events_url": "https://api.github.com/users/Rahmanfatur/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Rahmanfatur/received_events",
          "type": "User",
          "site_admin": false,
          "score": 16.605282
        },
        {
          "login": "rahmanfasalu",
          "id": 3534052,
          "node_id": "MDQ6VXNlcjM1MzQwNTI=",
          "avatar_url": "https://avatars2.githubusercontent.com/u/3534052?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rahmanfasalu",
          "html_url": "https://github.com/rahmanfasalu",
          "followers_url": "https://api.github.com/users/rahmanfasalu/followers",
          "following_url": "https://api.github.com/users/rahmanfasalu/following{/other_user}",
          "gists_url": "https://api.github.com/users/rahmanfasalu/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rahmanfasalu/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rahmanfasalu/subscriptions",
          "organizations_url": "https://api.github.com/users/rahmanfasalu/orgs",
          "repos_url": "https://api.github.com/users/rahmanfasalu/repos",
          "events_url": "https://api.github.com/users/rahmanfasalu/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rahmanfasalu/received_events",
          "type": "User",
          "site_admin": false,
          "score": 16.605282
        }
      ]
    }
    this.userInfo = a.items;
    return of(a);
    /*return this.http.get(url, options)
      .pipe(map(response => {
        this.userInfo = this.userInfo.concat(response && response['items'] || []);
        return response;
      }),
        catchError(this.handleError('getAllUsers', []))
      );*/
  }

  getUserDetail(id) {
    return this.userInfo.filter(item => item.id === Number(id));
  }

  clearUserDetail() {
    return this.userInfo = [];
  }
}