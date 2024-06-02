import React, { useState } from 'react';
import AddMoneySection from './components/addMoneySection';
import RemoveMoneySection from './components/removeMoneySection';
import MakeChangeSection from './components/makeChangeSection';
import ErrorInfoSection from './components/errorInfoSection';

const App = () => {
	const inputValues = [
		{
			label: 'Twenties',
			value: 20
		},
		{
			label: 'Tens',
			value: 10
		},
		{
			label: 'Fives',
			value: 5
		},
		{
			label: 'Twos',
			value: 2
		},
		{
			label: 'Singles',
			value: 1
		}
	]
	const intialCashonHand = {
		20: 10,
		10: 10,
		5: 5,
		2: 5,
		1: 30
	};

	const [register, setRegister] = useState(intialCashonHand);
	const [moneyAdd, insertMoney] = useState({
		denomination: 0,
		qty: 0

	});

	const [moneyRemove, takeMoney] = useState({
		denomination: 0,
		qty: 0
	});

	const [moneyChange, changeMoney] = useState({
		qty: 0
	});

	const [error, setError] = useState('');

	const calculateTotal = () => {
		return Object.keys(register).reduce((total, bill) => total + bill * register[bill], 0);
	};

	const formatRegister = () => {
		return Object.entries(register)
			.map(([bill, count]) => `$${bill}x${count}`)
			.join(' ');
	};

	const addMoney = (denomination, count) => {
		if(count <= 0 || denomination === 0){return false}
		setRegister(prevRegister => ({
			...prevRegister,
			[denomination]: prevRegister[denomination] + count
		}));
	};

	const removeMoney = (denomination, count) => {
		if(count <= 0 || denomination === 0){return false}
		if (register[denomination] >= count) {
			setRegister(prevRegister => ({
				...prevRegister,
				[denomination]: prevRegister[denomination] - count
			}));
		} else {
			setError(`Not enough $${denomination} bills to remove`);
		}
	};

	const makeChange = amount => {
		if(amount === 0){return false};
		const denominations = [20, 10, 5, 2, 1];
		let remaining = amount;
		let change = {};
		let newRegister = { ...register };
		for (let bill of denominations) {
			let count = Math.min(Math.floor(remaining / bill), newRegister[bill]);
			if (count > 0) {
				change[bill] = count;
				remaining -= count * bill;
				newRegister[bill] -= count;
			}
		}

		if (remaining === 0) {
			setRegister(newRegister);
			setError('');
			alert(`Change: ${formatChange(change)}`);
		} else {
			setError('Sorry, cannot make change');
		}
	};

	const radioChange = (event) => {
		const inputType = event.target.dataset.inputtype;
		const inputValue = event.target.value;

		if (inputType === 'addDenom') {
			insertMoney({ denomination: inputValue, qty: moneyAdd.qty })
		}
		if (inputType === 'addQty') {
			insertMoney({ denomination: Number(moneyAdd.denomination), qty: Number(inputValue) })
		}
		if (inputType === 'removeDenom') {
			takeMoney({ denomination: inputValue, qty: moneyRemove.qty });
		}
		if (inputType === 'removeQty') {
			takeMoney({ denomination: Number(moneyRemove.denomination), qty: Number(inputValue) });
		}
		if (inputType === 'change') {
			changeMoney({ qty: Number(inputValue) });
		}
	}

	const formatChange = (change) => {
		return Object.entries(change)
			.map(([bill, count]) => `${bill} x ${count}`)
			.join(' ');
	};

	return (
		<div className='topiary__container'>
			<h2>Can I Make Change For You?</h2>
			<div>
				<h3>Total: ${calculateTotal()}</h3>
				<h4>{formatRegister()}</h4>
				<AddMoneySection onChange={radioChange} onAddMoney={addMoney} addMoneyValues={moneyAdd} inputValues={inputValues} />
				<RemoveMoneySection onChange={radioChange} onRemoveMoney={removeMoney} removeMoneyValues={moneyRemove} inputValues={inputValues} />
				<MakeChangeSection onChange={radioChange} onMakeChange={makeChange} makeChangeValues={moneyChange} />
			</div>
			<div>
			</div>
			<ErrorInfoSection error={error}/>
		</div>

	);
}

export default App;
