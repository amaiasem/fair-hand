import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image } from 'react-native'
import renderHeader from '../../Components/header/Header'
import { COLOR, SIZES, images } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import UserInterface from '../../Interfaces/userInterface'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  },
  userInfo: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userImage: {
    height: 150,
    width: 150,
    borderRadius: 80,
    margin: 20
  },
  userName: {
    fontSize: SIZES.h1,
    fontWeight: '600'
  },
  userEmail: {
    fontSize: SIZES.h2,
    fontWeight: '600'
  },
  containerButtons: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  userButtons: {
    width: SIZES.width * 0.85,
    height: 35,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.orange,
    borderRadius: SIZES.buttonRadius
  },
  userButtonText: {
    color: COLOR.white,
    fontSize: SIZES.buttonText,
    fontWeight: '700'
  },
  logoutButton: {
    width: SIZES.width * 0.85,
    height: 35,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.black,
    borderRadius: SIZES.buttonRadius
  }

})

const User = ({ user, navigation, action }: {user: UserInterface, navigation: any, action: any}) => {
  return (
    <View style = {styles.container}>
      {renderHeader()}
      <View style={styles.userInfo}>
        <Image style={styles.userImage} source={{ uri: user.image ? user.image : images.userImage }}></Image>
        <Text style={styles.userName}>{user?.name}</Text>
        <Text style={styles.userEmail}>{user?.email}</Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.userButtons}>
          <Text style={styles.userButtonText}>My favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.userButtons}
        onPress={() => navigation.navigate('MyReviews')}>
          <Text style={styles.userButtonText}>My reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.userButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function mapStateToProps (state: any) {
  return {
    user: state.userReducer.user
  }
}

function mapDispatchToProps (dispatch: any) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
