import axios from 'axios';

export async function getRandomAdvice() {
	const response = await axios.get('https://api.adviceslip.com/advice');
	return response.data;
}
