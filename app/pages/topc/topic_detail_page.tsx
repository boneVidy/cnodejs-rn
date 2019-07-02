import React, {Component} from 'react';
import { ActivityIndicator, Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { MaybeNil, RouteProps } from '../../core/types';
import HTMLView from 'react-native-htmlview';
import { getTopicDetail } from './topc_service';
import { ITopicDetail } from './models';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
const defaultState = {
    topicDetail: null as MaybeNil<ITopicDetail>,
    isLoading: false,
    hasLoaded: false,
};
class TopicDetailPage extends Component<RouteProps<{id: string, title?: string}>, typeof defaultState> {
    state = defaultState;
    static navigationOptions = ({ navigation }: {navigation: NavigationScreenProp<NavigationState, {title: string}>}) => {
        return {
            headerTitle: <LogoTitle navigation={navigation} />,

        };
    };
    async componentDidMount() {
        await this.getDetail();
    }

    private async getDetail() {
        const id = this.props.navigation.getParam('id');
        console.log('id is ', id);
        this.setState({isLoading: true});
        try {
            const {data: topicDetail, success} = await getTopicDetail(id);
            if (success && topicDetail) {
                this.setState({topicDetail});
                this.props.navigation.setParams({title: topicDetail.title});
            }
            this.setState({hasLoaded: true})
        } finally {

            this.setState({isLoading: false});
        }

    }

    render() {
        const {topicDetail, isLoading} = this.state;
        if (isLoading) return <View style={style.loadingContainer}><ActivityIndicator/></View> ;
        if (!topicDetail) return <View><Text>暂无数据</Text></View>;
        return <View style={style.detailContent}>
            <View>
                <Text>{topicDetail.title}</Text>
            </View>
            <ScrollView>
                <HTMLView value={topicDetail.content}/>
            </ScrollView>
        </View>
    }
}

const LogoTitle = (props: {navigation: NavigationScreenProp<NavigationState, {title: string}>}) => {
    const title = props.navigation.getParam('title');
    return <Text>{title}</Text>
};
export default TopicDetailPage;


const style = StyleSheet.create({
    detailContent: {
        padding: 15,

    },
    loadingContainer: {
        justifyContent: 'center',
        flex:1,
        flexDirection:'column'
    }
});