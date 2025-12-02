import { Text, TouchableOpacity, View } from 'react-native';

interface ServiceBannerProps {
    title: string;
    subtitle?: string;
    buttonText: string;
    bgColor: string;
    textColor?: string;
    image?: any; // Placeholder for now
}

export default function ServiceBanner({ title, subtitle, buttonText, bgColor, textColor = "text-red-500", image }: ServiceBannerProps) {
    return (
        <View className={`${bgColor} mx-4 rounded-xl p-4 flex-row justify-between items-center mb-6 overflow-hidden`}>
           
            <View className="flex-1 pr-2">
                <Text className={`${textColor} text-lg font-bold mb-1`}>{title}</Text>
                {subtitle && <Text className="text-gray-600 text-xs mb-2">{subtitle}</Text>}
                <TouchableOpacity className="bg-red-500 self-start px-3 py-1 rounded-md">
                    <Text className="text-white text-xs font-bold">{buttonText}</Text>
                </TouchableOpacity>
            </View>
            {/* Placeholder for illustration */}
            <View className="w-20 h-20 bg-black/5 rounded-lg items-center justify-center">
                <Text className="text-xs text-gray-400">Img</Text>
            </View>
        </View>
    );
}
