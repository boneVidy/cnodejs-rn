import { DateString, HtmlString } from '../../core/types';




export type TTopicType = 'ask' |'share' | 'job'| 'good';
export interface ITopic {
    id: string;
    author_id: string;
    tab: string;
    content: HtmlString;
    title: string;
    last_reply_at: Date;
    good: boolean;
    top: boolean;
    reply_count: number;
    visit_count: number;
    create_at: Date;
    author: Author;
}
export interface Author {
    loginname: string;
    avatar_url: string;
}

export interface ITopicDetail extends ITopic{
    replies: IReply[];
    is_collect: boolean;
}

export interface IReply {
    id: string;
    author: Author;
    ups: string[];
    content: HtmlString;
    create_at: DateString;
    reply_id: string;
}