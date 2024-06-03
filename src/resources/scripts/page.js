import React, { useState } from 'react';
import MakeChangeSection from './components/makeChangeSection';
import ErrorInfoSection from './components/errorInfoSection';
import EditWalletSection from './components/editWalletSection';

import WalletConfig from './config/walletConfig';

const App = () => {

	const initialWallet = new WalletConfig();

	const inputValues = [];
	for (const entry of initialWallet){
		const inputValue = {
			label: entry.label,
			value: entry.value
		};
		inputValues.push(inputValue);
	}

	let initialCashonHand = {};
	for (const entry of initialWallet) {
		initialCashonHand[entry.value] = entry.qty;
	}

	const [register, setRegister] = useState(initialCashonHand);

	const [editRegisterValues, setRegisterEditValues] = useState({
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
		if (count <= 0 || denomination === 0) { return false }
		setRegister(prevRegister => ({
			...prevRegister,
			[denomination]: prevRegister[denomination] + count
		}));
	};

	const removeMoney = (denomination, count) => {
		if (count <= 0 || denomination === 0) { return false }
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
		if (amount === 0) { return false };
		const denominations = [20, 10, 5, 2, 1];
		let remaining = amount;
		let change = {};
		for (let bill of denominations) {
			let count = Math.min(Math.floor(remaining / bill), register[bill]);
			if (count > 0) {
				change[bill] = count;
				remaining -= count * bill;
				register[bill] -= count;
			}
		}

		if (remaining === 0) {
			setError('');
			alert(`Change: ${formatChange(change)}`);
		} else {
			setError('Sorry, cannot make change');
		}
	};

	const inputChange = (event) => {
		const inputType = event.target.dataset.inputtype;
		const inputValue = event.target.value;
		if(inputType === 'denomination'){
			setRegisterEditValues((prevWallet)=>{
				return {
					denomination:  Number(inputValue),
					qty: prevWallet.qty ? Number(prevWallet.qty) : 0
				}
			});
		}
		if(inputType === 'quantity'){
			setRegisterEditValues((prevWallet)=>{
				return {
					denomination: Number(prevWallet.denomination),
					qty:  Number(inputValue)
				}
			});
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
				<EditWalletSection onChange={inputChange} onAddMoney={addMoney} onRemoveMoney={removeMoney}  editValues={editRegisterValues} inputValues={inputValues}  />
				<MakeChangeSection onChange={inputChange} onMakeChange={makeChange} makeChangeValues={moneyChange} />
			</div>
			<ErrorInfoSection error={error} />
		</div>

	);
}

export default App;
