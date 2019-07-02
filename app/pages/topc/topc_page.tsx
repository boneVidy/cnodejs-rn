import React, {Component} from 'react';
import {FlatList, ListRenderItemInfo, NativeScrollEvent, NativeSyntheticEvent, SafeAreaView, View} from "react-native";
import {getTopics} from "./topc_service";
import {ITopic} from "./models";
import {TopicItem} from "./component/topc_item";
import {RouteProps} from "../../core/types";

export class TopicPage extends Component<RouteProps> {
    state = {
        topics: [] as ITopic[]
    };
    private onScrollEnd = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
    };

    componentDidMount(): void {
        getTopics({page: 1}).then(res => {
            if (res.success) {
                this.setState({topics: res.data})
            }
        })
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <FlatList
                        onScrollEndDrag={this.onScrollEnd}
                        data={this.state.topics}
                        renderItem={item => <TopicItem onPress={() => this.onPress(item)} key={item.index} item={item}/>}
                    />
                </View>
            </SafeAreaView>
        );
    }

    private onPress = (item: ListRenderItemInfo<ITopic>)  => {
        this.props.navigation.navigate('topicDetail', {id: item.item.id});
    }
}

