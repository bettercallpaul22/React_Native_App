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
  StyleSheet,
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
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export const HomePage = () => {
  const navigate = useNavigation()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadState());
  }, []);
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.mainContainer}>
      <Header firstName={user.firstName} />
      <ScrollView>
        <View style={styles.topSession}>
          <TouchableOpacity style={styles.session}
           onPress={()=>navigate.navigate('ChatScreen')}
          >
            <Entypo name="chat" size={50} color="yellow" />
            <Text style={{color:'white', textAlign:'center'}}>
              Chat session with your therapist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.session}>
            <Octicons name="video" size={50} color="red" />
            <Text style={{color:'white', textAlign:'center'}}>
              Video session with your therapist
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topSession}>
          <TouchableOpacity style={styles.session}>
            <MaterialCommunityIcons name="leaf" size={50} color="green" />
            <Text style={{color:'white', textAlign:'center'}}>Time with nature</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.session}>
            <Ionicons name="sad-outline" size={50} color="pink" />
            <Text style={{color:'white', textAlign:'center'}}>Manage axiety</Text>
          </TouchableOpacity>
        </View>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'#11698E'}}>
          <Text style={{color:'white', fontSize:16, letterSpacing:2, marginLeft:10}}>
            Recomended programs
          </Text>
          <TouchableOpacity>
            <Text style={{color:'white', fontSize:18, letterSpacing:2}}>
              See all <FontAwesome name="th-list" size={24} color="white" />{" "}
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
                  {item.id}
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    display:'flex',
    flex:1,
    marginTop:30
  },

  topSession:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:160
  },
  session:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:120,
    width:170,
    backgroundColor:'#11698E',
    borderRadius:10
  },

})

export default HomePage;
