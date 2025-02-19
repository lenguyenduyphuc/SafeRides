import { View, Text } from "react-native";
import RideLayout from "@/components/RideLayout";
import { FlatList } from "react-native-gesture-handler";
import DriverCard from "@/components/DriverCard";
import CustomButton from "@/components/CustomButton";
import { useDriverStore } from "@/store";
import { router } from "expo-router";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  console.log(drivers);
  return (
    <RideLayout title="Choose a driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            setSelected={() => setSelectedDriver(Number(item.id))}
            item={item}
            selected={selectedDriver!}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
