<template>
  <v-card 
    class="mx-auto my-4 px-3 py-2" 
    outlined 
    min-width="180" 
    max-width="600" 
  >
    <h2 class="mb-2 mx-5">{{enterprise.name}}</h2>
    <p class="mx-5">{{enterprise.createdAt.date}} às {{enterprise.createdAt.time}}</p>
    
    <v-list two-line class="mx-auto">
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{enterprise.phone}}</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{enterprise.address}}, nº{{enterprise.number}}</v-list-item-title>
          <v-list-item-subtitle>{{enterprise['zip-code']}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-text>
      <v-chip-group
        row
      >
        <v-chip>Lat: {{enterprise.lat}}</v-chip>
        <v-chip>Long: {{enterprise.long}}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
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
