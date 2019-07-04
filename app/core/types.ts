import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

export type MaybeNil<T>  = Nil | T;
export type Nil = null | undefined;
export type HtmlString = string;
export type DateString = string;

export interface RouteProps<T extends NavigationParams = {}> {
    navigation: NavigationScreenProp<NavigationState, T>;
}



export enum RouterEnum {
    Tab = 'Tab',
    User = 'User',
    Topics = 'Topics',
    TopicDetail = 'TopicDetail',
}


export interface RootScreenProps {
    screenProps: NavigationScreenProp<any, any>;
}