import { StatusBar } from 'expo-status-bar'
import { View, Text, Platform, FlatList } from 'react-native'

import { useCart } from '@/src/providers/CartProvider'
import CartListeItem from '@/src/components/CartListItem'

const CartScreen = () => {
    const { items } = useCart()

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListeItem cartItem={item} />}
        contentContainerStyle={{ padding: 10 }}
      />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen
