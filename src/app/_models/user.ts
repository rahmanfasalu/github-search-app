export class User {
    total_count: number;
    incomplete_results: boolean;
    items: UserObj[];
}

export class UserObj {
    id: number;
    login: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    type: string;
    received_events_url: string;
    site_admin: boolean;
    score: number;
}