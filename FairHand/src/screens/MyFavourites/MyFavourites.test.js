import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import MyFavourites from './MyFavourites.tsx'

describe('Given a component MyFavourites', () => {
  afterEach(cleanup)
  const goBack = jest.fn()
  const component = (
    <MyFavourites navigation={{ goBack }} />
  )

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing the back button', () => {
    it('It should call navigation.goBack', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('go-back'))
      expect(goBack).toHaveBeenCalled()
    })
  })
})
