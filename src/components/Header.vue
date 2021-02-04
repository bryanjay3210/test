<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-combobox
            v-model="module"
            :items="modules"
            item-text="module"
            item-value="id"
            label="Modules"
            persistent-hint
            outlined
          ></v-combobox>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <!-- <div>
  
    

    </v-combobox>
    <v-btn elevation="2" :to="{ name: 'home' }">home</v-btn>
    <v-btn elevation="2" :to="{ name: 'create' }">create</v-btn>
    <v-btn elevation="2" :to="{ name: 'gender' }">gender</v-btn>
    <v-btn elevation="2" :to="{ name: 'religion' }">religion</v-btn>
    <v-btn elevation="1" :to="{ name: 'bloodtype' }">bloodtype</v-btn>
    <v-btn elevation="1" :to="{ name: 'Island' }">Island</v-btn>
    <br />
    <br />
    <hr />
    <br />
  </div> -->
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    module: { id: "", module: "" },
    modules: [
      { id: "1", module: "Home", route: "home" },
      { id: "2", module: "Create", route: "create" },
      { id: "3", module: "Gender", route: "gender" },
      { id: "4", module: "Religion", route: "religion" },
      { id: "5", module: "Blood Type", route: "bloodtype"  },
      { id: "6", module: "Island", route: "Island" },
      { id: "7", module: "Area Maintenance", route: "areamaintenance" },
    ],
  }),

  watch: {
    module(data) {
      this.$router.push({ name: data.route });
    },
  },

};
</script>