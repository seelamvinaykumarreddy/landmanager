import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BenefitCard from "../components/BenefitCard";
import BottomBar from "../components/BottomBar";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceBanner from "../components/ServiceBanner";
import ServiceCard from "../components/ServiceCard";
import StepsSection from "../components/StepsSection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Index() {
  return (
    <View style={{ marginTop: 0 }} className="flex-1 bg-white">
      <SafeAreaView style={{ marginTop: -60 }} edges={['top']} className="bg-white">
        <Header />
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        <Hero />

        <View className="mx-4 mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Our benefits</Text>
            <View className="bg-blue-400 px-2 py-1 rounded-md">
              <Text className="text-white text-xs">View all</Text>
            </View>
          </View>
          <View className="flex-row">
            <BenefitCard
              title="Expert Service"
              description="We provide the best experts for the delivery of our services."
              iconName="shield"
              color="text-green-500"
              bgColor="bg-purple-400"
            />
            <BenefitCard
              title="All-round Service"
              description="We provide the best experts for the delivery of our services."
              iconName="zap"
              color="text-yellow-500"
              bgColor="bg-gray-800"
            />
          </View>
        </View>

        <ServiceBanner
          title="We can beautify"
          subtitle="your plot!"
          buttonText="Sign up"
          bgColor="bg-pink-100"
          textColor="text-red-500"
        />

        <View className="mb-6">
          <View className="mx-4 flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Our services</Text>
            <View className="bg-orange-100 px-2 py-1 rounded-md">
              <Text className="text-orange-500 text-xs">View all</Text>
            </View>
          </View>

          <ServiceCard
            title="Weeding"
            description="We provide the best experts for the delivery of our services."
            iconName="sprout"
            bgColor="bg-red-400"
            buttonText="Post now"
          />
        </View>

        <StepsSection />

        <ServiceBanner
          title="Paper work is so"
          subtitle="frustrating!"
          buttonText="Post now"
          bgColor="bg-orange-100"
          textColor="text-orange-500"
        />

        <View className="mb-6">
          <View className="mx-4 flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Our services</Text>
            <View className="bg-orange-100 px-2 py-1 rounded-md">
              <Text className="text-orange-500 text-xs">View all</Text>
            </View>
          </View>

          <ServiceCard
            title="Documentation"
            description="We provide the best experts for the delivery of our services."
            iconName="file"
            bgColor="bg-orange-400"
            buttonText="Post now"
          />
        </View>

        <WhyChooseUs />

        <ServiceBanner
          title="Want to develop"
          subtitle="your land?"
          buttonText="Post now"
          bgColor="bg-pink-100"
          textColor="text-red-500"
        />

        <View className="mb-6">
          <View className="mx-4 flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Our services</Text>
            <View className="bg-pink-100 px-2 py-1 rounded-md">
              <Text className="text-pink-500 text-xs">View all</Text>
            </View>
          </View>

          <ServiceCard
            title="Construction"
            description="We provide the best experts for the delivery of our services."
            iconName="file"
            bgColor="bg-pink-500"
            buttonText="Post now"
          />
        </View>

        <View className="mx-4 mb-6">
          <View className="bg-pink-400 rounded-xl p-6 items-center relative overflow-hidden">
            {/* Background patterns would go here */}
            <View className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
              {/* Abstract shapes */}
            </View>

            <View className="bg-green-400 p-3 rounded-xl mb-4 shadow-sm">
              {/* WhatsApp icon placeholder */}
              <View className="w-8 h-8 border-2 border-white rounded-full items-center justify-center">
                <Text className="text-white font-bold">C</Text>
              </View>
            </View>

            <Text className="text-white text-xl font-bold mb-2">Refer Now!</Text>
            <Text className="text-white text-center text-sm px-4">
              Share to your friends and get a surprise reward!
            </Text>
          </View>
        </View>

        <FAQ />

      </ScrollView>
      <BottomBar />
    </View>
  );
}
