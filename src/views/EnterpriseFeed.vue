<template>
  <div class="feed-wrapper">
    <enterprise-card
			v-for="item in enterpriseItems"
			:key="item.id"
			:enterprise="item"
    />
  </div>
</template>

<script>

import EnterpriseCard from '../components/EnterpriseCard'
import Http from '../utils/services/Http'
export default {
  name: 'EnterpriseFeed',
  components: {
    EnterpriseCard
  },
	data () {
		return {
			enterpriseItems: []
		}
  },
  methods: {
		async handleGetAPIData () {
			const endPoint = '/empreendimentos'
			return await Http.get(endPoint)
		}
  },	
  async mounted () {
		const enterprisesList = await this.handleGetAPIData()
		this.enterpriseItems = [...enterprisesList]
		console.log(this.enterpriseItems)
  }
}
</script>
<style scoped>
	.feed-wrapper {
		background: pink;
		width: 100vw;
		height: 100vh;
	}
</style>
