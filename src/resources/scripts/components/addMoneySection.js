import React from 'react';
import RadioInput from './radioInput';
import NumberInput from './numberInput';

const AddMoneySection = ({ onChange, onAddMoney, addMoneyValues, inputValues }) => {
	const addMoneyGroupConfig = {
		inputType: "addDenom",
		inputGroup: 0,
		inputValues
	}

	return (
		<section className="topiary__container topiary__container--addMoneySection">
			<h4>Add Money:</h4>
			<div className="field field--radio">
				<div className="field__input field__input--radio-group">
					{inputValues.map(function (x, i) {
						return <RadioInput key={`${addMoneyGroupConfig.inputType}_${i}`} inputType={addMoneyGroupConfig.inputType} index={i} onChange={onChange} inputValues={addMoneyGroupConfig.inputValues[i]} />;
					})}
				</div>
				<NumberInput onChange={onChange} inputType="addQty" />
				<button className="submitBtn" onClick={() => onAddMoney(addMoneyValues.denomination, addMoneyValues.qty)}>Add Money</button>
			</div>
		</section>
	);
}

export default AddMoneySection;
