import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import renderHeader from './Header'
import { AntDesign } from '@expo/vector-icons'
import { COLOR, SIZES, DATA, SHADOW2 } from '../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center'
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
  },
  containerShops: {
    paddingBottom: 200,
    marginTop: 140,
    marginBottom: 50
  },
  shopCard: {
    flex: 1,
    flexDirection: 'row',
    width: SIZES.width * 0.95,
    height: 130,
    backgroundColor: COLOR.white,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5,
    ...SHADOW2
  },
  containerImage: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 10
  },
  shopImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    borderRadius: SIZES.cardRadius
  },
  shopInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 5,
    marginTop: 10
  },
  shopName: {
    fontSize: SIZES.h2,
    fontWeight: '700',
    color: COLOR.orange
  },
  address: {
    fontSize: SIZES.p14
  },
  schedule: {
    fontSize: SIZES.p14,
    fontStyle: 'italic',
    color: COLOR.lightgrey
  }
})

function renderSearch () {
  const [value, onChangeText] = useState('')
  return (
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
          testID='input-shop'
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
  )
}

const Home = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.shopCard}>
      <View style= {styles.containerImage}>
          <Image
            key = {item._id}
            style= {styles.shopImage}
            source={{ uri: item.logoImage }}
          ></Image>
      </View>
      <View style={styles.shopInfo}>
        <Text style={styles.shopName}>{item.shopName}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.schedule}>{item.schedule}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style = {styles.container}>
      {renderHeader()}
      {renderSearch()}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        style={styles.containerShops}
      />
    </View>
  )
}

export default Home
