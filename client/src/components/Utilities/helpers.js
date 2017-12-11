const SUBSCRIPTIONS_LIST = 'subscriptionslist';

function getFromLocalStorage(key){
	return window.localStorage.getItem(key);
};

function setLocalStorage(key, value){
	return window.localStorage.setItem(key, value);
};

const getSubscriptionsList = () =>{
	const key = SUBSCRIPTIONS_LIST;
		let subscriptions = getFromLocalStorage(key);
		if(subscriptions){
			subscriptions = JSON.parse(subscriptions);
		}
		return subscriptions || [];
};
const setSubscriptionsList = (value) =>{
	const key = SUBSCRIPTIONS_LIST;
	if(!Array.isArray(value)){
		throw new Error("setSubscriptionsList: value is not an array"); 
	}
	value = JSON.stringify(value)
	setLocalStorage(key, value);
};

export const getSubscriptions = () => {return getSubscriptionsList()};

export const setSubscriptions = (value) => {return setSubscriptionsList(value)};