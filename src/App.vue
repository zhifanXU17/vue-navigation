<template>
  <div id="app">
    <a-layout>

      <a-layout-sider theme="light">
        <div class="logo">
          <a-icon type="fire" />
          <a class="logoText" href="/">阳光导航</a>
        </div>

        <siderBar />
      </a-layout-sider>

      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: '12px 50px', lineHeight: '0', minWidth: '1065px' }">
          <headerBar />
        </a-layout-header>

        <a-layout-content :style="{ margin: '24px 16px 0', minWidth: '1033px' }">
          <div :style="{ padding: '24px', background: '#fff', }">
            <router-view/>
          </div>
        </a-layout-content>

        <a-layout-footer :style="{ textAlign: 'center', background: 'black', color: 'white',marginTop: '24px',padding: '86px 144px 93px 144px', minWidth: '1065px' }">
          <footerBar />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .logo {
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 1px solid #e8e8e8;
  }

  .logoText {
    color: rgba(0, 0, 0, 0.65);
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }
</style>

<script>
  import headerBar from "./components/headerBar"
  import siderBar from "./components/siderBar"
  import footerBar from "./components/footerBar"

  export default {
    name: 'App',
    components: {
      headerBar,
      siderBar,
      footerBar
    }
  }
</script>
