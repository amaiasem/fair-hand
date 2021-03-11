import React from 'react'
import renderer from 'react-test-renderer'
import Home from './Home.tsx'

describe('Given a component Home', () => {
  test('Then should have three children', () => {
    const home = renderer.create(<Home/>).toJSON()
    expect(home.children.length).toBe(3)
  })

  test('Then should render correctly', () => {
    const home = renderer.create(<Home/>).toJSON()
    expect(home).toMatchSnapshot()
  })
})
