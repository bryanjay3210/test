<template>
  <v-form>
      <v-container>
          <v-row>
              <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
                <v-select
            v-model="Province"
            :items="Provinces"
            item-text="Province"
            item-value="id"
            label="Province"
            persistent-hint
            return-object
            outlined
          ></v-select>
              </v-col>
          </v-row>
      </v-container>
  </v-form>
</template>

<script>
export default {
data: () => ({
    Province: { id: "", Province: ""},
    Provinces: [
        {id: "1", Province: "South Cotabato"},
        {id: "2", Province: "Alibay"},
        {id: "3", Province: "Secret"},
        ],
}),
}
</script>