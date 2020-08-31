const webMiddleware = () => (next) => (action) => {
	const result = next(action);
	if (!action.type.includes('nativeData')) {
		window.ReactNativeWebView.postMessage(JSON.stringify(action));
	}
	return result;
};

export default webMiddleware;
