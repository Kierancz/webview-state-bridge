import React from 'react';
import { useDispatch } from 'react-redux';
import T from 'prop-types';

const NativeProvider = ({ children }) => {
	const ref = (node) => {
		window.wsbWebViewRef = node;
	};
	const dispatch = useDispatch();
	const onMessage = (e) => {
		dispatch(JSON.parse(e.nativeEvent.data));
	};

	return React.cloneElement(children, { ref, onMessage });
};

NativeProvider.propTypes = {
	children: T.node.isRequired
};

export default NativeProvider;
