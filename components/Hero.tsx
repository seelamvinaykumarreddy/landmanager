import { Building2, FileText, Hammer, Map } from 'lucide-react-native';
import { ImageBackground, StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';

export default function Hero() {
    return (
        <View className="mx-4 rounded-3xl overflow-hidden mb-6">
            <ImageBackground
                source={require('../assets/images/herobg.png')}
                style={styles.backgroundImage}
            >
                <View className="p-6 pb-10 rounded-b-[40px]">
                    {/* Decorative elements would go here - simplified for now */}
                    <View className="items-center mt-4 mb-6">

                        <Image source={require('../assets/images/hero1.png')} style={{ width: 380, height: 380, resizeMode: 'contain' }} />
                        <Text className="text-white text-3xl font-bold text-center -mt-24   leading-8">
                            One stop solution for
                        </Text>
                        <Text className="text-white text-3xl font-bold text-center  leading-8">
                        all your land services
                        </Text>
                    </View>

                    <View className="flex-row items-center justify-between mb-2">
                        <Text className="text-white/100 font-medium text-m">What are you looking for?</Text>
                        <TouchableOpacity className="bg-red-600 px-3 py-1 rounded-full">
                            <Text className="text-white text-xs font-bold">View All Services</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Quick Actions Row - Overlapping the purple background */}
                <View className="flex-row justify-around text-white -mt-8 px-2 pb-4">
                    <QuickAction icon={<Building2 size={24} color="white" />} label="Property" color="bg-purple-400" />
                    <QuickAction icon={<Map size={24} color="white" />} label="Land" color="bg-orange-400" />
                    <QuickAction icon={<FileText size={24} color="white" />}  label="Policy" color="bg-red-400" />
                    <QuickAction icon={<Hammer size={24} color="white" />} label="Agent" color="bg-yellow-400" />
                </View>
            </ImageBackground>

        </View>
    );
}

function QuickAction({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) {
    return (
        <View className="items-center">
            <TouchableOpacity className={`${color} w-14 h-14 rounded-full items-center justify-center mb-1 shadow-sm`}>
                {icon}
            </TouchableOpacity>
            <Text className="text-xs text-gray-600 font-medium">{label}</Text>
        </View>
    );
}

function UserIconPlaceholder() {
    return (
        <View className="border-2 border-white rounded-lg p-2">
            <View className="flex-row">
                <View className="w-2 h-4 border-2 border-white rounded-t-full mx-1" />
                <View className="w-2 h-4 border-2 border-white rounded-t-full mx-1" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Scales the image to cover the entire container
    },
});