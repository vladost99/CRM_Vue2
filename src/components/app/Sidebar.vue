<template>
     <ul class="sidenav app-sidenav" :class="{open: value}">
         <!-- нужно фиксить тег -->
       
        
         <router-link
            v-for="link in links"
            tag="li"
            :key="link.url"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
            >
        <a href="#"  class="waves-effect waves-orange pointer">  {{ link.title }} </a>
      </router-link>
     

      

    </ul>
</template>

<script>
export default {
    name: 'sidebar',
    props: {
        value: Boolean
    },
    data() {
        return {
            links: [
            {title: 'Счет', url: '/', exact: true},
            {title: 'История', url: '/history'},
            {title: 'Планирование', url: '/planning'},
            {title: 'Новая запись', url: '/record'},
            {title: 'Категории', url: '/categories'},
        ]
        }
    },
    
}
</script>

<style>
    li.active.router-link-exact-active {
        background: #f9b93e !important;
        color: #000000;
    } 
</style>
