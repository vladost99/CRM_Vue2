<template>
   <div>
     <div class="row"  v-for="(record) of records" :key="record.id" >
    <div class="col">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">
           <span class="cardSubtitle"> {{record.categoryName}}</span>
               <span 
          :class="[record.typeClass]"
          class="white-text badge"
          >
          {{record.typeText}}</span>
          </span>
          <span>{{ record.date | date('datetime') }}</span>
        </div>
        <div class="card-action">
         <span class="price_amount">{{ record.amount | currency('RUB') }}</span>
         <button 
          class="btn-small btn"
          @click="$router.push(`/detail/${record.id}`)"
          v-tooltip="'Посмотреть запись'"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </div>
      </div>
    </div>
  </div>
   </div>
</template>

<script>
export default {
    props: {
        records: {
            required: true,
            type: Array
        }
    }
}
</script>

<style>
.card .card-content .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 32px;
    margin-bottom: 8px;
  }
  .card .card-action {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .price_amount {
    color: #fff;
    font-size: 25px;
  }
  .row {
    display: flex;
    justify-content: center;
  }
  .white-text.badge {
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 0 10px;
  }

  .cardSubtitle {
    font-size: 18px;
  }
</style>