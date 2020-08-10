<template>
  <div id="app">
    <Header class="header" activeMenu="live">Header</Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html,body{
  min-width: 1000px;
  height: 100%;
  background-color: #F2F3F4 !important;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
