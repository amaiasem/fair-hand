import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MapView, { Callout, Marker } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, View, Text, Image } from 'react-native'
import { COLOR, SIZES } from '../../../constants'
import renderHeader from '../../Components/header/Header'
import { loadAllShops, filterShopsByType, filterShopsByName } from '../../redux/actions/fairHandActionCreators'
import RenderSearch from '../../Components/search/search'
import ShopInterface from '../../Interfaces/shopInterface'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
    height: 40,
    width: 100,
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
    borderTopColor: COLOR.black,
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5
  }
})

const Maps = ({ filteredShops, action }: {filteredShops: ShopInterface[], action: any}) => {
  useEffect(() => {
    action.loadAllShops()
  }, [])

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
