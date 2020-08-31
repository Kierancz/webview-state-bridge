const createEventDispatch = (data) =>
	`setTimeout(function() { 
		window.dispatchEvent(new CustomEvent('nativeData', { detail: ${JSON.stringify(data)} } ));
	}, 0);
    true;`;

const nativeMiddleware = () => (next) => (action) => {
	const result = next(action);

	if (window.wsbWebViewRef && !action.type.includes('webData')) {
		const webEventDispatch = createEventDispatch(action);
		window.wsbWebViewRef.injectJavaScript(webEventDispatch);
	}

	return result;
};

export default nativeMiddleware;
