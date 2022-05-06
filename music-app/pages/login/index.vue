<template>
<div>
  <Loader v-if="loader"/>
  <v-container class="d-flex justify-center align-center">
    <v-col cols='4'>
     <div class="text-center my-4">
       <h1>Login</h1>
     </div>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

          <v-text-field style="width:100%"
            autocomplete="current-password"
            v-model="userPassword"
            label="Enter password"
            hint="Your password passed! Password rules are not meant to be broken!"
            :append-inner-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
          ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

   <NuxtLink style="text-decoration:none;" to='/'>
       <v-btn
      color="error"
      class="my-4"
      @click="reset"
    >
    Forgot Password?
    </v-btn>
      </NuxtLink>
    
      <NuxtLink style="text-decoration:none;" to='/register'>
       <v-btn
      color="error"
      class="my-4"
      @click="reset"
    >
    Havn't account?
    </v-btn>

      </NuxtLink>
  </v-form>
    </v-col>

  </v-container>
</div>
</template>


<script>
import Loader from '@/components/TheLoading.vue'
import {mapGetters} from 'vuex'
import { useStore } from '@/store/counter'

definePageMeta({
  layout:false,
  })

export default {
  setup(){
        const store = useStore()
         return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
  components:{
   Loader
  },
     data: () => ({
       loader:true,
       userPassword: "",
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
    }),
  methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
    computed:{
      ...mapGetters(["_user"])
    },
    mounted(){
      console.log(this.store._counter);
      this.loader=false
    },
}
</script>