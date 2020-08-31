import React from 'react';
import T from 'prop-types';
import { useDispatch } from 'react-redux';

const WebProvider = ({ children }) => {
	const dispatch = useDispatch();
	const handleData = (e) => {
		dispatch(e.detail);
	};

	React.useEffect(() => {
		window.addEventListener('nativeData', handleData, false);

		return () => {
			window.removeEventListener('nativeData', handleData, false);
		};
	}, []);

	return <React.Fragment>{children}</React.Fragment>;
};

WebProvider.propTypes = {
	children: T.node.isRequired
};

export default WebProvider;
