import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground} from 'react-native';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount = () => {
    setCount1(count1 + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  const zerar = () => {
    setCount1(0);
    setCount2(0);
  };

  return (
    <ImageBackground source={{uri:'data:image/jpeg;base64,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'}} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <View style={styles.counter}>
            <Text style={styles.title}>Contador 1</Text>
            <Text style={styles.count}>{count1}</Text>
            <Button title="Incrementar" onPress={incrementCount} />
          </View>
          <View style={styles.counter}>
            <Text style={styles.title}>Contador 2</Text>
            <Text style={styles.count}>{count2}</Text>
            <Button title="Incrementar" onPress={incrementCount2} />
            
          </View>
        </View>
        <Button title="Zerar" onPress={zerar} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
  },
  counter: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  count: {
    fontSize: 30,
    marginBottom: 5,
  },
});
