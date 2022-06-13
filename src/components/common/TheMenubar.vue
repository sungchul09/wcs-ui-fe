<template>
  <aside v-if="this.$store.state.menuStatus">
    <div class="inbound">
      <i class="fa-solid fa-house"></i>
      <p>홈</p>
    </div>
    <div class="inbound">
      <i class="fa-solid fa-right-to-bracket"></i>
      <p>입고</p>
    </div>
    <div class="outbound">
      <i class="fa-solid fa-truck-moving"></i>
      <p>출고</p>
    </div>
    <div class="inventory">
      <i class="fa-solid fa-boxes-stacked"></i>
      <p>재고</p>
    </div>
    <div class="statistics">
      <i class="fa-solid fa-chart-pie"></i>
      <p>통계</p>
    </div>
    <div class="management">
      <i class="fa-solid fa-clipboard-check"></i>
      <p>관리</p>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
aside {
  background: var(--white);
  border: 1px solid var(--light-gray);
  width: 30vw;
}

div {
  font-size: 25px;
  margin: 10px;
  color: var(--dark-gray);
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

div:hover {
  background-color: var(--light-gary);
}

div i {
  min-width: 50px;
}
</style>
