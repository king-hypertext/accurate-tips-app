import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style='light' backgroundColor={Colors.appColor} />
                    <Text>Tab [Home|Settings]</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});