<script>
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
</script>