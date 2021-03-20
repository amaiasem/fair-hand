import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MapView, { Callout, Marker } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, View, Text, Image, Animated, ScrollView } from 'react-native'
import { COLOR, SHADOW, SIZES } from '../../../constants'
import renderHeader from '../../Components/header/Header'
import { loadAllShops, filterShopsByType, filterShopsByName } from '../../redux/actions/fairHandActionCreators'
import RenderSearch from '../../Components/search/search'
import ShopInterface from '../../Interfaces/shopInterface'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  },
  map: {
    width: SIZES.width,
    height: SIZES.height,
    zIndex: -1
  },
  userMarker: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.orangeStrong,
    borderColor: COLOR.orangeOpacity,
    borderWidth: 10
  },
  shopMarker: {
    color: COLOR.orange
  },
  containerCallout: {
    height: 50,
    width: 150,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: SIZES.cardRadius
  },
  shopName: {
    fontSize: SIZES.h2,
    fontWeight: '700'
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: COLOR.white,
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: COLOR.white,
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5
  },
  shopList: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 60
  },
  shopCard: {
    height: 180,
    width: SIZES.width * 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: SIZES.cardRadius,
    backgroundColor: COLOR.white,
    ...SHADOW
  },
  shopLogo: {
    marginTop: 18,
    height: 80,
    width: 80,
    resizeMode: 'contain',
    borderRadius: SIZES.cardRadius
  },
  cardInfo: {
    padding: 10,
    height: 150,
    width: '75%',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  cardShopName: {
    fontWeight: '700',
    fontSize: SIZES.p22,
    color: COLOR.orange
  },
  button: {
    width: 200,
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.orange,
    borderRadius: SIZES.buttonRadius
  },
  buttonText: {
    color: COLOR.white,
    fontSize: SIZES.p14,
    fontWeight: '700'
  }
})

const Maps = ({ filteredShops, action, navigation }: {filteredShops: ShopInterface[], action: any, navigation: any}) => {
  useEffect(() => {
    action.loadAllShops()
  }, [])

  const scrollViewRef = useRef()
  const onMarkerPress = (mapEventData: any) => {
    const markerID = mapEventData._targetInst.return.key

    const x = (markerID * (SIZES.width * 0.8)) + (markerID * 20)

    scrollViewRef.current.scrollTo({ x: x, y: 0, animated: true })
  }

  return (
    <View style = {styles.container}>
      {renderHeader()}
      <RenderSearch/>
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: 41.398441,
        longitude: 2.199540,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>
        <Marker
          coordinate={{ latitude: 41.398441, longitude: 2.199540 }}
        >
          <View style={styles.userMarker}></View>
        </Marker>
      {filteredShops?.map((shop: ShopInterface, index: number) => (
          <Marker
          key={index}
          coordinate={{ latitude: shop.latlong.lat, longitude: shop.latlong.long }}
          title={shop.shopName}
          description={shop.schedule}
          onPress={(event) => onMarkerPress(event)}
          >
            <FontAwesome5 style={styles.shopMarker} name="map-marker-alt" size={40} color="black" />
            <Callout tooltip={true}>
              <View>
                <View style={styles.containerCallout}>
                  <Text style={styles.shopName}>{shop.shopName}</Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          </Marker>
      ))
      }
      </MapView>
      <Animated.ScrollView
      ref={scrollViewRef}
      horizontal
      style={styles.shopList}
      scrollEventThrottle={1}
      pagingEnabled
      snapToInterval={(SIZES.width * 0.8) + 20}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      contentInset={{
        top: 0,
        left: SIZES.width * 0.1 - 10,
        bottom: 0,
        right: SIZES.width * 0.1 - 10
      }}
      contentContainerStyle={{
        paddingHorizontal: SIZES.width * 0.1 - 10
      }}
      >
        {filteredShops?.map((item: ShopInterface, index: number) => (
          <View key={index} style={styles.shopCard}>
            <View>
              <Image
              style={styles.shopLogo}
              source={{ uri: item.logoImage }}></Image>
            </View>
            <View style={styles.cardInfo}>
              <View>
              <Text style={styles.cardShopName}>{item.shopName}</Text>
              <Text>{item.address}</Text>
              </View>
              <TouchableOpacity
             onPress={() => navigation.navigate('Shop', { item })}
              style={styles.button}>
                <Text style={styles.buttonText}>More info</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      }
      </Animated.ScrollView>
    </View>
  )
}

function mapStateToProps (state: any) {
  return {
    shops: state.shopReducer.shops,
    filteredShops: state.shopReducer.filteredShops
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    action: bindActionCreators({ loadAllShops, filterShopsByType, filterShopsByName }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps)
