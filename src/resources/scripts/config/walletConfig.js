
const WalletConfig = () => {
	let inputValues = [
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
	];

	const randomizeAmount = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}

	for(var i=0; i < inputValues.length; i++){
		inputValues[i]['qty'] =  randomizeAmount(2,9);
	}

	return inputValues
}

export default WalletConfig;
