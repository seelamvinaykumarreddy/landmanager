import { User } from 'lucide-react-native';
import React from "react";
import { Image, Text, View } from 'react-native';

export default function Header() {
  return (
    <View className="flex-row  justify-between items-center px-5 bg-white">
      <View className="flex-row items-center">
        <Image source={require('../assets/images/logo.png')} style={{ width: 36, height: 36, resizeMode: 'contain' }} />
        <View className="ml-2 bg-gray-200 rounded-full p-1">
          <User size={20} color="#666" />
        </View>
      </View>
      <Text className="text-gray-600 font-bold">Services</Text>
    </View>
  );
}
