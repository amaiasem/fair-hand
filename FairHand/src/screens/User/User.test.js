import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, render, fireEvent, act } from '@testing-library/react-native'
import configureStore from 'redux-mock-store'
import User from './User'
import mockUser from '../../../constants/mockUser.ts'
import * as action from '../../redux/actions/fairHandActionCreators'
import * as ImagePicker from 'expo-image-picker'
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
    global.alert = jest.fn()
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

  describe('When pressing the Update image button', () => {
    it('It should call action.userUpdate', () => {
      const realUseState = React.useState

      const result = {
        cancelled: false,
        uri: '/image/profile.jpeg'
      }

      jest.spyOn(ImagePicker, 'launchImageLibraryAsync').mockReturnValueOnce(result)

      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => realUseState(result.uri))
        .mockImplementationOnce(() => realUseState(true))

      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('pickImage'))
      fireEvent.press(getByTestId('update-image'))
      expect(action.userUpdate).toHaveBeenCalled()
    })
  })

  describe('When pressing the Update image button and cancell the Image picker', () => {
    it('The button Update image should not be in the document', () => {
      const realUseState = React.useState

      const result = {
        cancelled: true,
        uri: '/image/profile.jpeg'
      }

      jest.spyOn(ImagePicker, 'launchImageLibraryAsync').mockReturnValueOnce(result)

      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => realUseState(result.uri))
        .mockImplementationOnce(() => realUseState(true))

      const { getByTestId, queryByText } = render(component)
      act(() => {
        fireEvent.press(getByTestId('pickImage'))
      })
      expect(queryByText('Update image')).not.toBeTruthy()
    })
  })

  describe('When pressing the camera button', () => {
    it('It should ask for permisions with an alert', () => {
      const result = {
        status: 'not granted'
      }

      jest.spyOn(ImagePicker, 'requestMediaLibraryPermissionsAsync').mockReturnValueOnce(result)

      render(component)
      expect(global.alert).toBeTruthy()
    })
  })

  describe('When pressing the camera button and have permission', () => {
    it('It should not ask for permisions', () => {
      const result = {
        status: 'granted'
      }

      jest.spyOn(ImagePicker, 'requestMediaLibraryPermissionsAsync').mockReturnValueOnce(result)

      render(component)
      expect(global.alert).not.toHaveBeenCalled()
    })
  })
  describe('When pressing the camera button and have permission', () => {
    it('It should not ask for permisions', () => {
      const result = {
        status: 'granted'
      }
      jest.mock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'web',
        select: () => null
      }))

      jest.spyOn(ImagePicker, 'requestMediaLibraryPermissionsAsync').mockReturnValueOnce(result)

      render(component)
      expect(global.alert).not.toHaveBeenCalled()
    })
  })
})
