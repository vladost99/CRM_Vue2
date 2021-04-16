<template>
  <div>
  <div class="page-title">
    <h3>{{'Sidebar_Score' | localize}}</h3>

    <button @click="refresh" class="btn waves-effect waves-light btn-small">
      <i class="material-icons">refresh</i>
    </button>
  </div>

  <Loader v-if="loading"/>

  <div v-else class="row">
    <HomeBill 
      :rates="currency.rates"
    />
    
    <HomeCurrency
      :rates="currency.rates"
      :date="currency.date"
    />
  </div>
</div>
</template>

<script>
import HomeBill from '@/components/HomeBill';
import HomeCurrency from '@/components/HomeCurrency';
import Loader from '../components/Loader.vue';

export default {
  name: 'Home',
  components: {
      HomeBill,
      HomeCurrency,
      Loader
  },
  data() {
    return {
      loading: true,
      currency: null
    }
  },
  methods: {
     async refresh() {
        this.loading = true;
        this.currency = await this.$store.dispatch('fetchCurrency');
        this.loading = false;
      }
  },
 async mounted() {
   this.currency = await this.$store.dispatch('fetchCurrency');
   //console.log(this.currency);
   this.loading = false;
  }
}
</script>
