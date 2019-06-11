<template>
  <div class="Detailed d-flex justify-content-center">
    <div style="height: auto;min-width: 300px; max-width: 90%; margin: 25px;" class="text-wrap card card-803 ">
      <h3 class="title-color card-header">{{bug.title}}</h3>
      <h6 class="mix-a-lot">Discovered By:{{bug.user}}</h6>
      <button v-show="!this.bugStatus" class="btn btn-md btn-success" @click="deletePost(bug._id)">Mark as
        Handled</button>
      <small v-show="this.bugStatus" style="mix-blend-mode: difference;">
        This Bug is Dead!
      </small>
      <div class="card-body">
        <p class=" body-color card-text">{{bug.description}}</p>
      </div>
      <div class="card-body also-comment-row">
        <div class="row">
          <div id="bug-list-loop" v-for="comment in comments" :key="comment._id" class="list-group col-4">
            <a href="javascript:void(0)"
              class="list-group-item list-group-item-action flex-column align-items-start active">
              <h5 class="mb-1">
                {{comment.creator}}
              </h5>
            </a>
            <a href="javascript:void(0)" class="list-group-item list-group-item-action flex-column align-items-start">
              <p>{{comment.content}}</p>
            </a>
            <div style="-webkit-text-fill-color: blueviolet;" class="card-footer text-muted">
              <button class="btn btn-sm rounded" @click="deleteComment(comment.bug,comment._id)">Delete Comment</button>
            </div>
          </div>
          <form v-if="!bug.closed" @submit.prevent="addComment">
            <label for="title" class="col-sm-2 col-form-label">Title of Report</label>
            <input id="title" required="true" class="form-control" type="text" v-model="newComment.creator"
              placeholder="Name">
            <label for="title" class="col-sm-2 col-form-label">Title of Report</label>
            <input id="title" required="true" class="form-control" type="text" v-model="newComment.content"
              placeholder="Content">
            <button type="submit">submit</button>
          </form>
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
        newComment: {
          creator: "",
          content: "",
          bug: this.id
        }
      }
    },
    mounted() {

      this.$store.dispatch('getBugById', this.id);
      this.$store.dispatch('getComments', this.id);
      console.log('hey yo', this.$store.dispatch('getComments', this.id));
    },
    computed: {
      bug() {
        return this.$store.state.bug

      },
      bugStatus() {
        return this.$store.state.bug.closed

      },
      comments() {
        return this.$store.state.bugComments
      },

      activeBug() {
        return this.bugs.slice(this.page * 4, this.page * 4 + 4);
      },
      pages() {
        return Math.ceil(this.bugs.length / 4)
      }

    },
    methods: {
      addComment() {
        let data = {
          data: this.newComment,
          id: this.id
        }
        this.$store.dispatch('postComment', data)
      },
      deletePost(id) {
        this.$store.dispatch('deleteBug', id)
      },
      deleteComment(id, cid) {
        let commentIdInfo = {
          id: id,
          cid: cid
        }
        this.$store.dispatch('deleteComment', commentIdInfo)
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








<!-- 
<div v-if="postComment" class="card text-white bg-warning mb-3" style="max-width: 20rem;">
    <div class="card-header">Report Card</div>
    <div class="card-body">
      <h4 class="card-title">Ctreate Bug Report</h4>
      <form @submit.prevent="addComment">
        <label for="name" class="col-sm-2 col-form-label">Please Enter your Name</label>
        <input id="name" required="true" class="form-control" type="text" v-model="newComment.creator"
          placeholder="Your Name?">
        <label for="content" class="col-sm-2 col-form-label">How can you contribute?</label>
        <input id="content" required="true" class="form-control" type="text" v-model="newComment.content"
          placeholder="What's on your mind?">
        <button style="width: 100%;" class="btn btn-danger btn-md" type="submit">Report</button>
      </form>
    </div>
  </div> -->