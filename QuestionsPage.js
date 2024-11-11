import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuestionsPage = ({ navigation }) => {
  const questions = [
    "Artificial intelligence systems should have the ability to make decisions in healthcare, such as treatment recommendations.",
    "Universal healthcare is a fundamental human right that should be guaranteed to all citizens.",
    "There should be strict regulations on carbon emissions for corporations to combat climate change.",
    "Surveillance programs should be used to enhance national security, even at the cost of individual privacy.",
    "There should be less strict gun laws.",
    "The United States should provide sanctuary to undocumented immigrants.",
    "Companies should be held accountable for creating diverse work environments.",
    "Social media platforms should be in charge of controlling misinformation.",
    "Individuals should be allowed to choose assisted suicide.",
    "Contraception is a basic human right.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleResponsePress = (response) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = response;
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // After all questions are answered, navigate to ResultsPage
      navigation.navigate("ResultsPage", { answers });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.counter}>
          Question {currentIndex + 1} of {questions.length}
        </Text>
        <Text style={styles.question}>{questions[currentIndex]}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleResponsePress('Fair')}>
            <Text style={styles.buttonText}>Fair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleResponsePress('Neutral')}>
            <Text style={styles.buttonText}>Neutral</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleResponsePress('Against')}>
            <Text style={styles.buttonText}>Against</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  questionContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  counter: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  question: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#6495ed',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuestionsPage;
