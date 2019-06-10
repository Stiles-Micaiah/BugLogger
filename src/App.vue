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

      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    mounted() {
      alert('If you see this, I am not done with this site. Please dont recommend a fix unless youve looked at the code. I have more than is showing probably, the rest is commented out until the code is ready for it')
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