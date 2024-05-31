import React from 'react';
import RadioInput from './radioInput';
import NumberInput from './numberInput';

const RemoveMoneySection = ({ onChange, onRemoveMoney, removeMoneyValues, inputValues }) => {
	const removeMoneyGroupConfig = {
		inputType: "removeDenom",
		inputGroup: 1,
		inputValues
	};

	return (
		<section className="topiary__container topiary__container--removeMoneySection">
			<h4>Remove Money:</h4>
			<div className="field field--radio">
				<div className="field__input field__input--radio-group">
					{removeMoneyGroupConfig.inputValues.map(function (x, i) {
						return <RadioInput key={`${removeMoneyGroupConfig.inputType}_${i}`} radioGroup={removeMoneyGroupConfig.inputGroup} inputType={removeMoneyGroupConfig.inputType} index={i} onChange={onChange} inputValues={removeMoneyGroupConfig.inputValues[i]} />;
					})}
				</div>
				<NumberInput onChange={onChange} inputType="removeQty" />
				<button className="submitBtn" onClick={() => onRemoveMoney(removeMoneyValues.denomination, removeMoneyValues.qty)}>Remove Money</button>
			</div>
		</section>
	);
}

export default RemoveMoneySection;
