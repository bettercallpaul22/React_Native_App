import {
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from "react-native";
import { useFormik } from "formik";
import Ionicons from "@expo/vector-icons/Ionicons";
import { loginSchema } from "../schema/schema";
import { useDispatch, useSelector } from "react-redux";
import { loadState, logOut, login } from "../features/UserSlice";
import { useNavigation, Link } from "@react-navigation/native";
import { useEffect } from "react";
import { useCallback, useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(loadState());
  //    navigate.navigate("User");
  // }, [user.id]);

  const { handleChange, values, handleSubmit, errors, touched, resetForm } = 
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
    });

  const handlePress = () => {
    dispatch(login(values));
    console.log(user)
  };

  if (user.loginStatus === "success") {
    setTimeout(() => {
      resetForm(user.loginStatus);
      navigate.navigate("HomePageScreen");
    }, 100);
   
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView className=" flex  items-center justify-center mt-[80px] ">
        <View className="flex w-full text-center justify-center  mb-10 ">
          <Text className="text-center text-2xl">Hello Dear!</Text>
          <Text className="text-center text-2xl">Welcome back</Text>
        </View>
        <View>
          <Text>Email address</Text>
          <TextInput
            className="bg-gray-100 h-[55px] w-[350px] rounded-sm pl-3 text-base mb-7 border-2 border-gray-500 "
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
            {user.loginStatus === "pending" ? (
              <ActivityIndicator size="large" />
            ) : (
              <Text className="font-semibold text-white  text-2xl ">SUBMIT</Text>
            )}
          </TouchableOpacity>
          {user.loginStatus !== "success" ? (
            <Text className="text-red-500">{user.loginError}</Text>
          ) : (
            <Text className="text-green-800 text-center text-2xl">
              {user.loginStatus}{" "}
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </Text>
          )}

          <Text className="text-red-500  w-[300px] text-center  ">
            {errors.password}
          </Text>
          <View className=" flex-col justify-center items-center f gap-2  w-[300px]">
            <Text className='text-base'>not yet register? </Text>
            <Link to={{ screen: "RegisterScreen" }} className="text-pink-500">
              <Text className="text-pink-500 font-bold text-lg">Register </Text>
            </Link>
            <Text className=" font-bold text-lg">Or </Text>
          </View>
          <TouchableOpacity className="flex w-[300px] h-[60px] mt-5 rounded-md flex-row  items-center  justify-evenly bg-slate-700   ">
          <Ionicons name="logo-google" size={32} color="white" />
          <Text className="text-center text-white text-xl" >
            Login with google
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
