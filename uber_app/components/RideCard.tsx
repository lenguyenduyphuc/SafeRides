import { View, Text, Image } from "react-native";
import { icons } from "@/constants";
import type { Ride } from "@/types/type";
import { formatDate, formatTime } from "@/lib/utils";

const RideCard = ({ ride }: { ride: Ride }) => {
  const {
    destination_longitude,
    destination_latitude,
    origin_address,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status,
  } = ride;

  const mapImageUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`;
  return (
    <View className="bg-white rounded-lg shadow-sm shadow-neutral-300 mb-4 p-4">
      <View className="flex-row">
        <Image
          source={{ uri: mapImageUrl }}
          className="w-20 h-24 rounded-lg mr-4"
        />
        <View className="flex-1">
          <View className="flex-row items-center mb-2">
            <Image source={icons.to} className="w-5 h-5 mr-2" />
            <Text className="text-sm font-medium" numberOfLines={1}>
              {origin_address}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Image source={icons.point} className="w-5 h-5 mr-2" />
            <Text className="text-sm font-medium" numberOfLines={1}>
              {destination_address}
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-4 bg-gray-100 rounded-lg p-3">
        <View className="flex-row justify-between mb-2">
          <Text className="text-sm text-gray-500 font-medium">Date & Time</Text>
          <Text className="text-sm text-gray-700 font-medium">
            {formatDate(created_at)}, {formatTime(ride_time)}
          </Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-sm text-gray-500 font-medium">Driver</Text>
          <Text className="text-sm text-gray-700 font-medium">
            {driver.last_name}, {driver.first_name}
          </Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-sm text-gray-500 font-medium">Car</Text>
          <Text className="text-sm text-gray-700 font-medium">
            {driver.car_seats}
          </Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-sm text-gray-500 font-medium">
            Payment Status
          </Text>
          <Text
            className={`text-sm capitalize text-gray-700 font-medium
            ${payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
          >
            {payment_status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
