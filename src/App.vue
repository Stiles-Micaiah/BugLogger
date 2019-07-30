<template>
  <div id="nav container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">Micaiah</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/detailed">GitHub <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detailed">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detailed">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detailed">About</router-link>
          </li>
        </ul>
        <!-- <img class="float-rightKs" style="height: 9vh; width: auto;" alt="Vue logo" src="@/assets/ScarabH3.png"> -->
        <form @submit.prevent="search" class="form-inline search-form-nav my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" v-model="searchQuery" placeholder="Search BugList">
          <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        searchQuery: ""
      }
    },
    // mounted() {
    //   //  alert('v-if and v-show is a load of bullshit. they are not reactive. vue is broken, they need to update it')
    // },
    methods: {
      search() {
        this.$store.dispatch('search', ...this.searchQuery);
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    background: none;
  }

  html {
    background-image: url('https://www.pixelstalk.net/wp-content/uploads/images1/3D-Flower-Abstract-Wallpaper.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }
</style>

<style scoped>
  a {
    color: #42b983;
  }
</style>