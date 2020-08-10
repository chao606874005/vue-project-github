<template>
  <div class="role">
    <div class="role__operate">
      <a-input class="role__operate-search mr16" placeholder="输入用户名查询" />
      <a-select class="mr16" defaultValue="直播状态" style="width: 120px" @change="handleChange">
        <a-select-option value="jack">全部</a-select-option>
        <a-select-option value="lucy">全部</a-select-option>
      </a-select>
      <a-button class="mr16">查询</a-button>
      <a-button class="mr16" type="primary" @click="showModal">添加角色</a-button>
      <a-button class="mr16">冻结</a-button>
      <a-button>解除冻结</a-button>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
// import { roleSearch } from '../../service/'


const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default {
  name: 'role',
  components: {
  },
  created() {
  },
  mounted() {
  },
  data() {
    return {
      data,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,

      visible: false,
      addRoleName: '',
      options: {
        pageNo: 1,
        pageSize: 10
      },
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      console.log(this.addRoleName)
      // this.visible = false;
    },
  }
}
</script>

<style lang="less" scoped>
.mr16{
  margin-right: 16px;
}
.role{
  &__operate{
    display: flex;
    padding: 24px;
    &-search{
      width: 240px;
      margin-right: 16px;
    }
  }
  &__list{
    margin: 0 24px;
    background: #FFF;
  }
  &__add{
    width: 70%;
    margin: 0 auto 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    span{
      line-height: 32px;
    }
    input{
      flex: 1;
    }
  }
}
</style>