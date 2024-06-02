import React from 'react';

const ErrorInfoSection = ({ error }) => {
	if(error === ''){return false};

	return (
		<p>{error}</p>
	);
}

export default ErrorInfoSection;
