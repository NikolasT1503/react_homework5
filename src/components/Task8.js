import React, {Component} from 'react';
/* import {StyleSheet, Text, View } from 'react-native'; */

export default class Task8 extends Component {
    constructor(props) {
         super(props);
        console.log('Task8 - constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Task8 - getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('Task8 - componentDidMount');
    }

    render(){
        console.log('Task8 - render')
        return (
            <div>
                Task8
            </div>
/*             <View style = {StyleSheet.viewStyle}>
                <Text style = {StyleSheet.textStyle}>STAR GATE</Text>
            </View> */
        )
    }
}

/* const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#30d0fe',
        height: 116,
        justifyContent: 'center',
        paddingLeft: 22,
        paddingTop: 71,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
    },
    testStyle: {

    }
}) */