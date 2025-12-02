try {
    const { getDefaultConfig } = require("expo/metro-config");
    const { withNativeWind } = require("nativewind/metro");

    console.log("Getting default config...");
    const config = getDefaultConfig(__dirname);
    console.log("Got default config");

    console.log("Applying NativeWind...");
    const finalConfig = withNativeWind(config, { input: "./global.css" });
    console.log("Applied NativeWind");
} catch (e) {
    console.error("Error during execution:", e);
}
