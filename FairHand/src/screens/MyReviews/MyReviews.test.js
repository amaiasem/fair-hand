import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
import MyReviews from './MyReviews.tsx'
import REVIEWS from '../../../constants/REVIEWS.ts'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore()
jest.spyOn(action, 'deleteReview').mockReturnValue({ type: '' })
jest.spyOn(action, 'getReviewsByUserName').mockReturnValue({ type: '' })

describe('Given a component MyReviews', () => {
  let store
  let component
  let goBack

  beforeEach(() => {
    store = mockStore({
      reviewReducer: { reviews: REVIEWS },
      userReducer: { user: {} }
    })
    goBack = jest.fn()
    component = (
          <Provider store={store}><MyReviews navigation={{ goBack }}/></Provider>
    )
  })

  afterEach(() => cleanup())

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing on the go back button', () => {
    it('It should call navigation.goBack', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('go-back'))
      expect(goBack).toHaveBeenCalled()
    })
  })

  describe('When pressing the trash button of a review', () => {
    it('It should call deleteReview', () => {
      const { getAllByTestId } = render(component)
      fireEvent.press(getAllByTestId('delete-review')[0])
      expect(action.deleteReview).toHaveBeenCalled()
    })
  })
})

describe('Given a component MyReviews, with no reviews', () => {
  let store
  let component
  let goBack

  beforeEach(() => {
    store = mockStore({
      reviewReducer: { reviews: [] },
      userReducer: { user: {} }
    })
    goBack = jest.fn()
    component = (
          <Provider store={store}><MyReviews navigation={{ goBack }}/></Provider>
    )
  })

  afterEach(() => cleanup())

  describe('When it is rendered', () => {
    it('It should display \'There are no reviews\'', () => {
      const { queryByText } = render(component)
      const noReviews = queryByText('There are no reviews')
      expect(noReviews).toBeTruthy()
    })
  })
})
