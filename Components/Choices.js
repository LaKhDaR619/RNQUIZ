import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Choices({a, selected, setSelected}) {
  const pressHandler = e => {
    console.log(`e: ${e}`);

    setSelected(e);
  };

  const bgStyle = index => ({
    backgroundColor: selected == index ? 'rgba(16, 126, 235, 0.5)' : '#252C4A',
  });

  const imgStyle = index => ({
    display: selected == index ? 'flex' : 'none',
  });

  // refactor this using map function
  return (
    <View style={styles.choicesContainer}>
      {a.map((answer, index) => {
        return (
          <View key={index} style={[styles.choiceContainer, bgStyle(index)]}>
            <TouchableWithoutFeedback
              style={{flex: 1}}
              onPress={() => pressHandler(index)}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View style={styles.numContainer}>
                  <ImageBackground
                    source={require('../assets/ok.png')}
                    style={[styles.ok, imgStyle(index)]}>
                    <Text style={styles.num} />
                  </ImageBackground>
                </View>
                <Text style={styles.choiceText}>{answer}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  choicesContainer: {
    flex: 5,
    width: '100%',
    justifyContent: 'space-around',
  },
  choiceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 3.5,
    borderColor: '#21486A',
    backgroundColor: '#252C4A',
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 10,
  },
  choiceText: {
    flex: 7,
    color: 'white',
    textAlign: 'right',
    fontSize: 17,
  },
  numContainer: {
    flex: 1,
    borderRadius: 50,
    borderColor: '#107EEB',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  num: {
    fontSize: 20,
    color: 'white',
  },
  ok: {
    width: 25,
    height: 25,
  },
});
