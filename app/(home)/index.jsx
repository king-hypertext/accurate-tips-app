import { useRouter } from 'expo-router'
import React from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
export default function HomeScreen() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Text> home screen </Text>
            <Button title='Open modal' onPress={() => {
                router.push('../modal');
            }} />
        </SafeAreaView>
    )
}