import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { icons, images, SIZES, COLORS } from "../constants";
import {
  NearbyJobCard,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs
} from "../components";
const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions={"60%"} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimensions={"100%"} />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
