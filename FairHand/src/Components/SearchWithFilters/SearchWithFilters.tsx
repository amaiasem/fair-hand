import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { COLOR, SIZES } from '../../../constants'
import { loadAllShops, filterShopsByType, filterShopsByName } from '../../redux/actions/fairHandActionCreators'
import ShopInterface from '../../Interfaces/shopInterface'

const styles = StyleSheet.create({
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

function RenderSearchWithFilters ({ shops, action }: {shops: ShopInterface[], action: any}) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search) {
      setTimeout(() => {
        action.filterShopsByName(shops, search)
      }, 300)
    } else {
      action.loadAllShops()
    }
  }, [search])

  return (
    <View style={styles.searchTabs}>
      <View style={styles.containerSearch}>
        <View style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color={COLOR.lightgrey} />
        </View>
          <TextInput
            style={styles.searchInput}
            onChangeText={(search) => setSearch(search)}
            placeholder='Find a shop'
            value={search}
            testID='input-shop'
            />
      </View>
      <ScrollView
        style={styles.containerTabs}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
        style={styles.tag}
        testID='all'
        onPress = {() => action.loadAllShops()}
        >
         <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tag}
          testID='Clothes'
          onPress={() => { action.filterShopsByType(shops, 'Clothes'); setSearch('') }}
          >
          <Text>Clothes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tag}
          testID='Accessories'
          onPress={() => action.filterShopsByType(shops, 'Accessories')}
          >
          <Text>Accessories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tag}
          testID='Shoes'
          onPress={() => action.filterShopsByType(shops, 'Shoes')}
          >
          <Text>Shoes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tag}
          testID='Jewelry'
          onPress={() => action.filterShopsByType(shops, 'Jewelry')}
          >
          <Text>Jewelry</Text>
        </TouchableOpacity>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(RenderSearchWithFilters)
