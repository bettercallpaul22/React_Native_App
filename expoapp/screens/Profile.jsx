import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { clearLoginStatus, loadState, logOut } from "../features/UserSlice";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch(loadState());
  }, [user.id]);

  const handleLogOut = () => {
    dispatch(logOut());
    setTimeout(() => {
      navigate.navigate("LoginScreen");
    }, 10);
  };

  return (
    <SafeAreaView>
      <View className="flex flex-row px-3 justify-between items-center bg-gray-200 mt-10  w-full h-[70px]">
        <View className="flex items-start">
          <Text className="text-lg text-black text-center font-semibold">
            My Profile
          </Text>
          <Text className="text-lg text-black">
            How are you today {user.firstName}
          </Text>
        </View>
        <Ionicons name="notifications" size={32} color="black" />
      </View>
      <ScrollView>
        <View className="flex justify-center items-center bg-slate-300 ">
          <View className="flex justify-center items-center rounded-lg bg-yellow-500 h-[130px] w-[130px] mt-10 mb-2 ">
            <Ionicons name="person" size={100} color="black" />
          </View>
          <Text className="font-bold text-lg">{`${user.firstName} ${user.lastName}`}</Text>
          <Text className=" text-lg">{user.email}</Text>
          <TouchableOpacity className="flex shadow-lg justify-center items-center rounded-lg bg-purple-700 w-[150px] h-[50px] ">
            <Text className="font-semibold text-lg text-white">
              Update Profile
            </Text>
          </TouchableOpacity>
          <View className="mt-5">
            <TouchableOpacity className="flex flex-row mb-4 items-center justify-evenly rounded-lg  text-base border-2 border-slate-400 w-[350px] h-[70px] ">
              <Octicons name="person-fill" size={30} color="purple" />
              <Text className="text-lg ml-8  font-semibold">My therapist</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row mb-4 items-center justify-evenly rounded-lg  text-base border-2 border-slate-400 w-[350px] h-[70px] ">
              <FontAwesome5 name="money-check" size={24} color="black" />
              <Text className="text-lg  font-semibold">My assesments</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row mb-4 items-center justify-evenly rounded-lg  text-base border-2 border-slate-400 w-[350px] h-[70px] ">
              <Entypo name="paypal" size={30} color="brown" />
              <Text className="text-lg  font-semibold">My subscriptions</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex flex-row mb-4 items-center justify-evenly rounded-lg  text-base border-2 border-slate-400 w-[350px] h-[70px] "
              onPress={handleLogOut}
            >
              <SimpleLineIcons name="logout" size={30} color="black" />
              <Text className="text-lg  font-semibold mr-[60px]">Logout</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
