import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const LoginPage = ({ navigation, route }) => {
  // Get the accounts from the route params
  const accounts = route.params?.accounts || new Map();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    if (accounts.has(email)) {
      const storedPassword = accounts.get(email);
      if (storedPassword === password) {
        Alert.alert("Success", "Login successful!");
        // Navigate to the Welcome page after successful login
        navigation.navigate('WelcomePage'); // Adjust to the name of your Welcome page
      } else {
        Alert.alert("Error", "Incorrect password.");
      }
    } else {
      Alert.alert("Error", "Account not found. Please create an account.");
    }
  };

  // Function to navigate to the Forgot Password page
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  // Function to navigate to the Create Account page
  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password link */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Custom-styled Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Create Account button */}
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#6495ed', // Blue background for the button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15, // Space between buttons
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 15, // Space between the link and the next button
  },
});

export default LoginPage;
