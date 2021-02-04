<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar color="#B71C1C" dark>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-container>
          <v-form>
            <v-card-title> Religion Information </v-card-title>
            <v-row >
              <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3">
                <v-text-field
                  v-model="religion"
                  :rules="rules"
                  label="Religion"
                  outlined
                  
                ></v-text-field>
              </v-col>
              <v-col cols="10" xs="10" sm="4" md="4" lg="3" xl="3">
                <v-checkbox v-model="isactive" label="IsActive?"></v-checkbox>
              </v-col>
              <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3">
                <v-btn color="error" block @click="confirmed">Save</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    id: "",
    religion: "",
    isactive: "",
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 4 characters",
    ],
    // religions: [
    //   { religion: "Romantic Catholic", id: "1" },
    //   { religion: "Iglesia ni Cristo", id: "2" },
    //   { religion: "Saksi ni Jehova", id: "3" },
    //   { religion: "Adventist", id: "4" },
    //   { religion: "Born Again", id: "5" },
    // ],
  }),
  methods: {
    showModalReligion(form) {
      this.id = form.id, 
      this.religion = form.name, 
      this.isactive = form.isactive;
      this.dialog = true;
    },
    confirmed() {
      this.$emit("event");
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>