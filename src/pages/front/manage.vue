<template>
  <div class="account" :style="{'height': mainListHeight +'px'}">
    <a-layout>
        <Aside class="aside"></Aside>
        <a-layout-content class="content">
          <TitleBar></TitleBar>
          <router-view></router-view>
        </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Aside from '../../components/front/Aside'
import TitleBar from '../../components/TitleBar'

export default {
  name: 'account',
  components: {
    Aside,
    TitleBar
  },
   data() {
    return {
      mainListHeight: document.documentElement.clientHeight - 60
    }
  },
  computed: {
    ...mapState([
    ]),
  },
  mounted() {
    let that = this
    window.onresize = () => {
        if (!that.timer) {
            that.timer = true
            setTimeout(() => {
                that.timer = false
                that.mainListHeight = document.documentElement.clientHeight - 60
            }, 600)
        }
    }
  },
  methods: {
    ...mapMutations([
      'changeCurHeaderMenu', 
    ]),
  }
}
</script>

<style lang="less" scoped>
.account{
  overflow: hidden;
}
.ant-layout.ant-layout-has-sider{
  height: 100%;
}
</style>
<style lang="less">

</style>