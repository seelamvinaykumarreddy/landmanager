import { ShieldCheck, Zap } from 'lucide-react-native';
import { Text, View } from 'react-native';

interface BenefitCardProps {
    title: string;
    description: string;
    iconName: 'shield' | 'zap';
    color: string;
    bgColor: string;
}

export default function BenefitCard({ title, description, iconName, color, bgColor }: BenefitCardProps) {
    return (
        <View className={`w-[48%] ${bgColor} rounded-2xl p-4 mr-3 min-h-[180px] justify-between`}>
            <View className="items-center mt-2">
                <View className="bg-white/20 p-3 rounded-full mb-3">
                    {iconName === 'shield' ? (
                        <ShieldCheck size={32} color="white" fill={color === 'text-green-500' ? '#4ade80' : 'white'} />
                    ) : (
                        <Zap size={32} color="white" fill="#facc15" />
                    )}
                </View>
                <Text className="text-white text-lg font-bold text-center mb-1">{title}</Text>
                <Text className="text-white/80 text-xs text-center">{description}</Text>
            </View>


        </View>
    );
}
