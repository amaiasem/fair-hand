import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLOR, SIZES, images } from '../../../constants'
import { TextInput } from 'react-native-gesture-handler'
import { userRegister } from '../../redux/actions/fairHandActionCreators'
import User from '../../Interfaces/userInterface'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIZES.width,
    padding: 30
  },
  icon: {
    fontSize: 50,
    color: COLOR.lightgrey
  },
  loginForm: {
    flex: 0.5,
    width: SIZES.width,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 80
  },
  input: {
    width: SIZES.width * 0.85,
    height: 40,
    marginTop: 15,
    paddingLeft: 30,
    borderRadius: SIZES.buttonRadius,
    borderColor: COLOR.grey,
    borderWidth: 1
  },
  button: {
    width: SIZES.width * 0.85,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.black,
    borderRadius: SIZES.buttonRadius
  },
  buttonText: {
    color: COLOR.white,
    fontSize: SIZES.buttonText,
    fontWeight: '700'
  }
})

const Register = ({ user, action, navigation }: {user: User, action: any, navigation: any}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const emailRegex: any = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passwordRegex: any = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  function registerAndValidate (name: string, email:string, password: string) {
    if (emailRegex.test(email) === false) {
      alert('Please add a valid email')
    }
    if (passwordRegex.test(password) === false) {
      alert('Please add a valid password! Minimum of 8 characters and at least one letter')
    } else if (password === repeatPassword) {
      if (emailRegex.test(email) === true) {
        alert('Thank you for joining Fairhand!')
        action.userRegister({ name, email, password })
      }
    }
  }

  useEffect(() => {
    if (user.email) {
      navigation.navigate('TabNavigator')
    }
  }, [user.email])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack}>
        <Ionicons
          style={styles.icon}
          name="chevron-back-circle-outline"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
          testID='go-back'
          />
      </TouchableOpacity>
      <Image
        source= {images.orangeLogo}
      ></Image>
      <View style={styles.loginForm}>
        <Text style={styles.title}>Create your account</Text>
        <TextInput
          style={styles.input}
          onChangeText={(event) => setName(event)}
          placeholder='Name'
          value = {name}
          testID='input-name'
          ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={(event) => setEmail(event)}
          placeholder='Email'
          value = {email}
          testID='input-email'
          autoCapitalize="none"
          ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={(event) => setPassword(event)}
          placeholder='Password'
          value = {password}
          testID='input-password'
          autoCapitalize="none"
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={(event) => setRepeatPassword(event)}
          placeholder='Repeat password'
          value = {repeatPassword}
          autoCapitalize="none"
          secureTextEntry={true}
          testID='input-password'
        ></TextInput>
        <TouchableOpacity
        style={styles.button}
        disabled={!name || !email || !password}
        onPress={() => registerAndValidate(name, email, password)}>
            <Text style={styles.buttonText}>SUBMIT</Text>
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
    action: bindActionCreators({ userRegister }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
