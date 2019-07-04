import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { TopicPage } from '../topc/topc_page';
import UserPage from '../user/user_page';
import { View } from 'react-native';
import { RouteProps } from '../../core/types';

class TabPage extends Component<RouteProps> {

    render() {
        // this.props.navigation
        return <View style={{flex: 1}}><BottomTab screenProps={this.props.navigation}/></View>
    }
}


const BottomTab = createAppContainer(createBottomTabNavigator({
    topics: {
        screen: TopicPage,
    },
    user: UserPage
}, {initialRouteName: 'topics'}));

export default TabPage;
