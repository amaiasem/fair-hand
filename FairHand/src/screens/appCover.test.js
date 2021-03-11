import React from 'react'
import AppCover from './appCover'
import renderer from 'react-test-renderer'

describe('Given a component appCover', () => {
  test('Then should have three child', () => {
    const cover = renderer.create(<AppCover/>).toJSON()
    expect(cover.children.length).toBe(3)
  })

  test('Then should render correctly', () => {
    const cover = renderer.create(<AppCover/>).toJSON()
    expect(cover).toMatchSnapshot()
  })
})
