import React from 'react'
import { StyleSheet, Text, View, Image, Linking, FlatList } from 'react-native'
import { COLOR, SIZES, DATA } from '../../constants'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import renderHeader from './Header'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

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
  },
  newInContainer: {
    marginLeft: 20
  },
  newInTitle: {
    fontSize: SIZES.h2,
    marginRight: 20,
    fontWeight: '700',
    color: COLOR.black,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.black
  },
  newInItem: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 160,
    height: 240,
    marginTop: 10
  },
  newInImage: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: SIZES.cardRadius
  },
  newInInfo: {
    marginTop: 5,
    width: 150,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  productName: {
    fontSize: SIZES.p12,
    fontWeight: '700'
  },
  price: {
    fontSize: SIZES.p12,
    color: COLOR.grey
  },
  newInbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    width: 120,
    height: 25,
    backgroundColor: COLOR.orange,
    borderRadius: SIZES.buttonRadius
  },
  buttonText: {
    color: COLOR.white,
    fontSize: SIZES.p12
  }

})

const data = DATA[0]

const Shop = ({ data: any, navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <View style={styles.newInItem}>
        <Image
          style = {styles.newInImage}
          source={{ uri: item.productImage }}
        ></Image>
        <View style={styles.newInInfo}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.price}>{item.price} €</Text>
          <TouchableOpacity
          onPress= {() => { Linking.openURL(item.url) }}
          style={styles.newInbutton}>
            <Text style={styles.buttonText}>See on the website</Text>
          </TouchableOpacity>
        </View>
    </View>
  )

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
            <View style={styles.newInContainer}>
            <Text style={styles.newInTitle}>New in</Text>
                <FlatList
                  horizontal={true}
                  data={data.NewIn}
                  renderItem={renderItem}
                  keyExtractor={item => item.productName}
                ></FlatList>
            </View>
          </View>
        </View>
  )
}

export default Shop
