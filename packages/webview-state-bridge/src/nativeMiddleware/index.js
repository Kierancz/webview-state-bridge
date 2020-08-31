/* eslint-disable no-undef */
const createEventDispatch = (data) =>
	`setTimeout(function() { 
		window.dispatchEvent(new CustomEvent('nativeData', { detail: ${JSON.stringify(data)} } ));
	}, 0);
    true;`;

const nativeMiddleware = () => (next) => (action) => {
	let result = next(action);

	if (window.bridgeRef && !action.type.includes('webData')) {
		const webEventDispatch = createEventDispatch(action);
		window.bridgeRef.injectJavaScript(webEventDispatch);
	}

	return result;
};

export default nativeMiddleware;
