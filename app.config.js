import "dotenv/config";

export default {
  expo: {
    name: "Expo Firebase Starter",
    slug: "expo-firebase",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.19.0",
    orientation: "portrait",
    icon: "./assets/flame.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#F57C00",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    extra: {
      apiKey: "AIzaSyDhoCD1P8rMh_A2hRNG7Adu1Bwx6UpKqIY",
      authDomain: "ing-software-2025-2.firebaseapp.com",
      projectId: "ing-software-2025-2",
      storageBucket: "ing-software-2025-2.firebasestorage.app",
      messagingSenderId: "1057544740446",
      appId: "1:1057544740446:web:cc5616aea4d86c8a59decf",
    },
  },
};
