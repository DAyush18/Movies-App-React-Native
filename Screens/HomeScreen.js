import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native/Libraries/Components/Touchable/TouchableOpacity'
const HomeScreen = () => {

    const [trending,setTrending] = useState([1,2,3]);
    return (
        <View className="bg-neutral-800 flex-1">
            <SafeAreaView className="mb-3">
                <StatusBar style='light' />
                <View className="flex-row justify-between items-center mx-3 mt-3">
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color={'white'} />
                    
                    <Text className="text-3xl font-bold color-white"><Text className="color-[#eab308]">M</Text>ovies</Text>
                    
                    <TouchableOpacity>
                    <MagnifyingGlassIcon size={30} color={'white'}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}
            >
                
            </ScrollView>
        </View>
    )
}

export default HomeScreen