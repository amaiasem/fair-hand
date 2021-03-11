import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import renderHeader from './Header'
import { AntDesign } from '@expo/vector-icons'
import { COLOR, SIZES } from '../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  },
  searchTabs: {
    position: 'absolute',
    height: 130,
    top: 50,
    backgroundColor: COLOR.white,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.lightgrey
  },
  containerSearch: {
    flexDirection: 'row',
    height: 80,
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white
  },
  searchIcon: {
    width: 50,
    height: 50,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: SIZES.buttonRadius,
    borderBottomLeftRadius: SIZES.buttonRadius,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLOR.lightgrey

  },
  searchInput: {
    height: 50,
    width: '80%',
    backgroundColor: COLOR.white,
    borderTopRightRadius: SIZES.buttonRadius,
    borderBottomRightRadius: SIZES.buttonRadius,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLOR.lightgrey,
    fontSize: SIZES.h2

  },
  containerTabs: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10
  },
  tag: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.whiteGrey,
    borderRadius: SIZES.buttonRadius,
    fontSize: SIZES.p14
  }
})

const Home = () => {
  const [value, onChangeText] = useState('')

  return (
    <View style = {styles.container}>
      {renderHeader()}
      <View style={styles.searchTabs}>
        <View style={styles.containerSearch}>
          <View style={styles.searchIcon}>
            <AntDesign name="search1" size={24} color={COLOR.lightgrey} />
          </View>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => onChangeText(text)}
              placeholder='Find a shop'
              value={value}
              />
        </View>
        <View style={styles.containerTabs}>
          <TouchableOpacity style={styles.tag}>
           <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
           <Text>Clothes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
           <Text>Accessories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
           <Text>Shoes</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Welcome Home!</Text>
    </View>
  )
}

export default Home
