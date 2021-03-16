import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { COLOR, SHADOW, SIZES } from '../../../constants'
import { filterShopsByName } from '../../redux/actions/fairHandActionCreators'
import ShopInterface from '../../Interfaces/shopInterface'

const styles = StyleSheet.create({
  searchTabs: {
    position: 'absolute',
    top: 60,
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.9,
    backgroundColor: COLOR.white,
    borderRadius: SIZES.buttonRadius,
    ...SHADOW
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
    width: SIZES.width * 0.8,
    backgroundColor: COLOR.white,
    borderTopRightRadius: SIZES.buttonRadius,
    borderBottomRightRadius: SIZES.buttonRadius,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLOR.lightgrey,
    fontSize: SIZES.h2
  },
  locationIcon: {
    position: 'absolute',
    top: 10,
    right: 5,
    color: COLOR.lightgrey
  }
})

function RenderSearch ({ shops, action }: {shops: ShopInterface[], action: any}) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setTimeout(() => {
      action.filterShopsByName(shops, search)
    }, 300)
  }, [search])

  return (
    <View style={styles.searchTabs}>
      <View style={styles.containerSearch}>
        <View style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color={COLOR.lightgrey} />
        </View>
          <TextInput
            style={styles.searchInput}
            onChangeText={(event) => setSearch(event)}
            placeholder='Find a shop'
            value={search}
            testID='input-shop'
            />
            <MaterialIcons style={styles.locationIcon} name="location-searching" size={30}/>
      </View>
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
    action: bindActionCreators({ filterShopsByName }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderSearch)
