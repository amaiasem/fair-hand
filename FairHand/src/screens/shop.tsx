import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import { COLOR, SIZES, DATA } from '../../constants/'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import renderHeader from './Header'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  },
  shopDetail: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: SIZES.width
  },
  containerCover: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
    width: SIZES.width
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIZES.width,
    padding: 20,
    zIndex: 1
  },
  icon: {
    fontSize: 50,
    color: COLOR.white
  },
  coverImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover'
  },
  logoImage: {
    position: 'absolute',
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 50
  },
  shopInfo: {
    width: SIZES.width,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: '700',
    marginBottom: 10,
    color: COLOR.grey
  },
  info: {
    fontSize: SIZES.p16,
    color: COLOR.black
  },
  web: {
    fontSize: SIZES.p16,
    color: COLOR.orange,
    fontStyle: 'italic'
  },
  containerButtons: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    right: 0,
    margin: 20
  },
  phoneHeart: {
    fontSize: 30,
    color: COLOR.black,
    marginLeft: 20
  }

})

const data = DATA[0]

const Shop = ({ data: any, navigation }: any) => {
  return (
        <View style = {styles.container}>
          {renderHeader()}
          <View style={styles.shopDetail}>
            <View style={styles.containerCover}>
              <TouchableOpacity style={styles.goBack}>
                <Ionicons
                  style={styles.icon}
                  name="chevron-back-circle-outline"
                  size={24}
                  color="black"
                  onPress={() => navigation.goBack()}
                  testID='go-back'
                  />
              </TouchableOpacity>
              <Image
              style={styles.coverImage}
              source={{ uri: data.coverImage }}
              ></Image>
              <Image
              style={styles.logoImage}
              source={{ uri: data.logoImage }}
              ></Image>
            </View>
            <View style={styles.shopInfo}>
              <Text style={styles.title}>{data.shopName}</Text>
              <Text style={styles.info}>{data.address}</Text>
              <Text style={styles.info}>{data.schedule}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(data.website)}>
              <Text style={styles.web}>{data.website}</Text>
              </TouchableOpacity>
              <View style={styles.containerButtons}>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${data.phone}`)}>
                  <AntDesign style={styles.phoneHeart} name="phone" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign style={styles.phoneHeart} name="hearto" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
  )
}

export default Shop
