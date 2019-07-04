import React, {Component} from 'react';
import {
    ActivityIndicator,
    FlatList,
    ListRenderItemInfo,
    NativeScrollEvent,
    NativeSyntheticEvent,
    SafeAreaView,
    View
} from 'react-native';
import {getTopics} from "./topc_service";
import {ITopic} from "./models";
import {TopicItem} from "./component/topc_item";
import {RouteProps} from "../../core/types";
import { NavigationScreenProp } from 'react-navigation';
const defaultState = {
    topics: [] as ITopic[],
    isRefreshing: false
};
export class TopicPage extends Component<RouteProps & {screenProps: NavigationScreenProp<any, any>}, typeof defaultState> {
    state = defaultState;
    private page = 1;
    private isLoadingMore = false;
    private onScrollEnd = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
        console.log('scrollEnd', ev);
    };

    private initialTopic = () => {
        getTopics({page: this.page}).then(res => {
            if (res.success) {
                this.setState({topics: res.data, isRefreshing: false})
            }
        })
    };

    private getMoreTopic = () => {
        console.log('reach end', this.isLoadingMore);
        if (this.isLoadingMore || this.state.isRefreshing) return;
        this.page ++;
        this.isLoadingMore = true;
        getTopics({page: this.page})
            .then(res => {
                console.log('response', res, this.page);
                if(res.success) {
                    this.setState({topics: this.state.topics.concat(res.data)});
                }
            }).finally(() => this.isLoadingMore = false )
        ;
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
        return (
            <SafeAreaView>
                <View>
                    <FlatList
                        style={{minHeight:200}}
                        ListFooterComponent={() => (<View>
                            {isRefreshing? null: <ActivityIndicator/>
                            }
                        </View>)
                        }
                        onEndReached={this.getMoreTopic}
                        refreshing={isRefreshing}
                        onRefresh={this.refresh}
                        onScrollEndDrag={this.onScrollEnd}
                        data={this.state.topics}
                        renderItem={item => <TopicItem onPress={() => this.onPress(item)} key={item.index} item={item}/>}
                    />
                </View>
            </SafeAreaView>
        );
    }

    private onPress = (item: ListRenderItemInfo<ITopic>)  => {
        console.log(this.props);

        this.props.screenProps.navigate('topicDetail', {id: item.item.id});
        // this.props.parentNavigation.navigate('topicDetail', {id: item.item.id});
        // this.props.parentNavigation.navigate('topicDetail', {id: item.item.id});
    }
}

