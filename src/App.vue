<template>
  <div id="app">
    <!-- <nav class="main-nav">
      <burger></burger>
    </nav>

    <sidebar>
      <ul class="sidebar-panel-nav">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
      </ul>
    </sidebar> -->
    <router-view/>
  </div>
</template>

<script>
import burger from './components/menu/burger'
import sidebar from './components/menu/sidebar'

export default {
  name: 'app',
  components: {
    burger, sidebar
  }
}
</script>

<style>
 .main-nav {
   display: flex;
   justify-content: flex-end;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>