<template>
  <header>
    <i class="fa-solid fa-bars icon" @click="clickIcon"></i>
    <img class="logo" src="@/assets/logo_symbal.png" />
    <div class="title">Hyundai Elevator TM WCS</div>
  </header>
</template>

<script>
export default {
  methods: {
    clickIcon() {
      const menuStatus = this.$store.state.menuStatus;
      if (menuStatus) {
        this.$store.commit('closeMenu');
      } else {
        this.$store.commit('openMenu');
      }
    },
  },
};
</script>

<style scoped>
header {
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}

header > * {
  margin: 0 15px;
}
header .icon {
  color: var(--white);
  font-size: 40px;
  cursor: pointer;
}

header .logo {
  height: 30px;
}

header .title {
  color: var(--white);
  font-size: 30px;
  cursor: pointer;
}
</style>
