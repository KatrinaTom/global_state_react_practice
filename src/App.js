import React, { useReducer, useEffect } from 'react'
import MessageField from './MessageField'
import MessageCard from './MessageCard'
import ColourChoicePanel from './ColourChoicePanel'
import { Heading } from './Styled'
import { getJoke } from './utils/Services'
import { StateContext } from './utils/stateContext'
import reducer from './utils/stateReducer'

const App = () => {

	const initialState = {
		message: '', 
		textColour: '#000000',
		cardColour: '#ffffff'
	}

	const [store, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		getJoke((message) => dispatch({type: 'setMessage', data: message}))
	}, [])

	
  return (
    <div>
		<StateContext.Provider value={{ store, dispatch }}>
			<Heading>Colour Tester</Heading>
			<MessageField />
			<MessageCard />
			<ColourChoicePanel />
		</StateContext.Provider>
    </div>
  )
}

export default App
