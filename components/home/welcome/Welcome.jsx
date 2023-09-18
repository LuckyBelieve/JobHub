import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import {icons,SIZES} from "../../../constants";
const jobTypes = ["Full-Time","Part-Time","Contractor","Internship","Volunteer"]
const Welcome = () => {
  const router = useRouter();
  const [activeJobType,setActiveJobType] = useState("Full-Time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Lucky</Text>
        <Text style={styles.welcomeMessage}>find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          value=""
          onChange={()=>{}}
          placeholder="what are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image source={icons.search} 
          resizeMode="contain"
          style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
          <FlatList
          showsHorizontalScrollIndicator={false}
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.tab(activeJobType,item)}
            onPress={()=>{
              setActiveJobType(item);
              router.push(`/search/${item}`);

            }}>
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          keyExtractor={item =>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          />
      </View>
    </View>
  );
};

export default Welcome;
