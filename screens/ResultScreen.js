import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function ResultScreen({
  navigation,
  navigation: {
    state: {
      params: {score, name},
    },
  },
}) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert('الخروج', 'هل انت متاكد انك تريد الخروج؟', [
        {
          text: 'لا',
          onPress: () => {},
        },
        {
          text: 'نعم',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);

      // false means don't do anything
      return true;
    });
  });

  const handleRestart = () => {
    navigation.navigate('Home');
  };

  if (name == 'المربع' || name == 'مربع')
    Alert.alert('رسالة الى المربع', 'قالك لمدور ماتنساش تضرب عليا دورة خخخخ');

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        نتيجة {name} هي: {score}
      </Text>
      <View style={styles.nextContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleRestart}>
          <Text style={styles.nextText}>اللعب من جديد</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252C4A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    flex: 1,
    color: 'white',
    fontSize: 28,
    textAlignVertical: 'bottom',
    marginBottom: 40,
  },
  nextContainer: {
    flex: 1,
    justifyContent: 'flex-start',
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
