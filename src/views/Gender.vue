<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-text-field
            v-model="gender"
            label="Gender"
            :rules="rules"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12" xs="4" sm="4" md="4"
              ><v-checkbox v-model="isactive" label="IsActive?"></v-checkbox
            ></v-col>
            <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
              <v-btn color="error" @click="openModal" block>Save</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            
            <v-data-table :headers="headers" :items="genders" :search="search">
              <template v-slot:item="{ item }">
                <tr @click="OpenEditDialog(item)">
                  <td class="text-left">{{ item.name }}</td>
                  <td>
                    <v-checkbox
                      v-model="item.isactive"
                      hide-details
                      disabled
                    ></v-checkbox>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <ConfirmCommon ref="modal" @event="confirmed" />
  </v-form>
</template>
<script>
import ConfirmCommon from "@/components/ConfirmCommon";
export default {
  components: { ConfirmCommon },
  data: () => ({
    gender: "",
    isactive: false,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 4 characters",
    ],
    search: "",
    headers: [
      {
        text: "Gender",
        align: "start",
        value: "name",
      },
      { text: "Active", value: "isactive" },
    ],
    genders: [
      { name: "Male", isactive: false },
      { name: "Female", isactive: true },
    ],
  }),
  methods: {
    confirmed() {
      alert(1);
    },
    OpenEditDialog(data) {
      console.log(data);
    },
    openModal() {
      let form = {
        formname: "Gender",
        name: this.gender,
        isactive: this.isactive,
      };

      this.$refs.modal.showModalGender(form);
    },
  },
};
</script>