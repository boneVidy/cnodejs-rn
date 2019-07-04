import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { TopicPage } from '../topc/topc_page';
import UserPage from '../user/user_page';
import { View } from 'react-native';
import { RouteProps, RouterEnum } from '../../core/types';

class TabPage extends Component<RouteProps> {
    render() {
        return <View style={{flex: 1}}><BottomTab screenProps={this.props.navigation}/></View>
    }
}


const BottomTab = createAppContainer(createBottomTabNavigator({
    [RouterEnum.Topics]: {
        screen: TopicPage,
    },
    [RouterEnum.User]: UserPage
}, {initialRouteName: RouterEnum.Topics}));

export default TabPage;
