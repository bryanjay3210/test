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
                    <v-list-item-subtitle>First Name:</v-list-item-subtitle>
                    <v-list-item-title> {{ first_name }}</v-list-item-title>

                    <v-list-item-subtitle>Middle Name:</v-list-item-subtitle>
                    <v-list-item-title> {{ middle_name }}</v-list-item-title>

                    <v-list-item-subtitle>Last Name:</v-list-item-subtitle>
                    <v-list-item-title> {{ last_name }}</v-list-item-title>

                    <v-list-item-subtitle>IsActive:</v-list-item-subtitle>
                    <v-list-item-title> {{ is_active }}</v-list-item-title>

                     <v-list-item-subtitle>Religion:</v-list-item-subtitle>
                    <v-list-item-title> {{ religion }}</v-list-item-title>

                     <v-list-item-subtitle>Birthday:</v-list-item-subtitle>
                    <v-list-item-title> {{ birthday }}</v-list-item-title>

                    <v-list-item-subtitle>BloodType:</v-list-item-subtitle>
                    <v-list-item-title> {{ bloodtype }}</v-list-item-title>

                    <v-list-item-subtitle>Municipality:</v-list-item-subtitle>
                    <v-list-item-title> {{ municipality }}</v-list-item-title>

                     <v-list-item-subtitle>Address:</v-list-item-subtitle>
                    <v-list-item-title> {{ address }}</v-list-item-title>

                     <v-list-item-subtitle>Mobile #:</v-list-item-subtitle>
                    <v-list-item-title> {{ mobilenum }}</v-list-item-title>

                     <v-list-item-subtitle>Email:</v-list-item-subtitle>
                    <v-list-item-title> {{ email }}</v-list-item-title>

                     <v-list-item-subtitle>Gender:</v-list-item-subtitle>
                    <v-list-item-title> {{ gender }}</v-list-item-title>
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
  data() {
    return {
      tab: null,
      dialog: false,

      first_name: "",
      middle_name: "",
      last_name: "",
      is_active: "",
      religion: "",
      birthday: "",
      bloodtype: "",
      municipality: "",
      address: "",
      mobilenum: "",
      email: "",
      gender: "",
    };
  },

  methods: {
    showModal(form) {
      this.first_name = form.first_name;
      this.middle_name = form.middle_name;
      this.last_name = form.last_name;
      this.is_active = form.is_active;
      this.religion = form.religion,
      this.birthday = form.birthday,
      this.bloodtype = form.bloodtype,
      this.municipality = form.municipality,
      this.address = form.address,
      this.mobilenum = form.mobilenum,
      this.email = form.email,
      this.gender = form.gender,
      this.dialog = true;
    },
    confirmed() {
      this.$emit("event");
      this.dialog = false;
    },
  },
};
</script>