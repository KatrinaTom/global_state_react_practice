import React from 'react';
import {CenteredRow, Card} from './Styled'
import { useGlobalState } from './utils/stateContext'

const MessageCard = () => {

	const {store} = useGlobalState()
	const {message, textColour, cardColour} = store
	
	return (
		<CenteredRow>
			<Card data-testid='message-card' bgColour={cardColour} colour={textColour}>
				{message}
			</Card>	
		</CenteredRow>
	);
}

export default MessageCard;
