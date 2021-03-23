import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
import AddReview from './AddReview.tsx'
import mockUser from '../../../constants/mockUser.ts'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore([])
jest.spyOn(action, 'addReview').mockReturnValue({ type: '' })

describe('Given a function AddReview', () => {
  let store
  let component
  let navigate
  let goBack
  let params

  beforeEach(() => {
    store = mockStore({
      userReducer: { user: mockUser },
      reviewReducer: { reviews: [] }
    })

    navigate = jest.fn()
    goBack = jest.fn()
    global.alert = jest.fn()
    params = {
      item: {
        _id: '343junx3dr2u',
        shopName: 'Brava Fabrics',
        address: 'Parlament, 25 08015 Barcelona',
        latlong: {
          lat: 41.376440,
          long: 2.162350
        },
        schedule: 'Monday to Saturday 11h - 21h',
        website: 'https://bravafabrics.com/',
        phone: 931277197,
        coverImage: 'https://cdn.shopify.com/s/files/1/0043/0804/1831/files/cartela-web-EN_fdb23f61-d5dc-49e0-98f3-71fdb8298b3e_2000x.jpg?v=1614686668',
        logoImage: 'https://cdn.domestika.org/c_fill,dpr_auto,h_256,t_base_params.format_jpg,w_256/v1465550784/avatars/000/244/363/244363-original.png?1465550784',
        type: ['clothes'],
        NewIn: [
          {
            productName: 'INKA GOLD PANTS',
            productImage: 'https://cdn.shopify.com/s/files/1/0043/0804/1831/products/2059_image_4_5_front_2000x2500_crop_center.jpg?v=1614824553',
            price: 119.90,
            url: 'https://bravafabrics.com/products/inka-gold-pants'
          },
          {
            productName: 'MAI MAJOLICA DRESS',
            productImage: 'https://cdn.shopify.com/s/files/1/0043/0804/1831/products/2106_image_4_5_front_b95091e0-8724-4968-ba43-e1bfa00fe416_2000x2500_crop_center.jpg?v=1614789159',
            price: 99.90,
            url: 'https://bravafabrics.com/products/mai-majolica-dress'
          },
          {
            productName: 'ALL NDEBELE SHIRT',
            productImage: 'https://cdn.shopify.com/s/files/1/0043/0804/1831/products/2006_image_4_5_front_28251a9e-1eb1-4b43-a8d8-b271966def02_2000x2500_crop_center.jpg?v=1614793112',
            price: 74.90,
            url: 'https://bravafabrics.com/products/all-ndebele-shirt'
          }
        ]
      }
    }

    component = (
        <Provider store={store}>
            <AddReview route={{ params }} navigation={{ goBack, navigate }}></AddReview>
        </Provider>
    )
  })

  afterEach(() => cleanup())

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing on the back button', () => {
    it('It should call navigation.goBack', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('go-back'))
      expect(goBack).toHaveBeenCalled()
    })
  })

  describe('When changing the review input field', () => {
    it('It should change the review value', () => {
      const { getByPlaceholderText } = render(component)
      const reviewInput = 'I love this shop'
      const changeInput = getByPlaceholderText('What would you like to share?')
      fireEvent.changeText(changeInput, reviewInput)
      expect(changeInput.props.value).toBe(reviewInput)
    })
  })

  describe('When pressing on submit review with a valid input', () => {
    it('It should call the alert', () => {
      const { getByTestId, getByPlaceholderText } = render(component)
      const reviewInput = 'I love this shop'
      const changeInput = getByPlaceholderText('What would you like to share?')
      fireEvent.changeText(changeInput, reviewInput)
      fireEvent.press(getByTestId('create-review'))
      expect(global.alert).toHaveBeenCalled()
    })
  })

  describe('When pressing on submit review with a valid input', () => {
    it('It should call navigation.navigate', () => {
      const { getByTestId, getByPlaceholderText } = render(component)
      const reviewInput = 'I love this shop'
      const changeInput = getByPlaceholderText('What would you like to share?')
      fireEvent.changeText(changeInput, reviewInput)
      fireEvent.press(getByTestId('create-review'))
      expect(navigate).toHaveBeenCalled()
    })
  })
})

describe('When pressing on submit review with a valid input', () => {
  let store
  let component
  let navigate
  let goBack
  let params

  beforeEach(() => {
    store = mockStore({
      userReducer: {
        user: {
          _id: '604f3dcafcd75136b496ec65',
          name: 'Amaia Semper',
          surname: '',
          email: 'amaia@gmail.com',
          password: 'ahg56',
          image: '',
          address: 'Travessera de les Corts, Barcelona',
          myFavourites: [
            {
              shopId: '6046ab3fb9f8122550ebebc9'
            }
          ]
        }
      },
      reviewReducer: { reviews: [] }
    })

    navigate = jest.fn()
    goBack = jest.fn()
    global.alert = jest.fn()
    params = {
      item: {
        _id: '343junx3dr2u',
        shopName: 'Brava Fabrics',
        address: 'Parlament, 25 08015 Barcelona',
        latlong: {
          lat: 41.376440,
          long: 2.162350
        },
        schedule: 'Monday to Saturday 11h - 21h',
        website: 'https://bravafabrics.com/',
        phone: 931277197,
        coverImage: 'https://cdn.shopify.com/s/files/1/0043/0804/1831/files/cartela-web-EN_fdb23f61-d5dc-49e0-98f3-71fdb8298b3e_2000x.jpg?v=1614686668',
        logoImage: 'https://cdn.domestika.org/c_fill,dpr_auto,h_256,t_base_params.format_jpg,w_256/v1465550784/avatars/000/244/363/244363-original.png?1465550784',
        type: ['clothes'],
        NewIn: [
          {
            productName: 'INKA GOLD PANTS',
            productImage: 'https://cdn.shopify.com/s/files/1/0043/0804/1831/products/2059_image_4_5_front_2000x2500_crop_center.jpg?v=1614824553',
            price: 119.90,
            url: 'https://bravafabrics.com/products/inka-gold-pants'
          },
          {
            productName: 'MAI MAJOLICA DRESS',
            productImage: 'https://cdn.shopify.com/s/files/1/0043/0804/1831/products/2106_image_4_5_front_b95091e0-8724-4968-ba43-e1bfa00fe416_2000x2500_crop_center.jpg?v=1614789159',
            price: 99.90,
            url: 'https://bravafabrics.com/products/mai-majolica-dress'
          },
          {
            productName: 'ALL NDEBELE SHIRT',
            productImage: 'https://cdn.shopify.com/s/files/1/0043/0804/1831/products/2006_image_4_5_front_28251a9e-1eb1-4b43-a8d8-b271966def02_2000x2500_crop_center.jpg?v=1614793112',
            price: 74.90,
            url: 'https://bravafabrics.com/products/all-ndebele-shirt'
          }
        ]
      }
    }

    component = (
        <Provider store={store}>
            <AddReview route={{ params }} navigation={{ goBack, navigate }}></AddReview>
        </Provider>
    )
  })
  it('It should call navigation.navigate', () => {
    const { getByTestId, getByPlaceholderText } = render(component)
    const reviewInput = 'I love this shop'
    const changeInput = getByPlaceholderText('What would you like to share?')
    fireEvent.changeText(changeInput, reviewInput)
    fireEvent.press(getByTestId('create-review'))
    expect(navigate).toHaveBeenCalled()
  })
})
