import {
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  
} from "react-native";
import { useFormik } from "formik";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/UserSlice";
import { useNavigation, Link } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { registerSchema } from "../schema/schema";


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const user = useSelector((state) => state.user);
  const { handleChange, values, handleSubmit, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        comfirmPassword: "",
      },
      validationSchema: registerSchema,
    });

  const handlePress = () => {
    dispatch(register(values));
    console.log(user)
  };

  if (user.registerStatus === "success") {
    setTimeout(() => {
      navigate.navigate("LoginScreen");
      resetForm(values);
    }, 200);
  }

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });

  const handleSelection = (e) => {
    console.log(e);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView className="  flex flex-col items-center justify-center flex-1 mt-[60px] ">
        <View className="flex w-full text-center justify-center   ">
          <Text className="text-center text-2xl">Hello Dear!</Text>
          <Text className="text-center text-2xl">Let's begin the journey</Text>
        </View>

        <TouchableOpacity className="flex w-[300px] h-[60px] mt-5 rounded-md flex-row  items-center  justify-evenly bg-slate-700   ">
          <Ionicons name="logo-google" size={32} color="white" />
          <Text className="text-center text-white text-xl">
            Sign up with google
          </Text>
        </TouchableOpacity>

        <Text className="text-lg  text-slate-600 ">
          Or create an account with
        </Text>

        <View className="flex flex-row w-full justify-evenly pt-5">
          <View>
            <Text>first name</Text>
            <TextInput
              className="bg-slate-100 h-[55px] w-[160px] text-base text-center rounded-sm  mb-7 border-2 border-gray-500  "
              id="firstName"
              placeholder="Enter first name"
              value={values.firstName}
              onChangeText={handleChange("firstName")}
            />
          </View>
          <View>
            <Text>last name</Text>
            <TextInput
              className="bg-gray-100 h-[55px] w-[160px] rounded-sm text-base text-center mb-7 border-2 border-gray-500 "
              id="lastName"
              placeholder="Enter last name"
              value={values.lastName}
              onChangeText={handleChange("lastName")}
            />
          </View>
        </View>
        <View>
          <Text>Email address</Text>
          <TextInput
            className="bg-slate-100 h-[55px] w-[350px] rounded-sm pl-3 text-base mb-7 border-2 border-gray-500 "
            id="email"
            placeholder="Enter your email address"
            value={values.email}
            onChangeText={handleChange("email")}
          />
        </View>
     
        <View>
          <Text>Password</Text>
          <TextInput
            className="bg-slate-100 h-[55px] w-[350px] rounded-sm pl-3 text-base mb-7 border-2 border-gray-500 "
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChangeText={handleChange("password")}
          />
        </View>
      

          <TouchableOpacity
            onPress={handlePress}
            className="bg-slate-700 h-[50px] w-[350px] rounded-sm  flex items-center justify-center"
          >
            {user.registerStatus === "pending" ? (
              <ActivityIndicator size="large" />
            ) : (
              <Text className="font-semibold text-white  text-2xl ">Create my free account</Text>
            )}
          </TouchableOpacity>
          {user.registerStatus !== "success" ? (
            <Text className="text-red-500">{user.registerError}</Text>
          ) : (
            <Text className="text-green-800 text-center text-2xl">
              {user.registerStatus}{" "}
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </Text>
          )}
          <View className="flex justify-center items-center flex-col gap-5  w-[300px]">
            <Text>already have an account? </Text>
            <Link to={{ screen: "LoginScreen" }} className="text-pink-500">
              
              <Text className="text-slate-700 font-bold text-lg">Login to you account </Text>
            </Link>
          </View>
          {/* <Text className="text-red-500  w-[300px] text-center mb-2 ">
          {errors.comfirmPassword}
        </Text> */}
 
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;



