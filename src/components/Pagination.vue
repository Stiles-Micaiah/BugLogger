<!-- <script>
  import Vue from "vue-template-compiler"
  import VuePaginator from 'vuejs-paginator'
  new Vue({
    el: '#app',
    data() {
      return {
        // The resource variable
        bugs: [],
        // Here you define the url of your paginated API
        resource_url: 'http://hootlex.github.io/vuejs-paginator/samples/bugs1.json'
      }
    },
    components: {
      VPaginator: VuePaginator
    },
    methods: {
      updateResource(data) {
        this.bugs = data
      }
    }
  });
</script> -->




<template>
  <div id="pagination">
    <button class="btn btn-primary" @click="refresh()">Refresh</button>
    <button class="btn btn-default" @click="prev()">Prev</button>
    <button class="btn btn-default" @click="next()">Next</button>
    <button class="btn btn-default" @click="prevChunk()">Prev Chunk</button>
    <button class="btn btn-default" @click="nextChunk()">Next Chunk</button>
    <div>
      Records:
      <input type="text" @keyup="refresh()" v-model="records">
      Per Page:
      <input type="text" @keyup="refresh()" v-model="perpage">
    </div>

    <h3>Displaying page {{table1Page}} out of {{totalPages}} <small>({{PerPage}} records per page)</small></h3>

    <pagination v-ref:table for="table" :per-page="PerPage" :records="Records"></pagination>
    <p v-if="!Records">No records</p>

    <p class="note">
      Check out the <a href="https://jsfiddle.net/matfish2/f5h8xwgn/" target="_blank">vue-tables</a> package, now using
      this pagination component.</p>
  </div>

</template>


<script>
  import Vue from 'vue'
  Vue.use(VuePagination);

  new Vue({
    el: "#pagination",
    data: {
      table1Page: 1,
      table2Page: 1,
      code: 'table1',
      records: 100,
      perpage: 10
    },
    computed: {
      PerPage: function () {
        return this.perpage ? parseInt(this.perpage) : 25;
      },
      Records: function () {
        return this.records ? parseInt(this.records) : 0;
      },
      totalPages: function () {
        return this.$refs.table.totalPages;
      }
    },
    methods: {
      refresh: function () {
        this.$refs.table.setPage(1);
      },
      prev: function () {
        return this.$refs.table.prev();
      },
      next: function () {
        return this.$refs.table.next();
      },
      prevChunk: function () {
        return this.$refs.table.prevChunk();
      },
      nextChunk: function () {
        return this.$refs.table.nextChunk();
      }
    },
    ready: function () {
      this.$on('vue-pagination::table', function (page) {
        this.table1Page = page;
      });
    }
  })
</script>


<style scoped>
  #pagination {
    margin-top: 10px;
    text-align: center;
  }

  h3 {
    margin-top: 10px;
    text-align: center;
  }

  div {
    margin-top: 10px;
  }

  small {
    font-size: 14px;
  }
</style>