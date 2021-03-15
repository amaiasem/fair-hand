import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MapView, { Marker } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { COLOR, SIZES, SHADOW2 } from '../../../constants'
import renderHeader from '../../Components/header/Header'
import loadAllShops, { filterShopsByType, filterShopsByName } from '../../redux/actions/fairHandActionCreators'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  },
  map: {
    width: SIZES.width,
    height: SIZES.height
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
  }
})

const Maps = ({ shops, filteredShops, action }: any) => {
  useEffect(() => {
    action.loadAllShops()
  }, [])

  return (
    <View style = {styles.container}>
      {renderHeader()}
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
      {filteredShops?.map((shop: any, index: number) => (
          <Marker
          key={index}
          coordinate={{ latitude: shop.latlong.lat, longitude: shop.latlong.long }}
          title={shop.shopName}
          description={shop.schedule}
          >
            <FontAwesome5 style={styles.shopMarker} name="map-marker-alt" size={40} color="black" />
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
