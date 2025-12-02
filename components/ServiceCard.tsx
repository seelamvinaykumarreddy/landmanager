import { FileText, Sprout } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

interface ServiceCardProps {
    title: string;
    description: string;
    iconName: 'sprout' | 'file';
    bgColor: string;
    buttonText: string;
}

export default function ServiceCard({ title, description, iconName, bgColor, buttonText }: ServiceCardProps) {
    return (
        <View className={`${bgColor} mx-4 rounded-xl p-4 flex-row justify-between items-center mb-4`}>
            <View className="flex-1">
                <Text className="text-white text-lg font-bold mb-1">{title}</Text>
                <Text className="text-white/90 text-xs mb-3">{description}</Text>
                <TouchableOpacity className="bg-white self-start px-3 py-1 rounded-md">
                    <Text className={`${bgColor.replace('bg-', 'text-').replace('-400', '-600')} text-xs font-bold`}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
            <View className="w-16 h-16 bg-white/20 rounded-full items-center justify-center">
                {iconName === 'sprout' ? (
                    <Sprout size={32} color="white" />
                ) : (
                    <FileText size={32} color="white" />
                )}
            </View>
        </View>
    );
}
