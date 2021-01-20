<template>
  <v-container>
    <enterprise-card
			v-for="item in enterpriseItems"
			:key="item.id"
			:enterprise="item"
    />
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
			enterpriseItems: []
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
		}
  },	
  async mounted () {
		const enterprisesList = await this.handleGetAPIData()
		const newEnterpriseList = this.handleFormatDate(enterprisesList)
		this.enterpriseItems = [ ...newEnterpriseList ]
  }
}
</script>
