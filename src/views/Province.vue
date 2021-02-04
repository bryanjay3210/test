<template>
  <v-form>
      <v-container>
          <v-row>
              <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
                     <v-select
            v-model="Island"
            :items="Islands"
            item-text="Island"
            item-value="id"
            label="Island"
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
data: () => 
({
    Island: { id: "", Island: ""},
    Islands: [
        {id: "1", Island: "Cebu"},
        {id: "2", Island: "Glan"},
        {id: "3", Island: "Bohol"},
    ],
}),
}
</script>
