import { StyleSheet, View } from 'react-native';
import RecipeFetch from './components/RecipeFetch';

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeFetch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
});
