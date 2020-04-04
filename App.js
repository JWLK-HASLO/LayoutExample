import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// JSX Main Component
const App = () => {
    return (
        <View style={styles.container}>
            <NavBar />
            <MainBody />
        </View>
    );
};

// JSX Component
const NavBar = () => (
    <View style={navBar}>
        <Text>Navigation Top Bar Componnet</Text>
    </View>
);

// JSX Component
const MainBody = () => (
    <View style={styles.mainBody}>
        <View style={styles.left}></View>
        <View style={styles.right}>
            <View style={styles.rightTop}></View>
            <View style={styles.rightBottom}></View>
        </View>
    </View>
);

// Inline Style CSS
const navBar = {
    height: 80,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
};

// CSS Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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

export default App;
