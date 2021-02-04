<template>
  <v-form>
    <v-container>
      <!-- <v-row>
                <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
                     <v-text-field v-model="bloodtype" label="BloodType" :rules="rules" outlined></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
                <v-checkbox v-model="isactive" label="IsActive?"></v-checkbox>
                </v-col>
            </v-row> -->
<v-row>
    <v-col>
        <v-btn block color="error" @click="openModal">
            Add BloodType
        </v-btn>
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

            <v-data-table
              :headers="headers"
              :items="bloodtypes"
              :search="search"
            >
              <template v-slot:item="{ item }">
                <tr @click="OpenEditDialog(item)">
                  <td class="text-left">{{ item.bloodtype }}</td>
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
    <BloodTypeForm ref="modal" @event="confirmed" />
  </v-form>
</template>

<script>
import BloodTypeForm from "@/components/BloodTypeForm";
export default {
  components: { BloodTypeForm },
  data: () => ({
      id: "",
    isactive: true,
    bloodtype: "",
    search: "",
     headers: [
      {
        text: "BloodType",
        align: "start",
        value: "bloodtype",
      },
      { text: "Active", value: "isactive" },
    ],
     bloodtypes: [
      { bloodtype: "A", isactive: true, id: "1" },
      { bloodtype: "A+", isactive: true, id: "2" },
      { bloodtype: "AB", isactive: true, id: "3" },
      { bloodtype: "B", isactive: true, id: "4" },
      { bloodtype: "B+", isactive: true, id: "5" },
      { bloodtype: "O", isactive: true, id: "6" },
      { bloodtype: "O+", isactive: true, id: "7" },
    ],
  }),
  methods: {
    confirmed() {
      alert("Saved!");
    },
    openModal() {
      let form = {
        formname: "BloodType",
        name: this.bloodtype,
        isactive: this.isactive,
      };

      this.$refs.modal.showModalBloodType(form);
    },
    OpenEditDialog(data) {
    //   console.log(data);
      this.$refs.modal.showModalBloodType(data);
    },
  },
};
</script>