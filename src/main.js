import App from './App.svelte'
import './App.svelte'


const app = new App({
	target: document.body,
	props: {
		activeapp: true,
		colors: {
			red: 'blue',
		},
	},
})

window.app = app

export default app
