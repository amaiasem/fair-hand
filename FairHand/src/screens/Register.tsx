import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLOR, SIZES, images } from '../../constants'
import { TextInput } from 'react-native-gesture-handler'

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

const Register = ({ navigation }:any) => {
  const [value, onChangeText] = useState('')
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack}>
        <Ionicons
          style={styles.icon}
          name="chevron-back-circle-outline"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
          />
      </TouchableOpacity>
      <Image
        source= {images.orangeLogo}
      ></Image>
      <View style={styles.loginForm}>
        <Text style={styles.title}>Create your account</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          placeholder='Name'
          value = {value}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          placeholder='Surname'
          value = {value}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          placeholder='Email'
          value = {value}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          placeholder='Password'
          value = {value}
        ></TextInput>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register
