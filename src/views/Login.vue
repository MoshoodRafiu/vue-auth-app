<template>
  <div class="about">
    <div class="row">
      <div class="col-md-6 mt-3 bg-light mt-5 p-4 mx-auto">
        <form class="text-left">
          <div class="mb-3">
            <h3>Login</h3>
          </div>
          <div v-if="info.show" class="alert" :class="{'alert-danger': !info.success, 'alert-success': info.success}" role="alert">{{ info.message}}</div>
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
          <button type="submit" @click.prevent="login" class="btn btn-primary">Login</button>
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
        email: null,
        password: null
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
    login(){
      Auth.login(this.credentials)
          .then(() => {
            localStorage.setItem('auth', "true");
            this.errors = [];
            this.info = {show: true, success: true, message: 'Logged in successfully, redirecting...'};
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
