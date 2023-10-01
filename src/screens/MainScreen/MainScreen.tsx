import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components';
import { BaseTextInput } from '../../components/BaseTextInput';

export const MainScreen = () =>{
  return (
    <View style={styles.container}>
      <BaseTextInput />
      <Button title={'Log in'} onPress={() => console.log('Pressed')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
