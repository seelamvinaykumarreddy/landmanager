import { BarChart2, Grid, Home, User } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';

export default function BottomBar() {
    return (
        <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex-row justify-around py-4 pb-8">
            <TouchableOpacity className="items-center">
                <Home size={24} color="#3b82f6" />
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Grid size={24} color="#9ca3af" />
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <BarChart2 size={24} color="#9ca3af" />
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <User size={24} color="#9ca3af" />
            </TouchableOpacity>
        </View>
    );
}
