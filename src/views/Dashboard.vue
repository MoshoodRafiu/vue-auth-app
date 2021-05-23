<template>
  <div class="about">
    <div class="row">
      <div class="col-md-6 mt-3 bg-light mt-5 p-4 mx-auto">
        <div class="mb-3">
          <h3>Dashboard</h3>
          <p>Hello <span v-if="user">{{ user.name }}</span>,</p>
          <p>Welcome to your dashboard</p>
          <button @click="logout" class="btn btn-primary">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Auth from "@/apis/Auth";
  export default {
    data(){
      return {
        user: null
      }
    },
    mounted() {
      this.getUser();
    },
    methods: {
      getUser(){
        Auth.user()
          .then(res => {
            this.user = res.data;
          });
      },
      logout() {
        Auth.logout()
          .then(() => {
            localStorage.setItem('auth', 'true');
            this.$router.push({name: 'Home'});
          });
      }
    }
  }
</script>