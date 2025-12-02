import { ChevronDown, Volume2 } from 'lucide-react-native';
import { Text, View } from 'react-native';

export default function FAQ() {
    return (
        <View className="mx-4 mb-24">
            <Text className="text-lg font-bold text-gray-800 mb-4">FAQ</Text>

            <View className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-2">
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <Volume2 size={16} color="#666" className="mr-2" />
                        <Text className="text-gray-700 font-medium ml-2">How can I order here?</Text>
                    </View>
                    <ChevronDown size={20} color="#999" />
                </View>
            </View>

            <View className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-2">
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <Volume2 size={16} color="#666" className="mr-2" />
                        <Text className="text-gray-700 font-medium ml-2">How to register my land?</Text>
                    </View>
                    <ChevronDown size={20} color="#999" />
                </View>
            </View>

            <View className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <Volume2 size={16} color="#666" className="mr-2" />
                        <Text className="text-gray-700 font-medium ml-2">How to contact the helper?</Text>
                    </View>
                    <ChevronDown size={20} color="#999" />
                </View>
            </View>
        </View>
    );
}
