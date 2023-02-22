import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const LottieStartScreen = () => {
  const navigate = useNavigation();
  return (
    <LottieView
      source={require("../../data/lottieSlash.json")}
      loop={false}
      autoPlay
      className="flex flex-1"
      onAnimationFinish={() => navigate.navigate("RegisterScreen")}
    />
  );
};

export default LottieStartScreen;


