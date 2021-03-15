import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import renderHeader from './Header'
import { COLOR, SIZES, mockUser } from '../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
// const user = mockUser

const User = ({ mockUser: any }) => {
  return (
    <View style = {styles.container}>
      {renderHeader()}
      <View style={styles.userInfo}>
        <Image style={styles.userImage} source={{ uri: mockUser?.image }}></Image>
        <Text style={styles.userName}>{mockUser?.name}</Text>
        <Text style={styles.userEmail}>{mockUser?.email}</Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.userButtons}>
          <Text style={styles.userButtonText}>My favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButtons}>
          <Text style={styles.userButtonText}>My reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.userButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default User
