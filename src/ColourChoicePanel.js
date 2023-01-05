import React from 'react';
import {CenteredRow, Label} from './Styled'
import { useGlobalState } from './utils/stateContext'

const ColourChoicePanel = () => {
	const {store, dispatch} = useGlobalState()
	const {textColour, cardColour} = store

	function setTextColour(colour) {
		dispatch({type: 'setTextColour', data: colour})
	}

	function setCardColour(colour) {
		dispatch({type: 'setCardColour', data: colour})
	}


	function changeHandler(event) {
		const field = event.target.name
		const value = event.target.value
		field === 'text-colour' ? setTextColour(value) : setCardColour(value)
	}

	return (
		<CenteredRow>
			<Label>Text colour:</Label>	
			<input name='text-colour'
				data-testid='text-colour'
				type='color'	
				value={textColour}
                onChange={changeHandler}
			/>
			<Label>Card colour:</Label>	
			<input name='card-colour'
				data-testid='card-colour'
				type='color'	
				value={cardColour}
                onChange={changeHandler}
			/>
		</CenteredRow>
			
	);
}

export default ColourChoicePanel;
