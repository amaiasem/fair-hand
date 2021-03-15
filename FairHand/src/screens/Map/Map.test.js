import React from 'react'
import renderer from 'react-test-renderer'
import Map from './Map.tsx'

describe('Given a component Header', () => {
  test('Then should have two children', () => {
    const map = renderer.create(<Map/>).toJSON()
    expect(map.children.length).toBe(2)
  })

  test('Then should render correctly', () => {
    const map = renderer.create(<Map/>).toJSON()
    expect(map).toMatchSnapshot()
  })
})
