<template>
  <aside v-if="this.$store.state.menuStatus">
    <div class="inbound">입고</div>
    <div class="outbound">출고</div>
    <div class="inventory">재고</div>
    <div class="statistics">통계</div>
    <div class="management">관리</div>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped></style>
