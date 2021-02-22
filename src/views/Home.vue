<template>
  <div>
  <div class="page-title">
    <h3>Счет</h3>

    <button class="btn waves-effect waves-light btn-small">
      <i class="material-icons">refresh</i>
    </button>
  </div>

  <Loader v-if="loading"/>

  <div v-else class="row">
    <HomeBill 
      :rates="currency.rates"
    />
    
    <HomeCurrency/>
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
 async mounted() {
   this.currency = await this.$store.dispatch('fetchCurrency');
   //console.log(this.currency);
   this.loading = false;
  }
}
</script>
