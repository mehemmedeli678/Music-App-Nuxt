<template>
<div>
    <Loader v-if="loader"/>
      <v-container class="d-flex justify-center align-center">
    <v-col cols='8'>
     <div class="text-center my-4">
       <h1>Register</h1>
     </div>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <div class="d-flex">
    <v-text-field class="mr-2"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
        <v-text-field class="ml-2"
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
  </div>
  <div class="d-flex">
      <v-text-field class="mr-2"
            v-model="password"
            label="Enter password"
            hint="Your password passed! Password rules are not meant to be broken!"
            :append-inner-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
          ></v-text-field>
                <v-text-field class="ml-2"
            v-model="repeatPassword"
            label="Repeat password"
            hint="Your password passed! Password rules are not meant to be broken!"
            :append-inner-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
          ></v-text-field>
  </div>
    

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Register
    </v-btn>
  
  </v-form>
    </v-col>

  </v-container>
</div>
</template>

<script>
definePageMeta({
  layout:false,
  })
import Loader from '@/components/TheLoading.vue'

export default {
    components:{
     Loader
    },
    data(){
        return{
        loader:true,
        password: "",
        repeatPassword:"",
        name:"",
        valid: true,
        value: true,
        rules: {
        required: value => !!value || "Required.",
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\_\^&\*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        }
      },
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],            
       nameRules: [
        v => !!v || 'Name is required',
      ], 
        }
    },
    mounted(){
        this.loader=false
    }
}
</script>