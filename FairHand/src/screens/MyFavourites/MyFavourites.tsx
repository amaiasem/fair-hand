import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { COLOR, SIZES, SHADOW } from '../../../constants'
import shopsD from '../../../constants/shopsD'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.white
  },
  myFavouritesContainer: {
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    width: SIZES.width * 0.9
  },
  titleMyFavourites: {
    fontSize: SIZES.h1,
    fontWeight: '700',
    color: COLOR.orange,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.orange,
    marginBottom: 20
  },
  containerShops: {
    paddingTop: 20,
    paddingBottom: 200,
    marginBottom: 50
  },
  shopCard: {
    flex: 1,
    flexDirection: 'row',
    width: SIZES.width * 0.85,
    height: 100,
    backgroundColor: COLOR.white,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5,
    ...SHADOW
  },
  containerImage: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 10
  },
  shopImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
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
  },
  goBackButton: {
    position: 'absolute',
    width: SIZES.width,
    top: 20,
    left: 20,
    zIndex: 1
  },
  icon: {
    color: COLOR.black
  },
  like: {
    position: 'absolute',
    top: 10,
    right: 10
  }
})

const MyFavourites = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
        <View
        style={styles.shopCard}
        testID='navigate-shop'
        >
              <View style={styles.like}>
                <AntDesign name="heart" size={20} color={COLOR.orange} />
              </View>
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
          </View>
        </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.goBackButton}>
        <Ionicons
            style={styles.icon}
            name="chevron-back-circle-outline"
            size={40}
            color="black"
            testID='go-back'
            onPress={() => navigation.goBack()}
            />
      </View>
      <View style={styles.myFavouritesContainer}>
        <Text style={styles.titleMyFavourites}>My Favourites</Text>
        <FlatList
            data={shopsD}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            style={styles.containerShops}
            showsVerticalScrollIndicator={false}
            />
            </View>
    </View>
  )
}

export default MyFavourites
