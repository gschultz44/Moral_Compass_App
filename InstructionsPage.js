import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InstructionsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      <Text style={styles.instructionsText}>
        Welcome to Moral Compass! In this survey, you’ll encounter a series of questions on important ethical issues. 
        For each question, select the option that best reflects your stance: Fair, Neutral, or Against.
      </Text>
      <Text style={styles.instructionsText}>
        After stating your opinions on the 10 ethical questions, you will receive a brief response from ChatGPT from a Kantianism ethical perspective.
      </Text>

      {/* Styled button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("QuestionsPage")}>
        <Text style={styles.buttonText}>Start Questions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  instructionsText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#6495ed', // Blue background for the button
    paddingVertical: 12,
    paddingHorizontal: 20,
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

export default InstructionsPage;
