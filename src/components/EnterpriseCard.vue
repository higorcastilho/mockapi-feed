<template>
  <div class="card-wrapper">
    <h1>{{enterprise.id}}</h1>
    <img :src="enterprise.image" />
  </div>
</template>

<script>
export default {
  name: 'EnterpriseCard',
  props: {
    enterprise: {
			type: Object,
			required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		color: green;
	}
	h2 {
		color: black;
	}

	.card-wrapper {
		background: pink;
	}

</style>
