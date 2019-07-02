import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

export type MaybeNil<T>  = Nil | T;
export type Nil = null | undefined;
export type HtmlString = string;
export type DateString = string;

export interface RouteProps<T extends NavigationParams = {}> {
    navigation: NavigationScreenProp<NavigationState, T>;
}
