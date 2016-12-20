import Vue from 'vue';
import app from './components/app';

$(() => {
	new Vue({
		el: '#app',
		template: '<app/>',
		components: {
			app
		}
	});
});