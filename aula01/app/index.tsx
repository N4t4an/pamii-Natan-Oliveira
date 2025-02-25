import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desassombrado</Text>
      <Link href="/about" style={styles.button}>
        Jaser Strach
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'green',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'green',
  },
});
