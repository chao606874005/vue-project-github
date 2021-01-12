<template>
  <a-layout-sider width="228px" class="sider">
    <a-menu
      style="width: 228px"
      :open-keys.sync="openKeys"
      :selectedKeys="[$route.name]"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><a-icon type="appstore" /><span>ES6</span></span>
        <a-sub-menu key="sub3" title="目录">
          <a-menu-item key="es6" @click="routerSkip('')">let 和 const 命令</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><a-icon type="appstore" /><span>ES7</span></span>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-sub-menu key="sub4" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  created() {
    this.changeCurHeaderMenu('knowledge')
  },
  computed: {
    ...mapState([
    ]),
  },
  methods: {
    ...mapMutations([
      'changeCurHeaderMenu',
    ]),
    // 路由跳转
    routerSkip(path) {
      if(this.$route.name === path) return
      this.$router.push({ path: '/knowledge/'+path })
    },
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>