import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import configureStore from 'redux-mock-store'
import User from './User'
import mockUser from '../../../constants/mockUser.ts'
import * as action from '../../redux/actions/fairHandActionCreators'
// import * as React from 'react'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore()

jest.spyOn(action, 'userLogout').mockReturnValue({ type: '' })
jest.spyOn(action, 'userUpdate').mockReturnValue({ type: '' })

describe('Given a component User', () => {
  let store
  let component
  let navigate

  beforeEach(() => {
    store = mockStore({
      userReducer: { user: mockUser }
    })
    navigate = jest.fn()
    component = (
      <Provider store={store}>
        <User navigation={{ navigate }}/>
        </Provider>)
  })

  afterEach(() => cleanup())

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing on MyReviews button', () => {
    it('It should call navigation.navigate with argument MyReviews', () => {
      const { getByTestId } = render(component)

      fireEvent.press(getByTestId('navigate-myreviews'))
      expect(navigate).toHaveBeenCalledWith('MyReviews')
    })
  })

  describe('When pressing on MyFavourites button', () => {
    it('It should call navigation.navigate with argument MyFavourites', () => {
      const { getByTestId } = render(component)

      fireEvent.press(getByTestId('navigate-myfavourites'))
      expect(navigate).toHaveBeenCalledWith('MyFavourites')
    })
  })

  describe('When pressing Logout button', () => {
    it('It should call action.userLogout', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('logout'))
      expect(action.userLogout).toHaveBeenCalled()
    })
  })

  describe('When pressing Logout button', () => {
    it('It should call navigation.navigate with AppCover', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('logout'))
      expect(navigate).toHaveBeenCalledWith('AppCover')
    })
  })

  describe('When pressing the camera button', () => {
    it('It should enable Update image button', async () => {
      const { getByTestId } = render(component)
      const realUseState = React.useState

      fireEvent.press(getByTestId('pickImage'))

      const result = {
        cancelled: false,
        uri: '/image/profile.jpeg'
      }
      const requestMediaLibraryPermissionsAsync = jest.fn()
      const launchImageLibraryAsync = jest.fn()
      const ImagePicker = {
        launchImageLibraryAsync,
        requestMediaLibraryPermissionsAsync
      }

      await ImagePicker.requestMediaLibraryPermissionsAsync.mockReturnValueOnce({ results: { status: 'false' } })

      await ImagePicker.launchImageLibraryAsync.mockReturnValueOnce(result)

      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => realUseState(result.uri))

      expect('Update image').toBeTruthy()
    })
  })
})
