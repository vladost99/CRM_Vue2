<template>
   <div>
  <div class="page-title">
    <h3>Категории</h3>
  </div>
  <section>
    <Loader v-if="loading"/>
    <div v-else class="row">
     <CategoryCreate @created="addNewCategory"/>
     <CategoryEdit
       :categories="categories"
      />
    </div>
  </section>
</div>
</template>

<script>
import CategoryCreate from '../components/CategoryCreate';
import CategoryEdit from '../components/CategoryEdit';
import Loader from '../components/Loader.vue';
export default {
  data() {
    return {
      categories: [],
      loading: true
    }
  },
 async mounted() {
  this.categories = await this.$store.dispatch('fetchCategories');
  //console.log(this.categories);
  this.loading = false;
 },
  methods: {
      addNewCategory(category) {
        this.categories.push(category);
      }
  },
  components: {
      CategoryEdit,
      CategoryCreate,
      Loader
  }
}
</script>