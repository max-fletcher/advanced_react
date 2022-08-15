import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

// Short circuits work similar to v-if.
// The || works like v-if and v-else that doesn't rely on an external variable as condition(i.e the variable itself is shown if it isn't null/undefined/false etc.)
// The && works like v-if without the v-else.
// Ternary operation works like v-if and v-else that relies on an external variable as condition


const ShortCircuit = () => {
	const [text1, settext1] = useState('')
	const firstValue1 = text1 || 'hello world 1';
	const secondValue1 = text1 && 'hello world 2';

	const [text2, settext2] = useState('dummy text')
	const firstValue2 = text2 || 'hello world 3';
	const secondValue2 = text2 && 'hello world 4';

	const [isError, setIsError] = useState(true)
	const [isError2, setIsError2] = useState(true)

	const toggleShow = () => {
		setIsError(!isError)
	}

	const toggleElements = () => {
		setIsError2(!isError2)
	}

	return (
		<>
			<h2>Short Circuit</h2>

			<h3>Text 1</h3>
			{/* will be shown since [ text1 || 'hello world 1' ] renders to true */}
			<h4>value: {firstValue1}</h4>
			{/* will not be shown since [ text1 && 'hello world 2' ] renders to false */}
			<h4>value: {secondValue1}</h4>

			<h3>Text 2</h3>
			{/* will be shown since [ text2 && 'hello world 3' ] renders to true */}
			<h4>value: {firstValue2}</h4>
			{/* will be shown since [ text2 && 'hello world 4' ] renders to false */}
			<h4>value: {secondValue2}</h4>

			<h3>Text 3(Same logic as before)</h3>
			{/* will be shown since [ text1 || 'hello world 1' ] renders to true */}
			<h4>value: {text1 || 'hello world 1'}</h4>
			{/* will not be shown since [ text1 && 'hello world 2' ] renders to false */}
			<h4>value: {text1 && 'hello world 2'}</h4>

			<h3>Text 4(Same logic as before)</h3>
			{/* will be shown since [ text2 && 'hello world 3' ] renders to true */}
			<h4>value: {text2 && 'hello world 3'}</h4>
			{/* will be shown since [ text2 && 'hello world 4' ] renders to false */}
			<h4>value: {text2 && 'hello world 4'}</h4>

			<h3>Text 5(Same logic as before)</h3>
			{/* will show '<h1> hello world 5 </h1>' since [ {text1 || <h1> hello world 5 </h1>} ] renders to true */}
			value: {text1 || <h4> hello world 5 </h4>}
			{/* will not show anything show since [ {text1 || <h1> hello world 6 </h1>} ] renders to false */}
			value: {text1 && <h4> hello world 6 </h4>}

			<h3>Text 6(Same logic as before)</h3>
			{/* will not show anything show since [ {!text1 || <h1> hello world 5 </h1>} ] renders to false */}
			value: {!text1 || <h4> hello world 5 </h4>}
			{/* will show '<h1> hello world 5 </h1>' since [ {!text1 || <h1> hello world 6 </h1>} ] renders to true */}
			value: {!text1 && <h4> hello world 6 </h4>}

			<h2>Short Circuit To toggle show/hide a block of text</h2>
			<button className="btn" onClick={ ()=> { toggleShow() } }>Toggle Button</button>
			{isError && <h3> Hello from show/hide </h3>}

			<h2>Short Circuit using ternary operator to toggle between 2 elements</h2>
			<button className="btn" onClick={ ()=> { toggleElements() } }>Toggle Button</button>
			{isError2 ? <h3> Hello from Ternary </h3> : <h3> Hello from Ternary But Different Bruh </h3>}
		</>
	)
};

export default ShortCircuit;
