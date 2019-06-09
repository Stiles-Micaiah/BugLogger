<template>
  <div class="PostForm">
    <div class="card text-white bg-warning mb-3" style="max-width: 20rem;">
      <div class="card-header">Report Card</div>
      <div class="card-body">
        <h4 class="card-title">Ctreate Bug Report</h4>
        <form @submit.prevent="addBug">
          <label for="title" class="col-sm-2 col-form-label">Title of Report</label>
          <input id="title" required="true" class="form-control" type="text" v-model="newReport.title"
            placeholder="Title">
          <label for="name" class="col-sm-2 col-form-label">Please Enter your Name</label>
          <input id="name" required="true" class="form-control" type="text" v-model="newReport.creator"
            placeholder="Your Name?">
          <label for="description" class="col-sm-2 col-form-label">Description of The Issue</label>
          <input id="description" required="true" class="form-control" type="text" v-model="newReport.description"
            placeholder="What's on your mind?">
          <button style="width: 100%;" class="btn btn-danger btn-md" type="submit">Report</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'PostForm',
    data() {
      return {
        newReport: {
          title: "",
          creator: "",
          description: ""
        }
      }
    },

    methods: {
      addBug(data) {
        this.$store.dispatch('reportBug', this.newReport)
      }
    },



  }
</script>


<style scoped>
  label {
    display: unset;
  }
</style>