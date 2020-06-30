import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  BackHandler,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({navigation}) {
  let Name = '';

  const pressHandler = () => {
    if (Name) navigation.navigate('Questions', {start: true, name: Name});
    else Alert.alert('الاسم', 'رجاءا ادخل اسمك');
  };

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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ادخل إسمك"
        onChangeText={value => (Name = value)}
      />
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <Text style={styles.startText}>ابدأ الكويز</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252C4A',
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  input: {
    color: '#f4f6ff',
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderColor: '#f4f6ff',
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
  },
  button: {
    backgroundColor: '#107EEB',
    color: '#f4f6ff',
    borderWidth: 1,
    borderColor: '#f4f6ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  startText: {
    color: '#f4f6ff',
    fontSize: 22,
  },
});
