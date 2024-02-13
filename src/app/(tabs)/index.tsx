import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import products from '../../../assets/data/products'

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
      source={{ uri: product.image }}
      style={styles.image}
      />
     <Text style={styles.title}>{product.name}</Text>
     <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
});
