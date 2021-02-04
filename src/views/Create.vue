<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3"
          ><v-text-field
            v-model="first_name"
            label="First Name"
            :rules="rules"
            outlined
          ></v-text-field
        ></v-col>

        <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3"
          ><v-text-field
            v-model="middle_name"
            label="Middle Name"
            outlined
          ></v-text-field
        ></v-col>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3"
          ><v-text-field
            v-model="last_name"
            label="Last Name"
            :rules="rules"
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-checkbox v-model="is_active" label="IsActive?"></v-checkbox>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-select
            v-model="religion"
            :items="religions"
            item-text="religion"
            item-value="id"
            label="Religion"
            persistent-hint
            return-object
            :rules="[v => !!v || 'Item is required']"
            outlined
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                label="Birthday"
                persistent-hint
                prepend-icon="calendar_today"
                v-bind="attrs"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
                outlined
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-select
            v-model="bloodtype"
            :items="bloodtypes"
            item-text="bloodtype"
            item-value="id"
            label="BloodType"
            persistent-hint
            return-object
            outlined
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-select
            v-model="municipality"
            :items="municipalities"
            item-text="municipality"
            item-value="id"
            label="Municipality"
            persistent-hint
            return-object
            outlined
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-text-field
            v-model="address"
            label="Address"
            :rules="rules"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-text-field
            v-model="mobilenum"
            label="Mobile #"
            :rules="rules"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-text-field v-model="email" label="Email" :rules="rules" outlined></v-text-field>
        </v-col>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
          <v-select
            v-model="gender"
            :items="genders"
            item-text="gender"
            item-value="id"
            label="Gender"
            persistent-hint
            return-object
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn block @click="openModal"> save </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <ConfirmMember ref="modal" @event="confirmed" />
  </v-form>
</template>
<script>
import ConfirmMember from "@/components/ConfirmMember";
export default {
  components: { ConfirmMember },
  data: (vm) => ({
    checkbox: true,
    first_name: "",
    middle_name: "",
    last_name: "",
    address: "",
    is_active: "",
    mobilenum: "",
    email: "",
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    bloodtype: { id: "", bloodtype: "" },
    bloodtypes: [
      { bloodtype: "A", id: "1" },
      { bloodtype: "A+", id: "2" },
      { bloodtype: "AB", id: "3" },
      { bloodtype: "B", id: "4" },
      { bloodtype: "B+", id: "5" },
      { bloodtype: "O", id: "6" },
      { bloodtype: "O+", id: "7" },
    ],
    religion: { id: "", religion: "" },
    religions: [
      { religion: "Romantic Catholic", id: "1" },
      { religion: "Iglesia ni Cristo", id: "2" },
      { religion: "Saksi ni Jehova", id: "3" },
      { religion: "Adventist", id: "4" },
      { religion: "Born Again", id: "5" },
    ],
    barangay: { id: "", value: "" },
    barangays: [
      { value: "san isidro", id: "FL" },
      { value: "lagao", id: "GA" },
      { value: "uhm-uhm", id: "NE" },
      { value: "k ah", id: "CA" },
      { value: "digto dapit", id: "NY" },
    ],

    municipality: { id: "", municipality: "" },
    municipalities: [
      { municipality: "Polomolok", id: "1" },
      { municipality: "Tupi", id: "2" },
      { municipality: "Marbel", id: "3" },
    ],

    gender: { id: "", gender: "" },
    genders: [
      { gender: "Male", id: "1" },
      { gender: "Female", id: "2" },
    ],
    rules: [
            value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 4 characters',
        ],
  }),

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  methods: {
    // save() {
    //   let form = [];
    //   form.first_name = this.first_name;
    //   form.middle_name = this.middle_name;
    //   form.last_name = this.last_name;
    //   form.checkbox = this.checkbox;
    //   form.address = this.address.address;
    //   form.brgy = this.barangay.id;

    //   console.log(form);
    // },
    validate () {
        this.$refs.form.validate()
      },

    openModal() {
      let form = {
        first_name: this.first_name,
        middle_name: this.middle_name,
        last_name: this.last_name,
        is_active: this.is_active,
        religion: this.religion.religion,
        birthday: this.date,
        bloodtype: this.bloodtype.bloodtype,
        municipality: this.municipality.municipality,
        address: this.address,
        mobilenum: this.mobilenum,
        email: this.email,
        gender: this.gender.gender,
      };

      this.$refs.modal.showModal(form);
    },

    confirmed() {
      alert("confirm");
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>


