<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-btn block color="error" @click="openModal">Add Religion</v-btn>
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
              :items="religions"
              :search="search"
            >
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
    <ReligionForm ref="modal" title="" @event="confirmed" />
  </v-form>
</template>
<script>
import ReligionForm from "@/components/ReligionForm";
export default {
  components: { ReligionForm },
  data: () => ({
    religion: "",
    search: "",
    isactive: false,
    headers: [
      {
        text: "Religion",
        align: "start",
        value: "name",
      },
      { text: "Active", value: "isactive" },
    ],
    religions: [
      { name: "Romantic Catholic", isactive: true, id: 1 },
      { name: "Iglesia ni Cristo", isactive: true, id: 2 },
      { name: "Saksi ni Jehova", isactive: true, id: 3 },
      { name: "Adventist", isactive: true, id: 4 },
      { name: "Born Again", isactive: true, id: 5 },
    ],
  }),
  methods: {
      confirmed() {
      alert("Saved!");
    },
    openModal() {
      let form = {
        formname: "Religion",
        name: this.religion,
        isactive: this.isactive,
      };

      this.$refs.modal.showModalReligion(form);
    },

    OpenEditDialog(data) {
      console.log(data.name);
      this.$refs.modal.showModalReligion(data);
    },
  },
};
</script>