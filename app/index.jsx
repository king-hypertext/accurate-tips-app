import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import { Colors } from '../constants/Colors'
import { useRouter } from 'expo-router';
import { NativeModules } from 'react-native';
import { metrics } from '../utilities/dimensions'
import { StatusBar } from 'expo-status-bar';

const { StatusBarManager } = NativeModules;
const statusBarHeight = StatusBarManager.HEIGHT;
export default function Index() {
    const router = useRouter();
    const handlePress = () => {
        // router.push('(tabs)');
        Alert.alert(
            'Open Settings',
            'Are you sure you want to open the Settings?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Open', onPress: () => router.push('(tabs)') },
            ],
            { cancelable: true }
        );
    }
    const skipAuth = () => {
        router.replace('(tabs)')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} style='light' backgroundColor={Colors.appColor} />
            <View style={styles.topContainer}>

            </View>
            <View style={styles.logo}>
                <Image style={styles.AppLogo} source={require('../assets/images/adaptive-icon.png')} />
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.header1}> Welcome To @ccurate Tips!  </Text>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>
                    Your Trusted Source of Accurate Football Betting
                    Odds and Expert Tips
                </Text>
                <TouchableOpacity onPress={handlePress}
                    style={{
                        backgroundColor: Colors.appColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: metrics.horizontal.small,
                        borderRadius: metrics.borderRadii.small,
                        marginVertical: 10
                    }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}
                    style={{
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: metrics.horizontal.small,
                        borderRadius: metrics.borderRadii.small,
                        marginVertical: 10,
                        borderWidth: 1,
                        borderColor: Colors.appColor
                    }}>
                    <Text style={{ color: Colors.appColor, fontSize: 18, fontWeight: 'bold' }}>Create Account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.skipContent}>
                <Text style={styles.skipContentText} onPress={skipAuth}>skip</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: Colors.appColor,
        margin: 0,
        zIndex: 4,
        padding: metrics.horizontal.large,
        flex: 1,
        bottom: '50%',
        borderBottomLeftRadius: metrics.horizontal.small,
        borderBottomRightRadius: metrics.horizontal.small,
    },
    skipContent: {
        position: 'absolute',
        bottom: 35,
        zIndex: 100,
        flex: 1,
        left: '25%',
        right: '25%',
    },
    skipContentText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: Colors.appColor,
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    header1: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 20,
        // paddingHorizontal: metrics.horizontal.small,
        // paddingVertical: metrics.vertical.small
    },
    logo: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        top: 100,
        zIndex: 6,
        borderRadius: metrics.borderRadii.medium,
        backgroundColor: '#fff',
        paddingVertical: metrics.vertical.small,
        paddingHorizontal: metrics.vertical.small,
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowOffset: {
            height: 2,
            width: 2,
        }
    },
    AppLogo: {
        width: 70,
        height: 70,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        // marginTop: 25,
        // paddingHorizontal: metrics.horizontal.small
    },
    UpperLayer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.appColor,
        padding: 0,
        borderBottomRightRadius: metrics.borderRadii.large,
        borderBottomLeftRadius: metrics.borderRadii.large,
    },
    mainContainer: {
        position: 'absolute',
        flex: 1,
        left: metrics.horizontal.medium,
        right: metrics.horizontal.medium,
        top: '35%',
        zIndex: 10,
        backgroundColor: Colors.light.background,
        paddingHorizontal: metrics.horizontal.medium,
        paddingVertical: metrics.vertical.medium,
        borderRadius: metrics.borderRadii.medium,
        shadowColor: Colors.light.tint,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: Colors.appColor,
        color: Colors.dark.text
    }
});