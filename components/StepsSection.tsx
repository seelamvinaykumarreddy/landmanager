import { Image, Text, View } from 'react-native';

export default function StepsSection() {
    return (
        <View className="mx-4 mb-8">
            <View className="flex-row justify-between items-center ">
                <Text className="text-3xl font-medium text-gray-800">It's so easy!</Text>
                <View className="bg-blue-400 px-2 py-1 rounded-md">
                    <Text className="text-white font-bold text-xs">Sign Up</Text>
                </View>
            </View>

            <View className="bg-white  flex-col ">
                <View className="bg-purple-500 w-28 px-2 py-1 rounded-md">
                    <Text className="text-white font-bold text-xs">Just in 3 steps</Text>
                </View>
                <Image source={require('../assets/images/signup.png')} style={{ width: 360, height: 360, resizeMode: 'contain',marginTop:-20 }} />
            </View>

        </View>
    );
}
