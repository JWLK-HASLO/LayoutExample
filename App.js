import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text>Navigation Top Bar</Text>
            </View>
            <View style={styles.mainBody}>
                <View style={styles.left}></View>
                <View style={styles.right}>
                    <View style={styles.rightTop}></View>
                    <View style={styles.rightBottom}></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    navBar: {
        height: 80,
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBody: {
        flex: 1,
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
    },
    right: {
        flex: 2,
        flexDirection: 'column',
    },
    rightTop: {
        flex: 1,
        backgroundColor: 'blue',
    },
    rightBottom: {
        flex: 2,
        backgroundColor: 'yellow',
    },
});
