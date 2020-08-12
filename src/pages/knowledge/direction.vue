<template>
  <div class="role">
    指令1
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';


export default {
  name: 'role',

  created() {
  },
  mounted() {
  },
  data() {
    return {
      ...mapState([
      ]),
    }
  },
  methods: {
   ...mapMutations([
    ]),
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