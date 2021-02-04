<template>
  <v-form>
    <h4>Maintenance</h4>
    <v-container>
      <v-row>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-card outlined>
            <v-card-title>Island</v-card-title>
            <v-container>
              <v-col>
                <v-text-field label="Island" outlined></v-text-field>
                <v-btn block color="error">Save</v-btn>
              </v-col>
            </v-container>
          </v-card>
        </v-col>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-card outlined>
            <v-card-title>Province</v-card-title>
            <v-container>
              <v-col>
                <v-text-field label="Province" outlined>
                </v-text-field>
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
              <v-btn color="error" block>Save</v-btn>
            </v-container>
          </v-card>
        </v-col>

        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
            <v-card outlined>
               <v-card-title>
                City
              </v-card-title>
              <v-container>
              <v-col>
                <v-text-field label="City" outlined></v-text-field>
                 <v-select
                v-model="City"
                :items="Cities"
                item-text="City"
                item-value="id"
                label="City"
                persistent-hint
                return-object
                outlined
              ></v-select>
              </v-col>
              <v-btn  color="error" block>Save</v-btn>
              </v-container>
            </v-card>
        </v-col>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-card>
            <v-card-title>
              Municipal/Brgy
            </v-card-title>
            <v-container>
              <v-col>
                <v-text-field label="Municipal/Brgy" outlined></v-text-field>
                <v-select
                v-model="Brgy"
                :items="Brgys"
                item-text="Brgy"
                item-value="id"
                label="Municipal/Brgy"
                persistent-hint
                return-object
                outlined
              ></v-select>
              </v-col>
              <v-btn color="error" block>Save</v-btn>
            </v-container>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    Province: { id: "", Province: "" },
    Provinces: [
      { id: "1", Province: "South Cotabato" },
      { id: "2", Province: "Alibay" },
      { id: "3", Province: "Secret" },
    ],
    Island: { id: "", Island: "" },
    Islands: [
      { id: "1", Island: "Cebu" },
      { id: "2", Island: "Glan" },
      { id: "3", Island: "Bohol" },
    ],
    City: { id: "", City: "" },
    Cities: [
      { id: "1", City: "Gensan" },
      { id: "2", City: "Marbel" },
      { id: "3", City: "Poland" },
    ],
    Brgy: { id: "", Brgy: "" },
    Brgys: [
      { id: "1", Brgy: "San Isidro" },
      { id: "2", Brgy: "Cannery Site" },
      { id: "3", Brgy: "Lagao" },
    ],
  }),
};
</script>

<style>
</style>