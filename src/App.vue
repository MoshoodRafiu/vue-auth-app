<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Auth App</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" exact to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <button @click="logout" class="btn nav-link">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import Auth from "@/apis/Auth";

  export default {
    methods: {
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
