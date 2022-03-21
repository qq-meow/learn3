<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		type: {
			type: String,
			default: 'normal'
		}
	},
	computed: {
		tag() {
			switch (this.type) {
			case 'success':
				return 1;
			case 'danger':
				return 2;
			case 'warning':
				return 3;
			default:
				return 1;
			}
		}
	},
	render(h) {
		return h('div', {
			class: {
				btn: true,
				'btn-success': this.type === 'success',
				'btn-danger': this.type === 'danger',
				'btn-warning': this.type === 'warning'
			},
			domProps: {
				innerText: this.text
			},
			on: {
				click: this.handleClick
			}
		});
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	methods: {
		handleClick () {
			
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
