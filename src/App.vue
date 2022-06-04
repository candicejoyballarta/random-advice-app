<template>
	<main>
		<div class="advice-box">
			<p>
				ADVICE #<span class="advice_id">{{ advice_id }}</span>
			</p>
			<h1 class="advice_text">{{ advice }}</h1>
			<div class="advice__pattern"></div>
			<button type="button" v-on:click="getRandomAdvice"></button>
		</div>
	</main>
	<footer>
		<p>
			Solution by
			<a href="https://github.com/candicejoyballarta">Candice Ballarta</a>
		</p>
	</footer>
</template>

<script>
import { getRandomAdvice } from './services/AdviceService';

export default {
	name: 'app',
	data() {
		return {
			advice_id: 0,
			advice: '',
			error: '',
		};
	},
	methods: {
		getRandomAdvice() {
			getRandomAdvice().then((res) => {
				this.advice = res.slip.advice;
				this.advice_id = res.slip.id;
			});
		},
	},
	mounted() {
		this.getRandomAdvice();
	},
};
</script>
