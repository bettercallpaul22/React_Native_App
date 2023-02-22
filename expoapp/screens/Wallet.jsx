import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Wallet = () => {
  return (
    <View>
          <View className="flex flex-row px-3 justify-between items-center bg-gray-200  w-full h-[70px] mt-10">
          <Ionicons name="person" size={40} color="black" />
          <View>
            <Text className="text-lg text-black text-center font-semibold">
              Hello Paul
            </Text>
            <Text className="text-lg text-black">Use your wallet to book therapy</Text>
          </View>
          <Ionicons name="notifications" size={32} color="black" />
        </View>
    </View>
  )
}

export default Wallet