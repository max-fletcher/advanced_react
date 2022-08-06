import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		console.log("useEffect");
		window.addEventListener("resize", checkSize);
      // This is a cleanup function. It can be used to cleanup some features before the component is unmounted. In this example, the checkSize event
      // listener is not dispersed when this component is unmounted which may cause memory leak/overflow. Using a removeEventListener fixes that issue.
      // This is especially a problem when the 2nd parameter for useEffect is not provided. However, a cleanup may still be required even when 2nd parameter
      // for useEffect is provided e.g when a component is conditionally rendered(i.e using if/else to make a component appear/disappear).
		return () => {
			console.log("CleanUp");
			window.removeEventListener("resize", checkSize);
		};
	});

	console.log("render", size);

	return (
		<>
			<h2>useEffect cleanup</h2>
			<h1>WIndow</h1>
			<h2>{size} px</h2>
		</>
	);
};

export default UseEffectCleanup;
