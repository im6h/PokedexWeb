<template>
  <div >
    <transition name="fade" appear>
      <footer>
        <p>Copyright &copy; 2019 by Vu Hai Dang</p>
      </footer>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* css animation */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave {
}
.fade-leave-active {
  opacity: 0;
}
</style>
