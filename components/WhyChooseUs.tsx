import { Text, View } from 'react-native';

export default function WhyChooseUs() {
    return (
        <View className="mx-4 mb-8 items-center">
            <View className="w-full flex-row justify-between items-center mb-6">
                <Text className="text-lg font-bold text-gray-800">Why choose us?</Text>
                <View className="bg-blue-400 px-2 py-1 rounded-md">
                    <Text className="text-white text-xs">View all</Text>
                </View>
            </View>

            <View className="items-center relative">
                <View className="w-48 h-48 bg-blue-100 rounded-full items-center justify-center mb-4 overflow-hidden">
                    {/* Character placeholder */}
                    <View className="w-20 h-32 bg-yellow-400 rounded-t-full mt-10" />
                </View>
                <Text className="text-lg font-bold text-gray-800">Engineers</Text>
                <Text className="text-center text-gray-500 text-xs mt-1 px-8">
                    We provide the best experts{'\n'}
                    for the delivery of{'\n'}
                    our services.
                </Text>

                <View className="flex-row justify-center mt-4 space-x-1">
                    <View className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <View className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    <View className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                </View>
            </View>
        </View>
    );
}
