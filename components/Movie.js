import React from 'react';
import {View, Text, Image , StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    movieBox: {
        backgroundColor: 'white',
        margin: 12,
        padding: 15,
        borderWidth: 2,
        borderColor: 'grey',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius:50,
    },
    poster: {
        width: 220,
        height: 330,
    },
    question: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        margin: 12,
        textAlign: 'center',
    },
    picker: {
        width: '100%',
        backgroundColor: 'grey',
    },
});

const Movie = ({poster, selectedAnswer, onAnswerChange, option1, option2, option3}) => {
    return (
        <View style={styles.movieBox}>
            <Text></Text>

            <Image source={poster}
                   style={styles.poster} />

            <Text style={styles.question}>What movie is this?</Text>

            <Picker
                selectedValue={selectedAnswer}
                onValueChange={(value) => onAnswerChange(value)}
                style={styles.picker}>

                <Picker.Item label="Select an answer" value="" />
                <Picker.Item label={option1} value={option1}/>
                <Picker.Item label={option2} value={option2}/>
                <Picker.Item label={option3} value={option3}/>

            </Picker>
        </View>
    );
};

export default Movie;