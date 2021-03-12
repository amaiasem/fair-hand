import React from 'react'
import Header from './Header.tsx'
import renderer from 'react-test-renderer'

describe('Given a component Header', () => {
  test('Then should have onechild', () => {
    const header = renderer.create(<Header/>).toJSON()
    expect(header.children.length).toBe(1)
  })

  test('Then should render correctly', () => {
    const header = renderer.create(<Header/>).toJSON()
    expect(header).toMatchSnapshot()
  })
})
