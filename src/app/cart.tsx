import { StatusBar } from 'expo-status-bar'
import { View, Text, Platform, FlatList } from 'react-native'

import { useCart } from '@/src/providers/CartProvider'
import CartListeItem from '@/src/components/CartListItem'
import Button from '../components/Button'

const CartScreen = () => {
    const { items, total } = useCart()

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListeItem cartItem={item} />}
        contentContainerStyle={{ padding: 10 }}
      />

      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500'}}>Total: ${total}</Text>
      <Button text="Checkout" onPress={() => {}} />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen
