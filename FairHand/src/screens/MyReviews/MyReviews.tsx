import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLOR, SIZES } from '../../../constants'
import UserInterface from '../../Interfaces/userInterface'
import Review from '../../Interfaces/reviewInterface'
import { getReviewsByUserName } from '../../redux/actions/fairHandActionCreators'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.white
  },
  goBackButton: {
    position: 'absolute',
    width: SIZES.width,
    top: 20,
    left: 20,
    zIndex: 1
  },
  icon: {
    color: COLOR.black
  },
  containerReviews: {
    flex: 1,
    marginTop: 100,
    marginBottom: 0,
    width: SIZES.width * 0.90
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: '700',
    color: COLOR.orange,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.orange
  },
  reviewItem: {
    width: '100%',
    marginTop: 20
  },
  reviewInfo: {
    marginBottom: 10,
    borderBottomColor: COLOR.lightgrey,
    borderBottomWidth: 1,
    marginLeft: 15
  },
  shopNameReview: {
    fontWeight: '700',
    fontSize: SIZES.p16
  },
  review: {
    fontSize: SIZES.p16,
    marginBottom: 10
  },
  trashIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: COLOR.lightgrey
  }
})

const MyReviews = ({ reviews, user, navigation, action }: {reviews: Review[], user: UserInterface, navigation: any, action: any}) => {
  useEffect(() => {
    action.getReviewsByUserName(user?.name)
  }, [reviews.length])

  const renderItem = ({ item }: any) => (
    <View style={styles.reviewInfo}>
        <Text style={styles.shopNameReview}>{item.shopName}</Text>
        <Text style={styles.review}>{item.review}</Text>
        <Ionicons style={styles.trashIcon} name="trash-outline" size={20} />
    </View>
  )

  return (
        <View style={styles.container}>
            <View style={styles.goBackButton}>
                <Ionicons
                    style={styles.icon}
                    name="chevron-back-circle-outline"
                    size={40}
                    color="black"
                    onPress={() => navigation.goBack()}
                    testID='go-back'
                    />
            </View>
            <View style={styles.containerReviews}>
                    <Text style={styles.title}>My reviews</Text>
                {reviews[0]
                  ? <FlatList
                        data={reviews}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                        style={styles.reviewItem}
                        />
                  : <Text>There are no reviews</Text>
                }
             </View>
        </View>
  )
}

function mapStateToProps (state: any) {
  return {
    user: state.userReducer.user,
    reviews: state.reviewReducer.reviews
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    action: bindActionCreators({ getReviewsByUserName }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyReviews)
