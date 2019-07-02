import {http} from "../../core/http";
import queryString from 'query-string';
import { ITopic, ITopicDetail, TTopicType } from './models';
const topicApi = {
    getTopic: '/api/v1/topics',
    getTopicDetail: '/api/v1/topic/'
};
export interface ITopicParam {
    page:number;
    tab: TTopicType;
    limit : number;
    mdrender : boolean
}
export const getTopics = (requestParam: Partial<ITopicParam>) => {
    const defaultParam = {
        limit: 10,
        mdrender: false
    };
    const qString = queryString.stringify({...defaultParam, ...requestParam});
    return http<ITopic[]>(`${topicApi.getTopic}?${qString}`);
};

export const getTopicDetail = (id:string) => {
    return http<ITopicDetail>(`${topicApi.getTopicDetail}${id}`);
};