import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';

const AboutPage = ({ navigation }) => {
  const handleBackToWelcome = () => {
    navigation.navigate("WelcomePage");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>Through this app, we aim to engage users in thoughtful discussions about the ethical implications of emerging technologies. Our app allows users to make their own responses to questions and compare their answers with those of others, including our team’s perspectives.</Text>

      {/* Profile section for Diego Paredes */}
      <View style={styles.profile}>
        <Text style={styles.name}>Diego Paredes</Text>
        <Text style={styles.university}>Southern Methodist University</Text>
        <Text style={styles.year}>Junior</Text>
        <Text style={styles.major}>Double Majoring in Computer Science and Data Science</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/thediegoparedes/?trk=contact-info')}
        >
          LinkedIn
        </Text>
      </View>

      {/* Profile section for Sarah Mendoza */}
      <View style={styles.profile}>
        <Text style={styles.name}>Sarah Mendoza</Text>
        <Text style={styles.university}>Southern Methodist University</Text>
        <Text style={styles.year}>Junior</Text>
        <Text style={styles.major}>Double Majoring in Computer Science and Data Science</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/sarah-mendoza-211538297/')}
        >
          LinkedIn
        </Text>
      </View>

      {/* Profile section for Grace Schultz */}
      <View style={styles.profile}>
        <Text style={styles.name}>Grace Schultz</Text>
        <Text style={styles.university}>Southern Methodist University</Text>
        <Text style={styles.year}>Junior</Text>
        <Text style={styles.major}>Triple Majoring in Computer Science, Creative Computing, and Data Science</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/grace-schultz44/')}
        >
          LinkedIn
        </Text>
      </View>

      {/* Custom-styled button to go back to the Welcome page */}
      <TouchableOpacity style={styles.button} onPress={handleBackToWelcome}>
        <Text style={styles.buttonText}>Back to Welcome</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Space below the title
  },
  description: {
    fontSize: 20,
    marginBottom: 30
  },
  profile: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff', // White background for profiles
    borderRadius: 5,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold', // Bold text for names
  },
  university: {
    fontSize: 16, // Font size for university
  },
  year: {
    fontSize: 16, // Font size for year
  },
  major: {
    fontSize: 16, // Font size for major
  },
  link: {
    fontSize: 16,
    color: 'blue', // Blue text for links
    textDecorationLine: 'underline', // Underlined text for links
  },
  button: {
    backgroundColor: '#6495ed', // Blue background for the button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Export the AboutPage component as default
export default AboutPage;