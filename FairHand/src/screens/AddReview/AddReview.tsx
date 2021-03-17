import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { COLOR, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIZES.width,
    padding: 30
  },
  icon: {
    color: COLOR.black
  },
  inputInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  titleShop: {
    fontSize: SIZES.h1,
    fontWeight: '700',
    marginBottom: 10,
    color: COLOR.orange
  },
  titleReview: {
    fontSize: SIZES.p22,
    fontWeight: '700',
    marginBottom: 10
  },
  input: {
    textAlignVertical: 'top',
    borderColor: COLOR.black,
    borderWidth: 2,
    borderRadius: SIZES.buttonRadius,
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.6,
    padding: 20,
    fontSize: SIZES.h2
  },
  containerButtons: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20
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
  }
})

const AddReview = ({ route, navigation }:any) => {
  const [review, setReview] = useState('')
  const { item }: any = route.params
  const [shop] = useState(item)

  return (
    <View style={styles.container}>
        <View style={styles.goBack}>
            <Ionicons
            style={styles.icon}
            name="chevron-back-circle-outline"
            size={40}
            color="black"
            onPress={() => navigation.goBack()}
            testID='go-back'
            />
      </View>
        <View style={styles.inputInfo}>
        <Text style={styles.titleShop}>{shop?.shopName}</Text>
        <Text style={styles.titleReview}>Add your review</Text>
        <TextInput
            style={styles.input}
            onChangeText={(event) => setReview(event)}
            placeholder='What would you like to share?'
            numberOfLines={20}
            multiline={true}
            value = {review}
        ></TextInput>
        </View>
        <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.userButtons}>
            <Text style={styles.userButtonText}>Submit review</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AddReview
