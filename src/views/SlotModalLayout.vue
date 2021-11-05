<template lang="">
    <div class="modal-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .modal-container {
  border: 1px solid #ddd;
}
</style>