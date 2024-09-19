import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import { metrics } from '../../utilities/dimensions'
export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: true,
                    headerBackground: () => <View style={{
                        backgroundColor: 'transparent',
                    }}>
                    </View>,
                    headerTitle: ({ tintColor, allowFontScaling }) => <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: metrics.horizontal.small }}>
                        <Text style={{fontWeight: '500', fontSize: 18}}>@ccurate Tips</Text>
                    </View>,
                    headerTitleAlign: 'left',
                    headerRight: ({ title, focused, color }) =>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: metrics.horizontal.small }}>
                            <Text style={{ color: focused ? Colors.appColor : color }}>{title}</Text>
                            <Ionicons name={'ellipsis-vertical'} size={24} color={focused ? Colors.appColor : color} />

                        </View>,
                    tabBarAllowFontScaling: false,
                    tabBarLabel: ({ focused, color }) => <View style={styles.tabBarLabel}>
                        {
                            !focused ?
                                <Text style={{ color: color }}>{'Home'}</Text> :
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 5,
                                    paddingLeft: metrics.horizontal.small,
                                    width: '60%',
                                    backgroundColor: Colors.appColor
                                }}>
                                </View>
                        }
                    </View>,
                    tabBarIcon: ({ focused, color, size }) => <Ionicons name={'grid'} size={focused ? 30 : size} color={focused ? Colors.appColor : color} />,
                }}
            />
            <Tabs.Screen
                name="TwoOdd"
                options={{
                    headerShown: true,
                    tabBarAllowFontScaling: false,
                    tabBarLabel: ({ focused, color }) => <View style={styles.tabBarLabel}>
                        {
                            !focused ?
                                <Text style={{ color: color }}>2 Odss</Text> :
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 5,
                                    paddingLeft: metrics.horizontal.small,
                                    width: '60%',
                                    backgroundColor: Colors.appColor
                                }}>
                                </View>
                        }
                    </View>,
                    tabBarIcon: ({ focused, color, size }) => <Ionicons name={'shield-half'} size={focused ? 34 : size} color={focused ? Colors.appColor : color} />,
                }}
            />
            <Tabs.Screen
                name="ThreeOdd"
                options={{
                    headerShown: true,
                    tabBarAllowFontScaling: false,
                    tabBarLabel: ({ focused, color }) => <View style={styles.tabBarLabel}>
                        {
                            !focused ?
                                <Text style={{ color: color }}>3 Odds</Text> :
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 5,
                                    paddingLeft: metrics.horizontal.small,
                                    width: '60%',
                                    backgroundColor: Colors.appColor
                                }}>
                                </View>
                        }
                    </View>,
                    tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'flash' : 'flash-outline'} size={focused ? 34 : size} color={focused ? Colors.appColor : color} />,
                }}
            />
            <Tabs.Screen
                name="Settings"
                options={{
                    headerShown: true,
                    tabBarAllowFontScaling: false,
                    tabBarLabel: ({ focused, color }) => <View style={styles.tabBarLabel}>
                        {
                            !focused ?
                                <Text style={{ color: color }}>Me</Text> :
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 5,
                                    paddingLeft: metrics.horizontal.small,
                                    width: '60%',
                                    backgroundColor: Colors.appColor
                                }}>
                                </View>
                        }
                    </View>,
                    tabBarIcon: ({ focused, color, size }) => <Ionicons name={'person'} size={focused ? 34 : size} color={focused ? Colors.appColor : color} />,
                }}
            />
        </Tabs>
    )
}
const styles = StyleSheet.create({
    tabs: {
        backgroundColor: 'blue',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    tabBarLabel: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    }
})