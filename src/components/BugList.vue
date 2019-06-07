<template>
  <div class="bug-list">
    <table>
      <tr>
        <th>Bug</th>
        <th>Discovered By</th>
        <th>Reported By</th>
      </tr>
      <tr v-for="bug in bugs">
        <td>{{bug.title}}</td>
        <td>{{bug.creator}}</td>
        <td>{{bug.user}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'BugList',
    
    mounted() {
      this.$store.dispatch("getBugs")
    },

    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
      deletePost(data) {
        this.$store.dispatch('deleteBug', data)
      }
    },
    props: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  tr,
  tr td {
    margin-top: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>