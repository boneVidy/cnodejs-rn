import React, { Component } from 'react';
import { RootScreenProps, RouteProps, RouterEnum } from '../../../core/types';
import {
    ActivityIndicator, FlatList, ListRenderItemInfo, NativeScrollEvent, NativeSyntheticEvent, SafeAreaView, View
} from 'react-native';
import { getTopics } from '../topc_service';
import { TopicItem } from './topc_item';
import { ITopic, TopicType } from '../models';

/**
 *
 * @author vidy[Of2732号]
 * company qianmi.com
 * Date 2019-07-04
 *
 */
const defaultState = {
    topics: [] as ITopic[], isRefreshing: false
};


export type TopicListProps = RouteProps & RootScreenProps & { tab: TopicType };

export class TopicList extends Component<TopicListProps, typeof defaultState> {
    state = defaultState;
    private page = 1;
    private isLoadingMore = false;
    private onScrollEnd = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
        console.log('scrollEnd', ev);
    };

    private initialTopic = () => {
        getTopics({page: this.page, tab: this.props.tab}).then(res => {
            if (res.success) {
                this.setState({topics: res.data, isRefreshing: false})
            }
        })
    };

    private getMoreTopic = () => {
        console.log('reach end', this.isLoadingMore);
        if (this.isLoadingMore || this.state.isRefreshing) return;
        this.page++;
        this.isLoadingMore = true;
        getTopics({page: this.page, tab: this.props.tab})
            .then(res => {
                console.log('response', res, this.page);
                if (res.success) {
                    this.setState({topics: this.state.topics.concat(res.data)});
                }
            }).finally(() => this.isLoadingMore = false);
    };

    private refresh = () => {
        this.page = 1;
        this.initialTopic();
    };

    componentDidMount(): void {
        this.setState({isRefreshing: true});
        this.initialTopic();
    }


    render() {
        const {isRefreshing} = this.state;
        return (<SafeAreaView>
                <View>
                    <FlatList
                        keyExtractor={(item) => item.id }
                        style={{minHeight: 200}}
                        ListFooterComponent={() => (<View>
                            {isRefreshing ? null : <ActivityIndicator/>}
                        </View>)}
                        onEndReached={this.getMoreTopic}
                        refreshing={isRefreshing}
                        onRefresh={this.refresh}
                        onScrollEndDrag={this.onScrollEnd}
                        data={this.state.topics}
                        renderItem={item => <TopicItem onPress={() => this.onPress(item)} key={item.index}
                                                       item={item}/>}
                    />
                </View>
            </SafeAreaView>);
    }

    private onPress = (item: ListRenderItemInfo<ITopic>) => {
        this.props.screenProps.navigate(RouterEnum.TopicDetail, {id: item.item.id});
    }
}