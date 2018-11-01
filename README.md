# Github Search App
An Angular 6 app for search github users and repositeries, just a sample app nothing serious.
  - No bootstrap or other predefined styles used
  - Responsive, lowest screen resolution is 320px in width 
  - SCSS is used for styling
#  Features implemented 
  - Github user search and single display page
  - Github repo search and single display page
  - Initial search result count is 100, data will laod upon scroll (infinite scroll)
  - Custom HTTP interceptor for http header set, request error handling
  - Error handler service for application error 
### Tech
* [AngularJS] - HTML enhanced for web apps!
* [Visual studio code] - awesome web-based text editor
* [node.js] - package manager
* [Webpack] - the  build system
### Installation
clone or download the code
```sh
git clone https://github.com/rahmanfasalu/github-search-app.git
```
Install the dependencies and devDependencies and start the server.
```sh
$ cd github-search-app
$ npm install 
$ ng serve  // for dev build
$ ng serve --port 5200 // for specefic port run
$ ng build  // for production - minified build
```
### Todos
 - Write Tests
 - Two factor authentication using git.api
 - Githup API have limited access for public search, so personal access token / autherization needed for seemless search

License
----
MIT

Author
----
https://github.com/rahmanfasalu

