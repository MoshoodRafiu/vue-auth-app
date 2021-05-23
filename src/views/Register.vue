<template>
  <div class="about">
    <div class="row">
      <div class="col-md-6 mt-3 bg-light mt-5 p-4 mx-auto">
        <form class="text-left">
          <div class="mb-3">
            <h3>Register</h3>
          </div>
          <div v-if="info.show" class="alert" :class="{'alert-danger': !info.success, 'alert-success': info.success}" role="alert">{{ info.message}}</div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" v-model="credentials.name" class="form-control" id="name">
            <div v-if="errors.name" class="small text-danger">
              <strong>{{ errors.name[0] }}</strong>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" v-model="credentials.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div v-if="errors.email" class="small text-danger">
              <strong>{{ errors.email[0] }}</strong>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" v-model="credentials.password" class="form-control" id="exampleInputPassword1">
            <div v-if="errors.password" class="small text-danger">
              <strong>{{ errors.password[0] }}</strong>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
            <input type="password" v-model="credentials.password_confirmation" class="form-control" id="exampleInputPassword2">
          </div>
          <button type="submit" @click.prevent="register" class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '../apis/Auth';
export default {
  data() {
    return {
      credentials: {
        name: "Test",
        email: "test@test.com",
        password: "Password123!",
        password_confirmation: "Password123!"
      },
      errors: [],
      info: {
        show: false,
        success: true,
        message: null
      }
    }
  },
  methods: {
    register(){
      Auth.register(this.credentials)
        .then(() => {
          localStorage.setItem('auth', "true");
          this.errors = [];
          this.info = {show: true, success: true, message: 'Registered successfully, redirecting...'};
          setTimeout(() => {
            this.$store.state.loggedIn = true;
            this.$router.push({name: 'Dashboard'});
          }, 2000);
        })
        .catch(err => {
          if (err.response.status === 422){
            this.errors = err.response.data.errors;
            this.info = {show: true, success: false, message: 'Invalid input data'};
          }else{
            this.errors = [];
            this.info = {show: true, success: false, message: err.response.data.message};
          }
        });
    }
  },
}
</script>
