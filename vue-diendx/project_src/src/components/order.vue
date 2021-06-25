<template>
	<div class="container">
		<div class="recipe-container">
			<div class="description">
				<p>Trà sữa là loại thức uống đa dạng được tìm thấy ở nhiều nền văn hóa, bao gồm một vài cách kết hợp giữa trà và sữa! </p>
				
				<figure>
					<router-link to=""> <img src="https://tocotocotea.com/wp-content/uploads/2021/05/sua-chua-dau-tam-hoang-kim.png"> </router-link>
					<figcaption>Photo in Internet</figcaption>
				</figure>
			</div>
			<div id="example-1">
				<button v-on:click="counter -= 1"> Add - 1</button>
				<br>
				<button v-on:click="counter += 1"> Add + 1</button>
			</div>
			<p> Bạn đã đặt {{ counter }} sản phẩm.</p>
			<p> Số tiền phải trả là {{ money * counter }} Coin.</p>
			<button> <router-link :to="{name:'confirm', params: {  money: money * counter, id: counter}}"> Xác nhận </router-link> </button>
			
			<div class="paa">
				My name is <input v-model="amount">
			</div>	

		</div>
	</div>
</template>

<script lang="ts">
import { createDecorator } from 'vue-class-component';
	export default  {
	name: 'order',
		data() {
			return {
				counter: 1,
				money: 17,
				amount: 0,
			};
	
	}

}
import { Vue } from 'vue-property-decorator';
const paa = new Vue ({
	el:'paa',
	data:{
		name:''
	},
	mounted() {
		if(localStorage.amount) this.name = localStorage.amount;
	},
	watch:{
		name(newAmount) {
		localStorage.amount= newAmount;
		}
	}
})

</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap");

*,
*::before,
*::after {
	box-sizing: border-box;           
}

body {
	font-family: "Baloo Tammudu 2", cursive;
	font-size: 1.2rem;
	line-height: 1.5rem;
}

figure {
	margin: 0;
	padding: 5%;
}
.description img {
	width: 50%;
}
.main-photo img {
	border-radius: 2px;
	width: 100%;
	height: auto;
}

h1 {
	text-align: center;
	line-height: 3rem;
}

ul li,
ol li {
	margin: 1rem 0;
}

.container {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		"main-photo"
		"recipe";
	column-gap: 2rem;
	margin: 1rem;
	background: #fff;
	box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
	padding: 1rem;
}

.main-photo {
	grid-area: main-photo;
}

.recipe-container {
	grid-area: recipe;
}

@media (min-width: 992px) {
	.container {
		margin: 10px auto;
		max-width: 980px;
		grid-template-rows: 1fr;
		padding: 3rem;
	}
}
#example-1 {
	widows: 50%;
	display: flex;
	justify-content: center;
	padding-bottom: 3%;
	}
#example-1 > button:nth-child(3) {
margin-left: 5%;
}

</style>