import React from 'react'
import renderer from 'react-test-renderer'
import User from './User'

describe('Given a component User', () => {
  test('Then should have two children', () => {
    const user = renderer.create(<User/>).toJSON()
    expect(user.children.length).toBe(2)
  })
  test('Then should render correctly', () => {
    const user = renderer.create(<User/>).toJSON()
    expect(user).toMatchSnapshot()
  })
})
