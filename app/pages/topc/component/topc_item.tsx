import {
    ListRenderItemInfo,
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    GestureResponderEvent,
    Image
} from 'react-native';
import React from 'react';
import { ITopic } from '../models';

export function TopicItem(props: { item: ListRenderItemInfo<ITopic>, onPress: (event: GestureResponderEvent) => void; }) {
    const {item, onPress} = props;
    return <TouchableHighlight onPress={onPress}>
        <View style={style.item}>
            <Image style={style.avatar} source={{uri: item.item.author.avatar_url}}/>
            <View style={style.itemDetail}>
                <Text style={style.itemTitle}>
                    {item.item.title}
                </Text>
                <Text style={style.itemContent}>
                    {item.item.content}
                </Text>
            </View>

        </View>
    </TouchableHighlight>;
}


const style = StyleSheet.create({
    item: {
        flex: 1, // height:80,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        paddingVertical: 10,
        overflow: 'hidden', // justifyContent: 'center',
        flexDirection: 'row',
    }, avatar: {
        borderRadius: 25, width: 50, height: 50,

    }, itemDetail: {
        flexShrink: 1,
        paddingLeft: 10, overflow: 'hidden'
    }, itemTitle: {fontSize: 18}, itemContent: { minHeight: 20, fontSize: 12, maxHeight: 60, overflow: 'hidden'}
});
