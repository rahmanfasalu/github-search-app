export class AppConfig {
    public static DATAPERPAGE = '50';
    public static SERVICE = {
        'USER_SEARCH': 'search/users',
        'REPO_SEARCH': 'search/repositories',
        'GET_READ_ME': 'repos/##/$$/readme',
        'GET_CONTRIB': 'repos/##/$$/contributors',
        'GET_BRANCHES': 'repos/##/$$/branches',
        'GET_ISSUES': 'repos/##/$$/issues'
    }
};

