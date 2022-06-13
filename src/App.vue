<template>
  <div id="app">
    <the-header class="header"></the-header>
    <div class="container">
      <the-menubar class="menu"></the-menubar>
      <router-view class="section"></router-view>
    </div>
    <the-footer class="footer"></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/common/TheHeader';
import TheMenubar from './components/common/TheMenubar';
import TheFooter from './components/common/TheFooter';
export default {
  components: {
    TheHeader,
    TheMenubar,
    TheFooter,
  },
};
</script>

<style>
:root {
  --green: #008837;
  --yellow: #ffb300;
  --navy: #034da2;
  --white: #fff;
  --black: #000000;
  --light-gray: #e6e6e6;
  --gray: #bababa;
  --dark-gray: #666;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.header {
  width: 100vw;
  height: 10vh;
  background: var(--black);
}

.container {
  height: 100vh;
  display: flex;
}

.section {
  background: var(--white);
  width: 100vw;
}

.footer {
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: fixed;
  width: 100vw;
  height: 5vh;
  background: var(--dark-gray);
}
</style>
