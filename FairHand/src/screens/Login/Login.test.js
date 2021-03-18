import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import Login from './Login'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore()
jest.spyOn(action, 'userLogin').mockReturnValue({ type: '' })

describe('Given a component Login', () => {
  let store
  let component
  let goBack
  let navigate

  beforeEach(() => {
    store = mockStore({
      userReducer: { user: [] }
    })
    goBack = jest.fn()
    navigate = jest.fn()
    component = (
      <Provider store={store}><Login navigation={{ goBack, navigate }}/></Provider>)
  })

  afterEach(() => cleanup())

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing a goBack button', () => {
    it('It should call navigation.goBack()', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('go-back'))
      expect(goBack).toHaveBeenCalled()
    })
  })

  describe('When changing the input of the email field', () => {
    it('It should change the value email', () => {
      const { getByTestId } = render(component)
      const newTestValue = 'amaia@gmail.com'
      const input = getByTestId('input-email')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })
  })

  describe('When changing the input of the password field', () => {
    it('It should change the value password', () => {
      const { getByPlaceholderText } = render(component)
      const newTestValue = 'a1234567'
      const input = getByPlaceholderText('Password')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })

    describe('When pressing on SIGN IN with an invalid email', () => {
      it('It should call the alert with \'Please add a valid email\' ', () => {
        const { getByTestId, getByPlaceholderText } = render(component)
        global.alert = jest.fn()
        const email = 'amaiagmail.com'
        const password = 'a1234567'
        const inputEmail = getByTestId('input-email')
        const inputPassword = getByPlaceholderText('Password')
        fireEvent.changeText(inputEmail, email)
        fireEvent.changeText(inputPassword, password)
        fireEvent.press(getByTestId('valid-input'))
        expect(global.alert).toHaveBeenCalledWith('Please add a valid email')
      })
    })

    describe('When pressing on SIGN IN with an invalid password', () => {
      it('It should call the alert with \'Please add a valid password! Minimum of 8 characters and at least one letter\' ', () => {
        const { getByTestId, getByPlaceholderText } = render(component)
        global.alert = jest.fn()
        const email = 'amaia@gmail.com'
        const password = '34567'
        const inputEmail = getByTestId('input-email')
        const inputPassword = getByPlaceholderText('Password')
        fireEvent.changeText(inputEmail, email)
        fireEvent.changeText(inputPassword, password)
        fireEvent.press(getByTestId('valid-input'))
        expect(global.alert).toHaveBeenCalledWith('Please add a valid password! Minimum of 8 characters and at least one letter')
      })
    })
    describe('When pressing on SIGN IN with a valid password and email', () => {
      it('It should call userLogin', () => {
        const { getByTestId, getByPlaceholderText } = render(component)
        const email = 'amaia@gmail.com'
        const password = 'a1234567'
        const inputEmail = getByTestId('input-email')
        const inputPassword = getByPlaceholderText('Password')
        fireEvent.changeText(inputEmail, email)
        fireEvent.changeText(inputPassword, password)
        fireEvent.press(getByTestId('valid-input'))
        expect(action.userLogin).toHaveBeenCalled()
      })

      it('It should call navigation.navigate', () => {
        component = (
          <Provider store={mockStore({
            userReducer: {
              user: {
                email: 'amaia@gmail.com'
              }
            }
          })}><Login navigation={{ goBack, navigate }}/></Provider>)
        render(component)
        expect(navigate).toHaveBeenCalled()
      })
    })
  })
})
