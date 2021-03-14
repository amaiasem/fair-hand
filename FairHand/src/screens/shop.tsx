import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Linking, FlatList } from 'react-native'
import { COLOR, SIZES } from '../../constants'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import renderHeader from './Header'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
  goBackButton: {
    position: 'absolute',
    width: SIZES.width,
    top: 0,
    padding: 10,
    zIndex: 1
  },
  icon: {
    fontSize: 40,
    color: COLOR.white
  },
  coverImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover'
  },
  containerLogo: {
    position: 'absolute',
    width: 120,
    height: 120,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 120
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
    height: 235,
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
    justifyContent: 'space-between',
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

// const data = DATA[0]

const Shop = ({ route, navigation }: any) => {
  const [shop, setShop] = useState(null)

  useEffect(() => {
    const { item } = route.params
    setShop(item)
  })

  const renderItem = ({ item }: any) => (
    <View style={styles.newInItem}>
        <Image
          style = {styles.newInImage}
          source={{ uri: item.productImage }}
        ></Image>
        <View style={styles.newInInfo}>
          <View>
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.price}>{item.price} €</Text>
          </View>
          <TouchableOpacity
          onPress= {() => { Linking.openURL(item.url) }}
          style={styles.newInbutton}>
            <Text style={styles.buttonText}>See on the website</Text>
          </TouchableOpacity>
        </View>
    </View>
  )

  // const renderReviews = ({ item }: any) => (
  //   <View>
  //     <Text>{item.review}</Text>
  //   </View>
  // )

  return (
  <View style = {styles.container}>
    {renderHeader()}
    <View style={styles.shopDetail}>
      <View style={styles.containerCover}>
        <View style={styles.goBackButton}>
            <Ionicons
              style={styles.icon}
              name="chevron-back-circle-outline"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
              testID='go-back'
              />
        </View>
        <Image
          style={styles.coverImage}
          source={{ uri: shop?.coverImage }}
        ></Image>
        <View style={styles.containerLogo}>
          <Image
          style={styles.logoImage}
          source={{ uri: shop?.logoImage }}
          ></Image>
        </View>
      </View>
      <View style={styles.shopInfo}>
        <Text style={styles.title}>{shop?.shopName}</Text>
        <Text style={styles.info}>{shop?.address}</Text>
        <Text style={styles.info}>{shop?.schedule}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(shop?.website)}>
        <Text style={styles.web}>{shop?.website}</Text>
        </TouchableOpacity>
        <View style={styles.containerButtons}>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${shop?.phone}`)}>
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
            data={shop?.NewIn}
            renderItem={renderItem}
            keyExtractor={item => item.productName}
          ></FlatList>
      </View>
      {/* <Text>{REVIEWS[0].review}</Text>
      <View>
        <FlatList
        data={REVIEWS}
        renderItem={renderReviews}
        keyExtractor={item => item._id}
        ></FlatList>
      </View> */}
    </View>
    {/* <View style={styles.goBackButton}>
      <Ionicons
        style={styles.icon}
        name="chevron-back-circle-outline"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
        testID='go-back'
        />
    </View> */}
  </View>
  )
}

export default Shop
