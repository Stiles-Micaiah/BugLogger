<template>
  <div style="background-image: none;" class="bug-list">
    <div class="row">
      <ul style="width: 100%" class="pagination pageinator-personal d-flex justify-content-center">
        <li class="page-item ">
          <a class="page-link" @click="page > 0 ? page-- : page = 0" href="javascript:void(0)">&laquo;</a>
        </li>

        <li class="page-item " v-for="pg in pages">
          <a class="page-link" @click="page = pg - 1" href="javascript:void(0)">{{pg}}</a>
        </li>

        <li class="page-item">
          <a class="page-link" @click="page < pages ? page++ : page = pages" href="javascript:void(0)">&raquo;</a>
        </li>
      </ul>
    </div>


    <div class="row d-flex justify-content-center">
      <div id="bug-list-loop" v-for="bug in activeBugs" class="list-group col-4">
        <a href="javascript:void(0)"
          class="list-group-item list-group-item-action flex-column align-items-start active">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
              {{bug.title}}
            </h5>
            <small>
              {{timeSince(bug._id)}}
            </small>
          </div>
          <p class="mb-1">
            {{bug.description}}
          </p>
          ////
        </a>
        <a href="javascript:void(0)" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
              Comments & Notes
            </h5>
            <small class="text-muted">
              --latest comment--
            </small>
          </div>
          <ul class="mb-1">
            --comments--
          </ul>
          <small class="text-muted">
            {{bug.updated}}
          </small>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'BugList',
    data() {
      return {
        page: 0,
      }
    },
    mounted() {
      this.$store.dispatch("getBugs");
      // var listLength = $('#bug-list-group .loop-this').length;
      // alert($('#bug-list-group .loop-this').length);
      // var limitPerPage = 4;
      // var itemsHide = $("#bug-list-group .loop-this:gt(" + (limitPerPage - 1) + ")")
      // itemsHide.hide();
    },



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
      timeSince(id) {
        let time = new Date()
        let result = this.$store.state.bugs.filter(obj => {
          return obj._id === id
        })
        let idDate = new Date(result.created)
        return (time - idDate) / (24 * 3600 * 1000)
      }
    },
    props: {
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* tr,
  tr td {
    margin-top: 15px;
  }

  tr {
    width: 80%;
  } */

  /* td {
    width: 0vw;
  } */

  .pageinator-personal>li {
    border: #ff00ea;
  }

  .pageinator-personal * {
    background: none;
  }

  .pageinator-personal>li>a {
    text-shadow: 0px 0px 15px #42b983, 0px 0px 15px #42b983, 0px 0px 15px #42b983;
    color: #5991f8;
  }

  #bug-list-loop {
    width: 320px;
    margin: 15px;
  }

  a {
    color: #42b983;
  }
</style>