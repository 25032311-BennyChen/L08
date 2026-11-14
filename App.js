import React, {useState} from 'react';
import {ScrollView, Button, Alert, Text, View, StyleSheet} from 'react-native';
import Movie from './components/Movie';
import {FontAwesome6} from "@expo/vector-icons";

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize : 28,
        backgroundColor : 'black',
    },
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    buttonBox: {
        margin: 15,
        borderRadius: 15,
        overflow: 'hidden',
    },
});


const MyApp = () => {
  // Declare variables
  // let pw='';
  const [answer1,setAnswer1] = useState('');
  const [answer2,setAnswer2] = useState('');
  const [answer3,setAnswer3] = useState('');

const checkAnswers =() => {
  let correct=0
  if (answer1==='Avengers Endgame: Encore movie'){
    correct+=1;
  }
  if (answer2==='Insidious: The Red Door'){
    correct+=1;
  }
  if (answer3==='The Conjuring: Last Rites (2025)'){
    correct+=1;
  }

  Alert.alert("Quiz Result", "You have " + correct + " correct answers!");
};


  return (
      <ScrollView style={styles.container}>

        <Text></Text>
          <View>
              <Text style={[styles.title, {textAlign: 'center'}]}>
                  <FontAwesome6 name= {'mobile-screen'} size={30} color={'white'} />
                  MOVIE</Text>
          </View>

        <Movie
            poster={{uri:"https://static2.tribute.ca/poster/660x980/avengers-endgame-encore-135915.jpg"}}
            selectedAnswer={answer1}
            onAnswerChange={setAnswer1}
            option1="Avengers: Infinity War"
            option2="Avengers: Age of Ultron"
            option3="Avengers Endgame: Encore movie"
        />

        <Movie
            poster={{uri:"https://fr.web.img4.acsta.net/pictures/23/04/24/09/48/5525043.jpg"}}
            selectedAnswer={answer2}
            onAnswerChange={setAnswer2}
            option1="Insidious: The Last Key"
            option2="Insidious: The Red Door"
            option3="Insidious: Chapter 3"
        />

        <Movie
            poster={{uri:"https://image.tmdb.org/t/p/original/9Xa0VkzSLzG6N2nLNZiOItaaIEC.jpg"}}
            selectedAnswer={answer3}
            onAnswerChange={setAnswer3}
            option1="The Conjuring 2"
            option2="The Nun II"
            option3="The Conjuring: Last Rites (2025)"
        />

          <View style={styles.buttonBox}>
              <Button
                  onPress={checkAnswers}
                  title="SUBMIT ANSWERS"
                  color="black"
              />
          </View>

      </ScrollView>
  );
};

export default MyApp;

