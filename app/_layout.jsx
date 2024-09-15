import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '../hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });
    const [hideStatusBar, setHideStatusBar] = useState(true);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
            setHideStatusBar(false); // After SplashScreen is hidden, show StatusBar again.
        }
    }, [loaded, hideStatusBar]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <StatusBar hidden={hideStatusBar} style='light' backgroundColor='#222' /* translucent={true} */ />
            <Stack>
                <Stack.Screen name="(home)" options={{
                    headerShown: false,
                    headerTitle: 'Home'
                }} />
                <Stack.Screen name='modal' options={{
                    presentation: 'fullScreenModal',
                }} />
            </Stack>
        </ThemeProvider>
    );
}