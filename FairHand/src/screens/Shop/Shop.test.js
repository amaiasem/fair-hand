import React from 'react'
import { Provider } from 'react-redux'
import { Linking } from 'react-native'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import DATA from '../../../constants/DATA'
import REVIEWS from '../../../constants/REVIEWS.ts'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
import Shop from './Shop.tsx'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore([])
jest.spyOn(action, 'getReviewsByShopName').mockReturnValue({ type: '' })

describe('Given a component Shop', () => {
  let store
  let component
  let navigate
  let goBack
  let params

  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: DATA, shop: DATA[0], filteredShops: DATA },
      reviewReducer: { reviews: REVIEWS }
    })
    navigate = jest.fn()
    goBack = jest.fn()
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
        <Shop route={{ params }} navigation={{ goBack, navigate }}/>
      </Provider>
    )
  })

  afterEach(() => cleanup())

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing a goBack button', () => {
    it('It should call navigation.goBack', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('go-back'))
      expect(goBack).toHaveBeenCalled()
    })
  })

  describe('When pressing on the shop website', () => {
    it('It should call Linking.openURL', () => {
      const { getByTestId } = render(component)
      const spy = jest.spyOn(Linking, 'openURL')
      fireEvent.press(getByTestId('shop-website'))
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('When pressing the phone button', () => {
    it('It should call Linking.openURL', () => {
      const { getByTestId } = render(component)
      const spy = jest.spyOn(Linking, 'openURL')
      fireEvent.press(getByTestId('shop-phone'))
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('When pressing the add review button', () => {
    it('It should call navigation.navigate', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('navigate-review'))
      expect(navigate).toHaveBeenCalled()
    })
  })

  describe('When the shop has new items', () => {
    it('The flatlist should not be truthy', () => {
      const { getByTestId } = render(component)
      expect(getByTestId('list-products')).toBeTruthy()
    })
  })

  describe('When pressing on the See on the website button', () => {
    it('It should call Linking.openURL', () => {
      const { getAllByTestId } = render(component)
      const spy = jest.spyOn(Linking, 'openURL')
      fireEvent.press(getAllByTestId('product-website')[0])
      expect(spy).toHaveBeenCalled()
    })
  })
})
