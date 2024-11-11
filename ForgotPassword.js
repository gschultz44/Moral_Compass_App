import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (email) {
      Alert.alert("Password Reset", `An email has been sent to ${email} if it matches an existing account.`);
    } else {
      Alert.alert("Error", "Please enter a valid email address.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.instruction}>Enter your email to receive a password reset link</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', // Adjust this to match your app's background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Primary text color
    marginBottom: 10,
  },
  instruction: {
    fontSize: 16,
    color: '#666', // Secondary text color
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    color: '#333', // Text color in input field
  },
  button: {
    backgroundColor: '#6495ed', // Adjust to your app's primary button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFF', // Text color on the button
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ForgotPassword;
