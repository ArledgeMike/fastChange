import React from 'react';

const NumberInput = ({ onChange, inputType }) => {
	return (
		<div className="field field--step" id="numberInputOne">
			<label className="field__label">QTY:</label>
			<div className="field__input">
				<input data-inputType={inputType} onChange={onChange} type="number" name="numberInput" />
			</div>
		</div>
	);
}

export default NumberInput;
