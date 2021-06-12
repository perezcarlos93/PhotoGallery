import React, { useEffect } from 'react';
import Card from '../Components/Card';
import M from 'materialize-css';

const Homepage = () => {
	useEffect(() => {
		M.AutoInit();
	});
	return <Card />;
};

export default Homepage;
