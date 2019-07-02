import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
interface HelloProps {
    name: string;
}
const defaultState = {
    count: 0
}
export class Hello extends React.Component<HelloProps, typeof defaultState> {
    state = defaultState;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {name} = this.props;
        return <View>
            <Button onPress={() => this.setState({count: this.state.count + 1})} title={'add'}>add</Button>
            <Text>{this.state.count}</Text>
            <Text style={style.halo}>hello{name}</Text>
            <Button onPress={() => this.setState({count: this.state.count - 1})} title={'dec'}>dec</Button>

        </View>;
    }
}


const style = StyleSheet.create({
    halo: {
        fontSize:20
    }
});
