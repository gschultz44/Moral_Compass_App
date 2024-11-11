import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Logo.png')}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Navigating Complex Choices, One Question at a Time</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginPage")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Button to navigate to the Instructions page */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("InstructionsPage")}>
        <Text style={styles.buttonText}>Start Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SearchQuestionPage")}>
        <Text style={styles.buttonText}>Search Custom Questions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AboutPage")}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  logo: {
    width: 275,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center', // Center the image horizontally within the container
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6495ed', // Blue background for the button
    paddingVertical: 12,
    width: '80%', // Set button width to 80% of the container width
    borderRadius: 5,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
