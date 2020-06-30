import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Timer from '../Components/Timer';
import Choices from '../Components/Choices';

import getNewQuestions from '../Logic/RandomQuestions';

let score = 0;
let QandA = [];

export default function QuestionsScreen({
  navigation,
  navigation: {
    state: {
      params: {name},
    },
  },
}) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(-1);

  const [time, setTime] = useState(30);
  const [pauseTime, setPausetime] = useState(false);

  const Reset = () => {
    setCurrentQ(0);
    setSelected(-1);
    setTime(30);
    score = 0;
    QandA = getNewQuestions();
  };

  const handleNext = () => {
    // the user selected an answer
    if (selected != -1) {
      if (selected === QandA[currentQ].r) {
        score++;
      }

      setSelected(-1);
    }
    // the user didn't select an answer (for futur improvments like animation)
    else {
    }

    if (currentQ < 9) {
      setCurrentQ(currentQ + 1);
      setTime(30);
    }
    if (currentQ == 9) {
      setPausetime(true);
      setTimeout(() => {
        navigation.navigate('Result', {name, score});
      }, 1000);
    }
  };

  // So we can't go back while playing
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      setPausetime(true);
      Alert.alert('البدأ من جديد', 'هل انت متاكد انك تريد البدأ من جديد؟', [
        {
          text: 'لا',
          onPress: () => {
            setPausetime(false);
            setTime(time);
          },
        },
        {
          text: 'نعم',
          onPress: () => {
            navigation.navigate('Home');
          },
        },
      ]);

      // false means don't do anything
      return true;
    });
  });

  if (navigation.state.params.start) {
    navigation.state.params.start = false;
    Reset();
    setPausetime(false);
  }

  return (
    <View style={styles.container}>
      <Timer
        handleNext={handleNext}
        time={time}
        setTime={setTime}
        pauseTime={pauseTime}
      />
      <View style={styles.phaseContainer}>
        <Text style={styles.phase2}>10/</Text>
        <Text style={styles.phase1}>الأسئلة {currentQ + 1}</Text>
      </View>
      <View style={styles.splitter} />
      <Text style={styles.question}>{QandA[currentQ].q}</Text>
      <Choices
        a={QandA[currentQ].a}
        selected={selected}
        setSelected={setSelected}
      />
      <View style={styles.nextContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>التالي</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252C4A',
    flex: 2,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  phaseContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  phase1: {
    color: '#3F4768',
    fontSize: 24,
    fontWeight: 'bold',
  },
  phase2: {
    color: '#3F4768',
    fontSize: 16,
  },
  splitter: {
    borderBottomColor: '#3F4768',
    borderWidth: 2,
    borderStyle: 'dotted',
    width: '100%',
    height: 0,
    marginVertical: 20,
  },
  question: {
    flex: 2,
    fontSize: 20,
    color: 'white',
  },
  nextContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#107EEB',
    height: 60,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  nextText: {
    fontSize: 18,
    color: 'white',
  },
});
