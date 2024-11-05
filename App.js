import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
import Dashboard from "./Dashboard";
import VerifyPass from "./VerifyPass";
import CreatePass from "./CreatePass";

const Stack = createStackNavigator();

function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate("Login");
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <ImageBackground
      source={require("./assets/background.jpg")} // Path to your background image
      style={styles.background}
    >
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.title}>
            MY{"\n"}LOGIN{"\n"}SYSTEM
          </Text>
          <View style={styles.profileBorder}>
            <Image
              source={require("./assets/profile.jpg")} // Path to your profile image
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.footerText}>Christian Paasa</Text>
        </SafeAreaView>
      </Animated.View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="VerifyPass" component={VerifyPass} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CreatePass" component={CreatePass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 50, // Font size for the title
    fontWeight: "800", // Font weight for the title
    textAlign: "left",
  },
  profileBorder: {
    width: 108,
    height: 108,
    borderRadius: 54,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#D66464",
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});
