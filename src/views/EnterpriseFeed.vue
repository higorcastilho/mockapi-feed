<template>
  <v-container>
    <enterprise-card
			v-for="item in enterpriseItems"
			:key="item.id"
			:enterprise="item"
    />
		<v-btn
			class="ma-2 mx-auto d-flex my-5"
			:loading="loading"
			:disabled="loading"
			color="primary"
			@click="loader"
		>
			Carregar mais
		</v-btn>
  </v-container>
</template>

<script>

import EnterpriseCard from '../components/EnterpriseCard'
import Http from '../utils/services/Http'
import dateFormatter from '../utils/helpers/dateFormatter'

export default {
  name: 'EnterpriseFeed',
  components: {
    EnterpriseCard
  },
	data () {
		return {
			enterpriseItems: [],
			limit: 3,
			loading: false
		}
  },
  methods: {
		async handleGetAPIData () {
			const endPoint = '/empreendimentos'
			return await Http.get(endPoint)
		},

		handleFormatDate (enterpriseList) {
			const newEnterpriseList = enterpriseList.map( item => {

				const { date, time } = dateFormatter(item)

				item = { ...item, createdAt: { date, time } }
				return item
			})

			return newEnterpriseList
		},

		loader () {
			this.loading = true
			setTimeout(async () => {

				this.limit += 3 
				const enterprisesList = await this.handleGetAPIData()
				const newEnterpriseList = this.handleFormatDate(enterprisesList)		
				this.enterpriseItems = [ ...newEnterpriseList ].slice(0, this.limit)
				this.loading = false

			}, 1000)
		}
  },	
  async mounted () {
		const enterprisesList = await this.handleGetAPIData()
		const newEnterpriseList = this.handleFormatDate(enterprisesList)
		this.enterpriseItems = [ ...newEnterpriseList ].slice(0, this.limit)
  }
}
</script>
