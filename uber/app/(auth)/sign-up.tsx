import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ScrollView } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text
            className="text-2xl text-black font-JakartaSemiBold 
          absolute bottom-5 left-5"
          >
            Create Your Account
          </Text>
        </View>
        <View className="p-5 text-black font-JakartaSemiBold">
          <InputField
            label="Name"
            placeholder="Enter your name"
            placeholderTextColor="#888"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Enter Email"
            placeholder="Enter your email"
            placeholderTextColor="#888"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            placeholderTextColor="#888"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>
        <CustomButton
          title="Sign Up"
          onPress={onSignUpPress}
          className="mt-6"
        />
      </View>
      <Link
        href="/sign-in"
        className="text-lg text-center text-general-200 mt-10"
      >
        <Text>Already has an account? </Text>
        <Text className="text-primary-500">Log In</Text>
      </Link>
    </ScrollView>
  );
};

export default SignUp;
