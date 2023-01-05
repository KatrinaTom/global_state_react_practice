import styled from 'styled-components'

export const Heading = styled.h1 `
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2em;
	margin: 1em;
`

export const Label = styled.label `
	font-family: Arial, Helvetica, sans-serif;
	padding: .5em;
`

// This styled component takes the colours
// for the card content (background-color and color) a
// from the props if they are provided. 
// 
// The MessageCard component gets the values as props from App
// and passes them to this styled component for rendering
export const Card = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 20px;
	padding: 50px 5px;
	height: 100px;
	width: 80%;
	border: 1px black solid;
	background-color: ${props => props.bgColour ? props.bgColour : 'white'};
	color: ${props => props.colour ? props.colour : 'black'};
`
export const CenteredRow = styled.div `
	display: flex;
	justify-content: center;
`
export const Button = styled.button `
	padding: 5px;
	background-color: aqua;
	margin: 5px;
`

export const TextField = styled.input `
	padding: 5px;
	margin: 5px;
	height: 20px;
	width: 50%;
`