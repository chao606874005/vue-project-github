<template>
  <div class="homepage" :style="{'height': mainListHeight +'px'}">
    homepage
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      mainListHeight: document.documentElement.clientHeight,
    }
  },
  computed: {
    ...mapState([
    ]),
  },
  created() {
    // this.$store.state.curHeaderMenu = 'homepage'
    // this.$store.commit('changeCurHeaderMenu','homepage')
    this.changeCurHeaderMenu('homepage')
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
  },
   methods: {
    ...mapMutations([
      'changeCurHeaderMenu', 
    ]),
  }
};
</script>

<style>

</style>
