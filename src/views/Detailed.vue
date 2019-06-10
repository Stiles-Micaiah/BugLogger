<template>
  <div class="Detailed d-flex justify-content-center">
    <div style="height: auto;min-width: 300px; max-width: 90%; margin: 25px;" class="text-wrap card card-803 ">
      <h3 class="title-color card-header">{{bug.title}}</h3>
      <h6 class="mix-a-lot">Discovered By:{{bug.user}}</h6>
      <div class="card-body">
        <p class=" body-color card-text">{{bug.description}}</p>
      </div>

      <div class="card-body">
        <div class="row">
          <div id="bug-list-loop" v-for="comment in comments" class="list-group col-4">
            <a href="javascript:void(0)"
              class="list-group-item list-group-item-action flex-column align-items-start active">
              <h5 class="mb-1">
                {{comment.creator}}
              </h5>
            </a>
            <a href="javascript:void(0)" class="list-group-item list-group-item-action flex-column align-items-start">
              <p>{{comment.content}}</p>
            </a>
          </div>
        </div>
      </div>
      <div style="-webkit-text-fill-color: blueviolet;" class="card-footer text-muted">
        <button class="btn btn-sm btn-sucess rounded" @click="deleteBug(this.id)">Mark as Solved</button>


        <div v-if="postComment" class="card text-white bg-warning mb-3" style="max-width: 20rem;">
          <div class="card-header">Report Card</div>
          <div class="card-body">
            <h4 class="card-title">Ctreate Bug Report</h4>
            <form @submit.prevent="addComment">
              <label for="name" class="col-sm-2 col-form-label">Please Enter your Name</label>
              <input id="name" required="true" class="form-control" type="text" v-model="newComment.creator"
                placeholder="Your Name?">
              <label for="description" class="col-sm-2 col-form-label">How can you contribute?</label>
              <input id="description" required="true" class="form-control" type="text" v-model="newComment.description"
                placeholder="What's on your mind?">
              <button style="width: 100%;" class="btn btn-danger btn-md" type="submit">Report</button>
            </form>
          </div>
        </div>

      </div>
    </div>

  </div>


</template>


<script>
  export default {
    name: 'Detailed',
    props: ["id"],
    data() {
      return {
        postComment: true,
        newComment: {
          creator: "",
          description: ""
        }
      }
    },
    mounted() {

      this.$store.dispatch('getBugById', this.id)
      this.$store.dispatch('getComments', this.id)

    },
    computed: {
      bug() {
        return this.$store.state.bug

      },
      comments() {
        return this.$store.state.comments
      }

      // activeBug() {
      //   return this.bugs.slice(this.page * 4, this.page * 4 + 4);
      // },
      // pages() {
      //   return Math.ceil(this.bugs.length / 4)
      // }

    },
    methods: {
      addComment(data, bugId) {
        this.$store.dispatch('postComment', data, bugId)
      },
      deletePost(id) {
        this.$store.dispatch('deleteBug', id)
      },
      deleteComment(id) {
        this.$store.dispatch('deleteComment', id)
      },
    },
  }

</script>


<style scoped>
  label {
    display: contents;
  }

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