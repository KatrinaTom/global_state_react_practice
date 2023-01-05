import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders Colour Tester', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Colour Tester/i);
  expect(linkElement).toBeInTheDocument();
});

describe('MessageField', () => {
	const message = 'Hey, friend'
	it('updates message card', () => {
		const {getByTestId} = render(<App />);
		const messageField = getByTestId('message-field')
		const messageCard = getByTestId('message-card')
		expect(messageField).toHaveValue('')
		userEvent.type(messageField, message)
		expect(messageField).toHaveValue(message)
		expect(messageCard).toHaveTextContent(message)
	}) 
 })

 describe('ColourChoicePanel', () => {
	 it('updates message card', () => {
		const {getByTestId} = render(<App />);
		const textColourSelector = getByTestId('text-colour')
		const cardColourSelector = getByTestId('card-colour')
		const messageCard = getByTestId('message-card')
		// set colour with 7 character hex string value 
		const textColour = '#ff0000'
		const cardColour = '#0000ff'
		// style.color will be in rgb format 
		const rgbTextColour = 'rgb(255, 0, 0)'
		const rgbCardColour = 'rgb(0, 0, 255)'
		fireEvent.change(textColourSelector,{target: {value: textColour}})
		fireEvent.change(cardColourSelector,{target: {value: cardColour}})
		expect(textColourSelector).toHaveValue(textColour)
		expect(cardColourSelector).toHaveValue(cardColour)
		expect(messageCard).toHaveStyle(`background-color: ${rgbCardColour}`)
		expect(messageCard).toHaveStyle(`color: ${rgbTextColour}`)
	 })
 })
 describe('App has mount effect', () => {
	it('runs an effect on mount', () => {
		const app = App.toString()
		expect(app).toMatch(/_react.useEffect/)
	})
 })