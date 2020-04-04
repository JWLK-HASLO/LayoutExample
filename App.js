import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.left}></View>
            <View style={styles.right}>
                <View style={styles.rightTop}></View>
                <View style={styles.rightBottom}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
    },
    right: {
        flex: 1,
        flexDirection: 'column',
    },
    rightTop: {
        flex: 1,
        backgroundColor: 'blue',
    },
    rightBottom: {
        flex: 1,
        backgroundColor: 'yellow',
    },
});
