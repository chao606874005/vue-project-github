<template>
  <div class="homepage" :style="{'height': mainListHeight +'px'}">
    homepage
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainListHeight: document.documentElement.clientHeight,
    }
  },
  mounted() {
    let that = this
    window.onresize = () => {
        if (!that.timer) {
            that.timer = true
            setTimeout(() => {
                that.timer = false
                that.mainListHeight = document.documentElement.clientHeight
            }, 600)
        }
    }
  }
};
</script>

<style>

</style>
