import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import renderer from 'react-test-renderer'
import Register from './Register'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore()
jest.spyOn(action, 'userRegister').mockReturnValue({ type: '' })

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
    component = (<Provider store={store}><Register navigation={{ goBack, navigate }}/></Provider>)
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

  describe('When changing the input of the name field to Pablo', () => {
    it('It should change the value name to Pablo', () => {
      const { getByPlaceholderText } = render(component)
      const newNameValue = 'Pablo'
      const inputName = getByPlaceholderText('Name')
      fireEvent.changeText(inputName, newNameValue)
      expect(inputName.props.value).toBe(newNameValue)
    })
  })

  describe('When changing the input of the email to pablo@gmail.com', () => {
    it('It should change the value email to pablo@gmail.com', () => {
      const { getByPlaceholderText } = render(component)
      const newEmailValue = 'pablo@gmail.com'
      const inputEmail = getByPlaceholderText('Email')
      fireEvent.changeText(inputEmail, newEmailValue)
      expect(inputEmail.props.value).toBe(newEmailValue)
    })
  })

  describe('When changing the input of the password to a1234567', () => {
    it('It should change the value password to a1234567', () => {
      const { getByPlaceholderText } = render(component)
      const newPasswordValue = 'a1234567'
      const inputPassword = getByPlaceholderText('Password')
      fireEvent.changeText(inputPassword, newPasswordValue)
      expect(inputPassword.props.value).toBe(newPasswordValue)
    })
  })

  describe('When changing the input of the repeate password to a1234567', () => {
    it('It should change the value repeated password to a1234567', () => {
      const { getByPlaceholderText } = render(component)
      const newRepeatPasswordValue = 'a1234567'
      const inputRepeatPassword = getByPlaceholderText('Repeat password')
      fireEvent.changeText(inputRepeatPassword, newRepeatPasswordValue)
      expect(inputRepeatPassword.props.value).toBe(newRepeatPasswordValue)
    })
  })

  describe('When pressing on SUBMIT with an invalid email', () => {
    it('It should call the alert with \'Please add a valid email\' ', () => {
      const { getByTestId, getByPlaceholderText } = render(component)
      global.alert = jest.fn()
      const newNameValue = 'Pablo'
      const inputName = getByPlaceholderText('Name')
      fireEvent.changeText(inputName, newNameValue)
      const newEmailValue = 'pablomail.com'
      const inputEmail = getByPlaceholderText('Email')
      fireEvent.changeText(inputEmail, newEmailValue)
      const newPasswordValue = 'a1234567'
      const inputPassword = getByPlaceholderText('Password')
      fireEvent.changeText(inputPassword, newPasswordValue)
      const newRepeatPasswordValue = 'a1234567'
      const inputRepeatPassword = getByPlaceholderText('Repeat password')
      fireEvent.changeText(inputRepeatPassword, newRepeatPasswordValue)
      fireEvent.press(getByTestId('valid-input'))
      expect(global.alert).toHaveBeenCalledWith('Please add a valid email')
    })
  })

  describe('When pressing on SUBMIT with an invalid password', () => {
    it('It should call the alert with \'Please add a valid password! Minimum of 8 characters and at least one letter\' ', () => {
      const { getByTestId, getByPlaceholderText } = render(component)
      global.alert = jest.fn()
      const newNameValue = 'Pablo'
      const inputName = getByPlaceholderText('Name')
      fireEvent.changeText(inputName, newNameValue)
      const newEmailValue = 'pablo@gmail.com'
      const inputEmail = getByPlaceholderText('Email')
      fireEvent.changeText(inputEmail, newEmailValue)
      const newPasswordValue = '34567'
      const inputPassword = getByPlaceholderText('Password')
      fireEvent.changeText(inputPassword, newPasswordValue)
      const newRepeatPasswordValue = 'a1234567'
      const inputRepeatPassword = getByPlaceholderText('Repeat password')
      fireEvent.changeText(inputRepeatPassword, newRepeatPasswordValue)
      fireEvent.press(getByTestId('valid-input'))
      expect(global.alert).toHaveBeenCalledWith('Please add a valid password! Minimum of 8 characters and at least one letter')
    })
  })

  describe('When pressing on SUBMIT with valid inputs', () => {
    it('It should call the alert with \'Thank you for joining Fairhand!\' ', () => {
      const { getByTestId, getByPlaceholderText } = render(component)
      global.alert = jest.fn()
      const newNameValue = 'Pablo'
      const inputName = getByPlaceholderText('Name')
      fireEvent.changeText(inputName, newNameValue)
      const newEmailValue = 'pablo@gmail.com'
      const inputEmail = getByPlaceholderText('Email')
      fireEvent.changeText(inputEmail, newEmailValue)
      const newPasswordValue = 'a1234567'
      const inputPassword = getByPlaceholderText('Password')
      fireEvent.changeText(inputPassword, newPasswordValue)
      const newRepeatPasswordValue = 'a1234567'
      const inputRepeatPassword = getByPlaceholderText('Repeat password')
      fireEvent.changeText(inputRepeatPassword, newRepeatPasswordValue)
      fireEvent.press(getByTestId('valid-input'))
      expect(global.alert).toHaveBeenCalledWith('Thank you for joining Fairhand!')
    })

    it('It should call navigation.navigate', () => {
      component = (
        <Provider store={mockStore({
          userReducer: {
            user: {
              email: 'pablo@gmail.com'
            }
          }
        })}><Register navigation={{ goBack, navigate }}/></Provider>)
      render(component)
      expect(navigate).toHaveBeenCalledWith('TabNavigator')
    })
  })
})
