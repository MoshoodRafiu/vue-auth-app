<template>
  <div class="about">
    <div class="row">
      <div class="col-md-6 mt-3 bg-light mt-5 p-4 mx-auto">
        <form class="text-left">
          <div class="mb-3">
            <h3>Login</h3>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
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
        email: "test@test.com",
        password_confirmation: "Password123!"
      }
    }
  },
  methods: {
    register(){
      Auth.register(this.credentials)
          .then(() => {
            localStorage.setItem('auth', "true");
            this.$router.push({name: 'Dashboard'});
          });
    }
  },
}
</script>
