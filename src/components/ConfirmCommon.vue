<template>
  <v-row justify="center">
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

        <v-tabs v-model="tab"> <v-tab href="#conf">CONFIRMATION</v-tab></v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item :value="'conf'">
            <v-card class="mx-auto">
              <v-list class="text-center">
                <v-divider></v-divider>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>{{ formname }}</v-list-item-subtitle>
                    <v-list-item-title> {{ name }}</v-list-item-title>
                    <v-list-item-subtitle>Isactive?</v-list-item-subtitle>
                    <v-list-item-title> {{ isactive }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                  <v-btn color="#B71C1C" dark block @click="confirmed">
                    CONFIRM
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data: () => {
    return {
      tab: null,
      dialog: false,
      id: "",
      formname: "",
      gender: "",
      isactive: "",
      name: "",
    };
  },

  methods: {
    showModalGender(form) {
      this.id = form.id;
      this.formname = form.formname;
      this.name = form.name;
      this.isactive = form.isactive;
      this.dialog = true;
    },
    showModalReligion(form) {
      this.id = form.id;
      this.formname = form.formname;
      this.name = form.name;
      this.isactive = form.isactive;
      this.dialog = true;
    },
    showModalBloodType(form) {
      this.id = form.id;
      this.formname = form.formname;
      this.name = form.name;
      this.isactive = form.isactive;
      this.dialog = true;
    },
    showModalIsland(form) {
      this.id = form.id;
      this.formname = form.formname;
      this.name = form.name;
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