import React, { Component } from 'react';
import { TopicType } from './models';
import { RouteProps } from '../../core/types';
import { createAppContainer, createMaterialTopTabNavigator, NavigationScreenProp } from 'react-navigation';
import { TopicList, TopicListProps } from './component/topic_list';


export class TopicPage extends Component<RouteProps & {screenProps: NavigationScreenProp<any, any>}> {
    render(){
        return <TopTab screenProps={this.props.screenProps} />;
    }
}

const createTopicList = (type: TopicType) => class Hoc extends Component<TopicListProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <TopicList {...this.props} tab={type}/>;
    }
};
const TopTab = createAppContainer(createMaterialTopTabNavigator({
    [TopicType.ASK]: createTopicList(TopicType.ASK),
    [TopicType.SHARE]: createTopicList(TopicType.SHARE),
    [TopicType.GOOD]: createTopicList(TopicType.GOOD),
    [TopicType.JOB]: createTopicList(TopicType.JOB),
}, {
    initialRouteName: TopicType.ASK
}));