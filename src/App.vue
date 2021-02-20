<template>
  <div>
     <component :is="layout">
        <!-- <router-view/> возможно не потребуется использовать --> 
     </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout';
import MainLayout from './layouts/MainLayout';
  export default {
    components: {
      EmptyLayout,
      MainLayout
    },
    computed: {
      layout() {
       /*  console.log(this.$route.meta); */
        return  (this.$route.meta.layout || 'empty') + '-layout';
      }
    }
  }
</script>


<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>
