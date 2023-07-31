import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Graphics from './components/Graphics'
import Tables from './components/Tables'
import Footer from './components/Footer'


export default function App() {
  return (
    <View style={styles.container}>
      <Header> </Header>
      <Graphics> </Graphics>
        <Tables></Tables>
      <Footer> </Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      flexDirection: 'column',
    alignItems: 'center',

  },
});
