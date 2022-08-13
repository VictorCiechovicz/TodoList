import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Item = props => {
  return (
    <View style={estilos.item}>
      <View style={estilos.boxItens}>
        <View style={estilos.quadrado}></View>
        <Text style={estilos.textItem}>{props.text}</Text>
      </View>

      <View style={estilos.circulo}></View>
    </View>
  )
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: 335,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 53,
    borderRadius: 10,
    backgroundColor: 'rgba(246, 246, 246, 1) ',
    marginBottom: 20
  },
  boxItens: {
    flexDirection: 'row',
    margin: 15
  },
  quadrado: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: 'rgba(85, 188, 246, 0.4)'
  },
  textItem: {
    fontSize: 14,
    marginHorizontal: 15
  },
  circulo: {
    width: 12,
    height: 12,

    margin: 15,

    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'rgba(85, 188, 246, 0.4)'
  }
})
export default Item
