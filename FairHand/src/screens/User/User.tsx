import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userUpdate, userLogout } from '../../redux/actions/fairHandActionCreators'
import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import renderHeader from '../../Components/header/Header'
import { COLOR, SIZES, images } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import UserInterface from '../../Interfaces/userInterface'
import * as ImagePicker from 'expo-image-picker'
import Screen from '../../../constants/ScreenConstants'

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
  camera: {
    position: 'absolute',
    top: '60%',
    right: '30%'
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
  const [image, setImage] = React.useState(null)
  const [showButton, setShowButton] = React.useState(false)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })
    if (!result.cancelled) {
      setImage(result.uri)
      setShowButton(true)
    }
  }

  function updateImage () {
    const userToUpdate = {
      _id: user._id,
      image: image
    }
    action.userUpdate(userToUpdate)
    setShowButton(false)
  }

  function userLogoutAndRedirect () {
    action.userLogout()
    navigation.navigate(Screen.AppCover)
  }

  return (
    <View style = {styles.container}>
      {renderHeader()}
      <View style={styles.userInfo}>
        <Image style={styles.userImage} source={{ uri: image || user.image || images.userImage }}></Image>
        <Text style={styles.userName}>{user?.name}</Text>
        <Text style={styles.userEmail}>{user?.email}</Text>
        <View style={styles.camera}>
          <Ionicons
          name="camera-outline"
          size={28}
          color={COLOR.orange}
          onPress={pickImage}
          testID='pickImage'/>
        </View>
      </View>
      <View style={styles.containerButtons}>
        {
          showButton
            ? <TouchableOpacity
          disabled={!image}
          style={styles.logoutButton}
          testID='update-image'
          onPress={() => updateImage()}>
            <Text style={styles.userButtonText}>Update image</Text>
          </TouchableOpacity>
            : <Text></Text>
        }

        <TouchableOpacity
        style={styles.userButtons}
        onPress={() => navigation.navigate(Screen.MyFavourites)}
        testID='navigate-myfavourites'>
          <Text style={styles.userButtonText}>My favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.userButtons}
        testID='navigate-myreviews'
        onPress={() => navigation.navigate(Screen.MyReviews)}>
          <Text style={styles.userButtonText}>My reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => userLogoutAndRedirect()}
        testID='logout'>
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
    action: bindActionCreators({ userUpdate, userLogout }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
