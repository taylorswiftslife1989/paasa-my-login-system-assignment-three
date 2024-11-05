import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
  Animated,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start with the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleBackPress = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("Login");
    });
  };

  const handleSignUp = () => {
    Alert.alert("Registration", "Account Registration has done Successfully", [
      { text: "OK", onPress: () => navigation.navigate("Login") },
    ]);
  };

  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={styles.background}
    >
      {/* Dark overlay for dimming effect */}
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]} />

      <SafeAreaView style={styles.safeArea}>
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <LinearGradient
              colors={["#D66464", "#703434"]}
              style={styles.backButtonGradient}
            >
              <Text style={styles.backButtonText}>Back</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.title}>Registration Form</Text>
          <Text style={styles.subtitle}>Kindly fill up the details below:</Text>

          <View style={styles.radioGroup}>
            <Text style={styles.radioLabel}>I am a/an:</Text>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#703434" }]}
            >
              <Text style={styles.radioText}>Trailblazer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#703434" }]}
            >
              <Text style={styles.radioText}>Outsider</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="ID No."
            placeholderTextColor="#555"
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#555"
          />

          <View style={styles.radioGroup}>
            <Text style={styles.radioLabel}>Gender:</Text>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#703434" }]}
            >
              <Text style={styles.radioText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#703434" }]}
            >
              <Text style={styles.radioText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#703434" }]}
            >
              <Text style={styles.radioText}>Prefer not to say</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            placeholderTextColor="#555"
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="#555"
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#555"
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            placeholderTextColor="#555"
          />

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <LinearGradient
              colors={["#D66464", "#703434"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.signUpButtonGradient}
            >
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimming effect
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    borderWidth: 3,
    borderColor: "#F2A4A4",
    borderRadius: 25,
    overflow: "hidden",
  },
  backButtonGradient: {
    padding: 10,
    borderRadius: 25,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    borderColor: "#F2A4A4",
    borderWidth: 3,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  radioLabel: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
  },
  radioButton: {
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  radioText: {
    color: "#fff",
  },
  signUpButton: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    marginVertical: 20,
    borderColor: "#F2A4A4",
    borderWidth: 3,
  },
  signUpButtonGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
