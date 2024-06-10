import { Link, Slot, SplashScreen, Stack } from 'expo-router';
import {useFonts} from 'expo-font'
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


SplashScreen.preventAutoHideAsync(); 

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
      });


    useEffect(() => {
        if (error) {
            console.error(error);
            return;
        }

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }

    }, [fontsLoaded, error])  
    if (!fontsLoaded) {
        // Render null or a loading component while fonts are loading
        return null;
      }
    return (
        // <Stack> 
        //     <Stack.Screen name='(tabs)' options={{header:false}}> </Stack.Screen>
        //     <Stack.Screen name='(auth)' options={{header:false}}> </Stack.Screen>
        //     <Stack.Screen name='index' options={{header:false}}> </Stack.Screen>
        //     <Stack.Screen name='search/[query]' options={{header:false}}> </Stack.Screen>
        // </Stack>
        <Stack> 
            <Stack.Screen name="index" options={{headerShown:false }} />
        </Stack>
        // <RootLayout></ RootLayout>
    )
}

export default RootLayout
