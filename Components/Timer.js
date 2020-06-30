import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Timer({handleNext, time, setTime, pauseTime}) {
  useEffect(() => {
    let timeout;

    if (!pauseTime) {
      timeout = setTimeout(() => {
        if (time > 0) setTime(time - 1);
        else {
          handleNext();
          clearTimeout(timeout);
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text
          style={[
            styles.text,
            {
              width: time > 3 ? (time * 100) / 30 + '%' : (3 * 100) / 30 + '%',
            },
          ]}>
          {time}
        </Text>
        <Image style={styles.img} source={require('../assets/time.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 40,
  },
  subContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderWidth: 3,
    borderColor: '#3F4768',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#F65277',
    textAlign: 'center',
    borderRadius: 20,
    height: '100%',
    textAlignVertical: 'center',
  },
  img: {
    position: 'absolute',
    right: 10,
    height: 20,
    width: 20,
  },
});
