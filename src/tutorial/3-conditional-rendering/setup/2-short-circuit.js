import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text1, settext1] = useState('')
	const firstValue1 = text1 || 'hello world 1';
	const secondValue1 = text1 && 'hello world 2';

	const [text2, settext2] = useState('dummy text')
	const firstValue2 = text2 || 'hello world 3';
	const secondValue2 = text2 && 'hello world 4';

	return (
		<>
			<h2>short circuit</h2>

			<h3>Text 1</h3>
			<h4>{firstValue1}</h4>
			<h4>{secondValue1}</h4>

			<h3>Text 2</h3>
			<h4>{firstValue2}</h4>
			<h4>{secondValue2}</h4>
		</>
	)
};

export default ShortCircuit;
