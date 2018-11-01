export class AppConfig {
    public static DATAPERPAGE = '100';
    public static SERVICE = {
        'USER_SEARCH': 'search/users',
        'REPO_SEARCH': 'search/repositories',
        'GET_READ_ME': 'repos/##/$$/readme',
        'GET_CONTRIB': 'repos/##/$$/contributors',
        'GET_BRANCHES': 'repos/##/$$/branches',
        'GET_ISSUES': 'repos/##/$$/issues',
        'GET_USER_DETAILS':'users/##',
        'GET_SING_REPO_DETAILS':'repos/##/$$',
        'GET_REPO_DETAILS':'users/##/repos',
        'GET_FOLLOWER_DETAILS':'users/##/followers'
    }
};

