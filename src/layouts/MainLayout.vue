<template>
  <div>
      <Loader v-if="loading" />
       <div v-else class="app-main-layout">
    <Navbar @click-sidebar="isOpen = !isOpen" />
    <Sidebar v-model="isOpen"/>
    
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
          <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn" v-tooltip="'Создать новую запись'">
        <router-link to="/record" class="btn-floating btn-large blue" >
            <i class="large material-icons">add</i>
        </router-link>
    </div>

</div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar';
import Sidebar from '@/components/app/Sidebar';
import Loader from '../components/Loader.vue';
import messages from '../utils/messages';
export default {
  name: 'main-layout',
  components: {
      Navbar,
      Sidebar,
      Loader
  },
  data() {
      return {
          isOpen: true,
          loading: true
    }
  },
    computed: {
        error() {
           return this.$store.getters.error;
        }
    },
    watch: {
        error(fbError) {
           this.$error(messages[fbError.code] || 'Что-то пошло не так');
           //console.log(fbError);
        }
    },
  async mounted() {
        if (!Object.keys(this.$store.getters.info).length) {
          await  this.$store.dispatch('fetchInfo');
        }

        this.loading = false;
    }
}
</script>