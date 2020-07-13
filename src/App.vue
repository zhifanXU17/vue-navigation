<template>
  <div id="app">
    <Home />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>

<script>
import Home from "./views/Home"

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
