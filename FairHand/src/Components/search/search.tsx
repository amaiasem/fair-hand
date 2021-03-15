import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { COLOR, SIZES } from '../../../constants'
import { filterShopsByName } from '../../redux/actions/fairHandActionCreators'

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

function renderSearch (shops: Object[], action: any) {
  const [search, setSearch] = useState('')

  if (search !== '') {
    setTimeout(() => {
      action.filterShopsByName(shops, search)
    }, 300)
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(renderSearch)
