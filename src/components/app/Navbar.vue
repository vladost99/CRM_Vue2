<template>
      <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#" @click.prevent="$emit('click-sidebar')">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">{{ date | date('HH:mm:ss')  }}</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger black-text"
                href="#"
                ref="dropdown"
                data-target="dropdown"
              >
                {{ name }}
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
              <router-link to="/profile" tag="li">
                <a href="#" class="black-text">
                  <i class="material-icons">account_circle</i>Профиль
                </a>
              </router-link>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a @click.prevent="logout" href="#" class="black-text">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
 import M from 'materialize-css/dist/js/materialize.min'; 
 import { dateFilter } from "vue-date-fns";
   export default {
    data() {
      return {
        date: new Date(),
        intervalTimer: null,
        dropdown: null,
      }
    },
    filters: {
      date: dateFilter
    },
    computed: {
      name() {
        return this.$store.getters.info.name;
      }
    },
    mounted() {
       this.dropdown =  M.Dropdown.init(this.$refs.dropdown, {
            constrainWidth: false
    });
    
    this.intervalTimer =  setInterval(() => {
          this.date = new Date();
        },1000);
      },
    beforeUnmount() {
      console.log('Before destory timer');
      clearInterval(this.intervalTimer);
       
       if (this.dropdown && this.dropdown.destroyed)  {
          this.dropdown.destroy();
       }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/login?message=logout');
      }
    }

  }
    
</script>