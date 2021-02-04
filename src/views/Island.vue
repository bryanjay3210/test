<template>
  <v-form>
      <v-container>
          <v-row>
              <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
                  <v-text-field v-model="island" label="Island" :rules="rules" outlined></v-text-field>
              </v-col>
               <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
                <v-checkbox v-model="isactive" label="IsActive?"></v-checkbox>
                </v-col>
          </v-row>
            <v-row>
                 <v-btn block color="error" @click="openModal">Save</v-btn>
         </v-row>
      </v-container>
        <ConfirmCommon ref="modal" @event="confirmed" />
  </v-form>
</template>

<script>
import ConfirmCommon from '@/components/ConfirmCommon';
export default {
    components: {ConfirmCommon},
data: () => ({
    island: "",
    rules: [
            value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 4 characters',
        ],
}),
methods: 
{
  openModal() {
        let form = {
        formname: "Island",
        name: this.island,
       isactive: this.isactive,
      };

      this.$refs.modal.showModalBloodType(form);
    },
},
}
</script>
