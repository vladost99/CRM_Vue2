<template >
    <div class="col s12 m6 l8">
      <div class="card orange darken-3 bill-card">
        <div class="card-content white-text">
          <div class="card-header">
            <span class="card-title">{{'Exchange_rates' | localize}}</span>
          </div>
          <table>
            <thead>
            <tr>
              <th>{{'Rate' | localize}}</th>
              <th>{{'Course' | localize}}</th>
              <th>{{'Date' | localize}}</th>
            </tr>
            </thead>

            <tbody>
            <tr 
              v-for="cur of currencies" 
              :key="cur"
              >
              <th>{{ cur }}</th>
              <th>{{ rates[cur].toFixed(5) }}</th>
              <th>{{ date }}</th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props: {
      rates: Object,
      date: String
    },
    data() {
      return {
        currencies: ['RUB', 'USD', 'EUR']
      }
    }
}
</script>
<style>
    
</style>