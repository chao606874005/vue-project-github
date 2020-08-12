<template>
  <div class="header">
    <div class="back">
      {{ curTitle }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'titleBar',
  props: {
    // 创建直播来源
    curLiveTitle: {
      type: String
    },
    curPointTitle: {
      type: String
    }
  },
  computed: {
    ...mapState([
      'curHeaderMenu',
    ]),
    curTitle() {
      let title = this.curHeaderMenu
      return title
    }
  },
  created() {
  },
  methods: {
    ...mapMutations([
    ]),
  }
}
</script>


<style lang="less" scoped>
.header{
  background: #FFF;
  height: 56px;
  line-height: 56px;
}
.back{
  height: 56px;
  line-height: 56px;
  padding: 0 24px;
  font-size: 16px;
  color: #000000;
  font-weight: bold;
  overflow: hidden;
  &__arrow{
    margin-right: 16px;
    cursor: pointer;
  }
}
</style>