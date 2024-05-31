import React from 'react';
import NumberInput from './numberInput';

const MakeChangeSection = ({ onChange, onMakeChange, makeChangeValues }) => {
	const makeChangeSectionConfig = {
		inputType: "change",
	}

	return (
		<section className="topiary__container topiary__container--makeChangeSection">
			<div className="field field--step">
				<h4>Make Change:</h4>
				<NumberInput onChange={onChange} inputType={makeChangeSectionConfig.inputType} />
				<button className="submitBtn" onClick={() => onMakeChange(makeChangeValues.qty)}>Make Change</button>
			</div>
		</section>
	);
}

export default MakeChangeSection;
