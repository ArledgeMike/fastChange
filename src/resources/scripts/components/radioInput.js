import React from 'react';

const radioInput = ({ onChange, index, inputType, inputValues }) => {
	return (
		<div className="field__input--radio">
			<input data-inputType={inputType} onChange={onChange} value={inputValues.value} id={`input_${inputType}-${index}`} name="radio1" type="radio" />
			<label className="field__label" htmlFor={`input_${inputType}-${index}`}>{inputValues.label}</label>
		</div>
	);
}

export default radioInput;
