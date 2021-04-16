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
        <a href="#"  class="waves-effect waves-orange pointer">  {{ link.title | localize }} </a>
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
            {title: 'Sidebar_Score', url: '/', exact: true},
            {title: 'Sidebar_History', url: '/history'},
            {title: 'Sidebar_Planning', url: '/planning'},
            {title: 'Sidebar_New_Record', url: '/record'},
            {title: 'Sidebar_Category', url: '/categories'},
        ]
        }
    },
    
}
</script>

<style>
    li.active.router-link-exact-active {
        background: #bdb9b3 !important;
        color: #000000;
    } 
</style>
