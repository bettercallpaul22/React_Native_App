import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Octicons,
} from "@expo/vector-icons";
import { data } from "../data/data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLoginStatus, loadState } from "../features/UserSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
 useEffect(()=>{
 dispatch(loadState())
 }, [])
  const user = useSelector((state)=>state.user)






  return (
    <View className="flex flex-1 h-[900px] mt-10">
      <View className="flex flex-row px-3 justify-between items-center bg-gray-200  w-full h-[70px]">
        <Ionicons name="person" size={40} color="black" />
        <View>
          <Text className="text-lg text-black text-center font-semibold">
            Hello {user.firstName}
          </Text>
          <Text className="text-lg text-black">How are you today</Text>
        </View>
        <Ionicons name="notifications" size={32} color="black" />
      </View>
      <ScrollView>
        <View className="flex flex-row  justify-evenly    items-center   h-[160px]">
          <TouchableOpacity className="flex  items-center justify-center bg-slate-700 h-[120px] w-[170px] rounded-[20px] ">
            <Entypo name="chat" size={50} color="yellow" />
            <Text className=" text-white text-center">
              Chat session with your therapist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex  items-center justify-center bg-slate-700 h-[120px] w-[170px] rounded-[20px] ">
            <Octicons name="video" size={50} color="red" />
            <Text className=" text-white text-center">
              Video session with your therapist
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row  justify-evenly items-center  h-[160px]">
          <TouchableOpacity className="flex  items-center justify-center bg-slate-700 h-[120px] w-[170px] rounded-[20px] ">
            <MaterialCommunityIcons name="leaf" size={50} color="green" />
            <Text className=" text-white text-center">Time with nature</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex  items-center justify-center bg-slate-700 h-[120px] w-[170px] rounded-[20px] ">
            <Ionicons name="sad-outline" size={50} color="pink" />
            <Text className=" text-white text-center">Manage axiety</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between">
          <Text className="text-lg font-semibold ml-3">
            Recomended programs
          </Text>
          <TouchableOpacity>
            <Text className="text-lg font-semibold mr-3">
              See all <FontAwesome name="th-list" size={24} color="black" />{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <Animated.FlatList
          scrollEventThrottle={32}
          showsHorizontalScrollIndicator={false}
          horizontal
          //  onScroll={Animated.event([{nativeEvent:{contentOfsset}}])}
          //   contentContainerStyle={{paddingBottom:10}}
          className="mb-10"
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View className="bg-slate-400 flex px-5  justify-around items-center">
                <TouchableOpacity>
                  <Image
                    source={item.image}
                    className="relative w-[300px] h-[200px] rounded-[20px] mt-5"
                  />
                </TouchableOpacity>
                <Text className=" text-stone-700 font-semibold text-2xl">
                  {item.title}
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomePage;
