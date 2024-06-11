import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot, Link, router, Redirect} from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from  '../constants'
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext()

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />


  return (
    // <View className="flex-1 items-center justify-center bg-white">
    //     <Text className="text-3xl font-pblack">RootLayout</Text>
    //       <StatusBar style='auto' />
    //       <Link href='/home' style={{color: 'blue'}}>Go to home</Link>
    //   </View>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView
        contentContainerStyle={{height:'100%'}}>
          <View className="w-full 
          justify-center items-center h-full px-4 min-h-[85vh]"> 
            <Image source={images.logo} 
              className="w-[130px] h-[84px]"
              resizeMode='contain'
              />
              <Image source={images.cards} 
              className="max-w-[380px] w-full h-[300px]"
              resizeMode='contain'
              />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with { ' ' }
              <Text className="text-secondary-200">Aora</Text>

            </Text>
            <Image 
            source={images.path}
            className="w-[136px] h-[15px] absolute-bottom-2 -right-8"
            resizeMode='contain' />

            </View>
            <Text className="text-gray-100 mt-7 
              text-center text-sm font-pregular">
                Where creativity meets innovation: embark on a journey of limitless exploration with Aora
            </Text>
            <CustomButton title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />
            
          </View>  
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light'/>
      </SafeAreaView>
  );
}

