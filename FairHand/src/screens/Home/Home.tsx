import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import renderHeader from '../../Components/header/Header'
import { COLOR, SIZES, SHADOW2 } from '../../../constants'
import loadAllShops, { filterShopsByType, filterShopsByName } from '../../redux/actions/fairHandActionCreators'
import ShopInterface from '../../Interfaces/shopInterface'
import RenderSearchWithFilters from '../../Components/SearchWithFilters/SearchWithFilters'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center'
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
    height: 140,
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
    marginRight: 5,
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

const Home = ({ shops, filteredShops, action, navigation }:
  {shops: ShopInterface[], filteredShops: ShopInterface[], action: any, navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      action.loadAllShops()
    }, 400)
  }, [])

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
    style={styles.shopCard}
    onPress={() => navigation.navigate('Shop', { item })}
    >
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
      <RenderSearchWithFilters/>
      <FlatList
        data={filteredShops}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        style={styles.containerShops}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
