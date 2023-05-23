import { StyleSheet, Text, View ,Pressable,Image} from 'react-native'
import React from 'react'

export default function PlaceItem({place}) {
  return (
    
    <View>
        <Pressable onPress={ onSelect}>
        <Image source={{uri: place.imageuri }} />
        </Pressable>
      <Text>{place.item}</Text>
      <Text>{place.address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})