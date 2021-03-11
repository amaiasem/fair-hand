import React from 'react'
import AppCover from './appCover'
import renderer from 'react-test-renderer'

describe('Given a component appCover', () => {
  test('Then should return a <TouchableOpacity>', () => {
    const cover = renderer.create(<AppCover/>).toJSON()
    expect(cover).toMatchSnapshot()
  })
})
