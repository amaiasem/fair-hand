import React from 'react'
import Shop from './Shop.tsx'
import renderer from 'react-test-renderer'

describe('Given a component Shop', () => {
  test('Then should have two children', () => {
    const shop = renderer.create(<Shop/>).toJSON()
    expect(shop.children.length).toBe(2)
    expect(shop).toMatchSnapshot()
  })

  test('Then should render correctlt', () => {
    const shop = renderer.create(<Shop/>).toJSON()
    expect(shop).toMatchSnapshot()
  })
})
