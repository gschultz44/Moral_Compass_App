import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ResultsPage = ({ route }) => {
  const { answers } = route.params;

  // Example of your own responses, with long texts split into paragraphs.
  const myResponses = [
    "From a Kantian perspective, the statement is neutral. Kantian ethics would support AIs role in assisting decision-making, but it would caution against allowing AI to make final decisions independently, as this could undermine human autonomy and dignity. AI systems should assist healthcare professionals, but not replace their moral judgment.",
    "From a Kantian perspective, the statement is fair. Kantian ethics emphasizes the dignity and autonomy of all individuals, supporting the idea that everyone has the right to access healthcare. Universal healthcare ensures that individuals can pursue their rational goals and live dignified lives.",
    "From a Kantian perspective, the statement is fair. Kantian ethics emphasizes the moral duty to respect both current and future generations' autonomy and well-being. Strict regulations on carbon emissions ensure that corporations do not harm the environment or exploit it for profit, treating the planet and its inhabitants as ends in themselves.",
    "From a Kantian perspective, the statement is against. Kantian ethics values individual autonomy and dignity, which include the right to privacy. Surveillance that infringes on privacy treats individuals as mere means to an end, undermining their autonomy.",
    "From a Kantian perspective, the statement is neutral. Kantian ethics focuses on respecting individuals' autonomy and ensuring that actions do not harm others. While the right to self-defense may be valued, less strict gun laws could potentially endanger the safety and well-being of others.",
    "From a Kantian perspective, the statement is fair. Kantian ethics emphasizes respect for human dignity and autonomy, which applies to all individuals, regardless of their immigration status.",
    "From a Kantian perspective, the statement is fair. Kantian ethics emphasizes the moral duty to respect the dignity and autonomy of all individuals, regardless of their background.",
    "From a Kantian perspective, the statement is neutral. While social media platforms have a responsibility to prevent harm caused by misinformation, this must be balanced with respecting individuals' autonomy and freedom of expression.",
    "From a Kantian perspective, the statement is against. Kantian ethics values human dignity and the moral duty to preserve life. Choosing assisted suicide, even if it respects individual autonomy, could be seen as treating human life as a mere means to an end.",
    "From a Kantian perspective, the statement is fair. Kantian ethics emphasizes respect for individual autonomy and the right to make choices that align with one’s own rational goals.",
  ];

  // Array of questions
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Responses</Text>
      {answers.map((answer, index) => (
        <View key={index} style={styles.responseContainer}>
          <Text style={styles.questionNumber}>Question {index + 1}:</Text>
          <Text style={styles.questionText}>{questions[index]}</Text>
          <Text style={styles.userResponse}>Your response: {answer}</Text>
          
          <Text style={styles.myResponseTitle}>AI Kantianism Response:</Text>
          {myResponses[index].split('. ').map((sentence, i) => (
            <Text key={i} style={styles.myResponse}>{sentence.trim()}{sentence && '.'}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  responseContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 16,
    marginTop: 10,
    fontStyle: 'italic',
  },
  userResponse: {
    fontSize: 16,
    marginTop: 5,
    fontStyle: 'bold'
  },
  myResponseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  myResponse: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ResultsPage;
