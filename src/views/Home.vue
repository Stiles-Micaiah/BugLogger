<template>
  <div class="home">
    <BugList />
    <PostForm />
  </div>
</template>

<script>
  // @ is an alias to /src
  import PostForm from '@/components/PostForm.vue'
  import BugList from '@/components/BugList.vue'

  export default {
    name: 'home',
    components: {
      BugList,
      PostForm
    },

    mounted() {
      // $('.PostForm').hide()

    }
  }
</script>