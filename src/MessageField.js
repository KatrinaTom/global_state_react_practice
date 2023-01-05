import React from 'react';
import {Button, CenteredRow, TextField, Label} from './Styled'
import {getJoke} from './utils/Services'
import { useGlobalState } from './utils/stateContext'

const MessageField = () => {

	const {store, dispatch} = useGlobalState()
	const {message} = store

	function changeHandler(event) {
		setMessage(event.target.value)
	}

	function setMessage(message) {
		dispatch({type: 'setMessage', data: message})
	}

	function handleClick(event) {
		event.preventDefault()
		getJoke(setMessage)
	}

	return (
		<CenteredRow>
			<Button onClick={handleClick}>Surprise me</Button>
			<Label>Message:</Label>	
			<TextField data-testid='message-field' value={message} onChange={changeHandler}/>
		</CenteredRow>
	);
}

export default MessageField;
