<template>
  <div class="Detailed">
    <div style="height: auto; margin: 25px;" class="card card-803 " v-for="bug in bugs" :key="post.id">
      <h3 class="title-color card-header">{{bug.title}}</h3>
      <h6 class="mix-a-lot">bug By:{{bug.user}}</h6>
      <img style="height: auto; width: 100%; display: block;" :src="bug.img" alt="Card image">
      <div class="card-body">
        <p class=" body-color card-text">{{bug.body}}</p>
      </div>

      <div class="card-body">
        <button class="btn btn-info rounded-pill ">You like this</button>
        <button @click="deletebug(bug._id)" class="btn btn-danger rounded-pill ">You like this, but in Red</button>
      </div>
      <div style="-webkit-text-fill-color: blueviolet;" class="card-footer text-muted">
        {{bug.user}} but in Purple
      </div>
    </div>

  </div>


</template>


<script>
  export default {
    name: 'Detailed',
    computed: {
      bugs() {
        return this.$store.state.bugs
      },
      activeBugs() {
        return this.bugs.slice(this.page * 4, this.page * 4 + 4);
      },
      pages() {
        return Math.ceil(this.bugs.length / 4)
      }

    },
    methods: {
      deletePost(data) {
        this.$store.dispatch('deleteBug', data)
      },
    }
  }
</script>


<style scoped>
  .card-803 {
    max-width: 100%;
  }

  .card,
  .card>* {
    background-color: rgba(85, 1, 163, 0.226);
  }

  .mix-a-lot {
    -webkit-text-fill-color: deepskyblue;
  }

  .title-color {
    -webkit-text-fill-color: cyan;
  }

  .body-color {
    -webkit-text-fill-color: turquoise;
  }
</style>