import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';

const SearchQuestionPage = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [showResponse, setShowResponse] = useState(false);

    // Function to get OpenAI response
    const getOpenAIResponse = async (question) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant.' },
                        { role: 'user', content: question },
                    ],
                    max_tokens: 100, // limit to approx. 100 words
                    temperature: 0.7,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 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`, // Replace with actual API key
                    },
                }
            );
            console.log('API response:', response.data);
            return response.data.choices[0]?.message.content.trim() || "No response received.";
        } catch (error) {
            console.error('Error fetching data from OpenAI:', error?.response?.data || error.message);
            if (error.response?.status === 429) {
                return "Rate limit exceeded. Please try again later.";
            } else {
                return "Sorry, I couldn't get a response at the moment.";
            }
        }
    };

    const handleSearch = async () => {
        if (!question) {
            Alert.alert("Error", "Please enter a question.");
            return;
        }

        try {
            const apiResponse = await getOpenAIResponse(question);
            setResponse(apiResponse);
            setShowResponse(true); // Show response screen
        } catch (error) {
            Alert.alert("Error", "Failed to get a response.");
        }
    };

    const handleBackToSearch = () => {
        setQuestion(''); // Clear the question input
        setResponse(''); // Clear the response
        setShowResponse(false); // Go back to search screen
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Ask a Question</Text>

            {!showResponse ? (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your question here"
                        value={question}
                        onChangeText={setQuestion}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSearch}>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <View style={styles.responseContainer}>
                    <Text style={styles.responseTitle}>OpenAI Response:</Text>
                    <Text style={styles.responseText}>{response}</Text>

                    <Text style={styles.ratingPrompt}>
                        Rate this response based on your ethical beliefs:
                    </Text>

                    <View style={styles.ratingButtons}>
                        <TouchableOpacity style={[styles.ratingButton, styles.flexButton]}>
                            <Text style={styles.buttonText}>For</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.ratingButton, styles.flexButton]}>
                            <Text style={styles.buttonText}>Neutral</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.ratingButton, styles.flexButton]}>
                            <Text style={styles.buttonText}>Against</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.backButton} onPress={handleBackToSearch}>
                        <Text style={styles.buttonText}>Back to Search</Text>
                    </TouchableOpacity>
                </View>
            )}
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
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
    button: {
      backgroundColor: '#6495ed',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    backButton: {
      backgroundColor: '#6495ed',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 15,
    },
    ratingPrompt: {
      fontSize: 16,
      marginTop: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    ratingButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 15,
    },
    ratingButton: {
      backgroundColor: '#6495ed',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      justifyContent: 'center', // Ensures vertical alignment
      alignItems: 'center', // Ensures horizontal alignment
      minWidth: 90, // Ensures a consistent button size
      height: 50, // Explicit height for proper centering
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    responseContainer: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
    },
    responseTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    responseText: {
      fontSize: 16,
      marginTop: 10,
    },
  });
  
  export default SearchQuestionPage;
  
