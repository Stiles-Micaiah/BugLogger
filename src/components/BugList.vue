<template>
  <div class="bug-list">
    <ul class="pagination">
      <li class="page-item ">
        <a class="page-link" href="javascript:void(0)">&laquo;</a>
      </li>
      <li class="page-item active">
        <a class="page-link" href="javascript:void(0)">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)">4</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)">5</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)">&raquo;</a>
      </li>
    </ul>

    <div id="bug-list-loop" class="list-group">
      <div class="loop-this" v-for="bug in bugs">
        <div href="javascript:void(0)" class="list-group-item list-group-item-action active">j
          {{bug.title}}
        </div>
        <div href="javascript:void(0)" class="list-group-item list-group-item-action disabled">j
          {{bug.creator}}
        </div>
        <div href="javascript:void(0)" class="list-group-item list-group-item-action disabled">j
          {{bug.user}}
        </div>
      </div>
    </div>









  </div>

</template>

<script>
  export default {
    name: 'BugList',

    mounted() {
      this.$store.dispatch("getBugs");

      var listLength = $('#bug-list-group .loop-this').length;

      alert($('#bug-list-group .loop-this').length);

      var limitPerPage = 4;

      var itemsHide = $("#bug-list-group .loop-this:gt(" + (limitPerPage - 1) + ")")

      itemsHide.hide();
    },



    computed: {
      bugs() {
        return this.$store.state.bugs.results
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

  tr {
    width: 80%;
  }

  /* td {
    width: 0vw;
  } */

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .column {
    width: 20vw;
    height: 4vh;
  }

  a {
    color: #42b983;
  }
</style>