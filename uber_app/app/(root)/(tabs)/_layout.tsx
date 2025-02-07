import { Tabs } from "expo-router";
import { Image, type ImageSourcePropType, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(focused ? 1.2 : 1, { duration: 200 }),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={animatedStyle}
      className="flex flex-row justify-center items-center rounded-full"
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${
          focused ? "bg-primary-500" : "bg-gray-700"
        }`}
      >
        <Image
          source={source}
          tintColor={focused ? "white" : "#A0AEC0"}
          resizeMode="contain"
          className="w-7 h-7"
        />
      </View>
    </Animated.View>
  );
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#A0AEC0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#1A202C",
          borderRadius: 50,
          paddingBottom: 30, // ios only
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
