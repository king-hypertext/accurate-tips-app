import { Tabs } from 'expo-router'
import React from 'react'
import { TabBarIcon } from '../../components/navigation/TabBarIcon'

export default function HomeLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: true,
            headerTitle: 'Home',
            tabBarLabel: ''
        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ focused, color, size }) =>
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color ? '#222' : ''} size={size ? 40 : ''} />
            }} />
        </Tabs>
    )
}
