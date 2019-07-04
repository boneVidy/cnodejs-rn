/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Component} from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation"
import TopicDetailPage from "./app/pages/topc/topic_detail_page";
import TabPage from './app/pages/tab/tab_page';
import { RouterEnum } from './app/core/types';
type Props = {};
export default class App extends Component<Props> {
  render() {
      return <AppContainer style={styles.container}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
});


const AppContainer = createAppContainer(createStackNavigator({
  [RouterEnum.Tab]: TabPage,
  [RouterEnum.TopicDetail]: TopicDetailPage,
}, {
  initialRouteName: RouterEnum.Tab
})) ;

