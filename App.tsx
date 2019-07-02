/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {TopicPage} from "./app/pages/topc/topc_page";
import { createStackNavigator, createAppContainer } from "react-navigation"
import TopicDetailPage from "./app/pages/topc/topic_detail_page";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or dd shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
  topics: TopicPage,
  topicDetail: TopicDetailPage,
}, {
  initialRouteName: 'topics'
})) ;
