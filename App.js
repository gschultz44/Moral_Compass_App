import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage';
import InstructionsPage from './InstructionsPage';
import QuestionsPage from './QuestionsPage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import SearchQuestionPage from './SearchQuestionPage';
import CreateAccountPage from './CreateAccountPage';
import ForgotPassword from './ForgotPassword';
import ResultsPage from './ResultsPage';

const Stack = createStackNavigator();

const App = () => {
  // Initialize the accounts map, this can be fetched from a database or state management
  const accounts = new Map();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="InstructionsPage" component={InstructionsPage} />
        <Stack.Screen name="QuestionsPage" component={QuestionsPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="ResultsPage" component={ResultsPage}/>
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          initialParams={{ accounts }} // Pass the accounts map to LoginPage as route param
        />
        <Stack.Screen name="SearchQuestionPage" component={SearchQuestionPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccountPage}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
