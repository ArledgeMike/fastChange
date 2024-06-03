import React from 'react';
import RadioInput from './radioInput';
import NumberInput from './numberInput';

const EditWalletSection = ({ onChange, onAddMoney, editValues, inputValues, onRemoveMoney }) => {
	const editWalletSectionConfig = {
	    inputType: 'edit',
		inputGroup: 0,
		inputValues
	}

	return (
		<section className="topiary__container topiary__container--addMoneySection">
			<h4>Edit Wallet:</h4>
			<div className="field field--radio">
				<div className="field__input field__input--radio-group">
					{inputValues.map(function (x, i) {
						return <RadioInput key={`${editWalletSectionConfig.inputType}_${i}`} inputType="denomination" index={i} onChange={onChange} inputValues={editWalletSectionConfig.inputValues[i]} />;
					})}
				</div>
				<NumberInput onChange={onChange} inputType="quantity" />
				<button className="submitBtn" onClick={() => onAddMoney(editValues.denomination, editValues.qty)}>Add Money</button>
                <button className="submitBtn" onClick={() => onRemoveMoney(editValues.denomination, editValues.qty)}>Remove Money</button>
			</div>
		</section>
	);
}

export default EditWalletSection;
