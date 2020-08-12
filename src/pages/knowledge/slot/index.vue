
<template>
  <div class="slot">
    <p style="color:red">我是父组件one：默认插槽</p>
    <slotOne>
      <p>我是父组件插槽内容</p>
    </slotOne>
    <br/>

    <p style="color:red">我是父组件two：具名插槽</p>
    <slotTwo>
      <p>啦啦啦，啦啦啦，我是卖报的小行家</p>
      <template slot="header">
          <p>我是name为header的slot</p>
      </template>
      <p slot="footer">我是name为footer的slot</p>
    </slotTwo>
    <br/>

    <p style="color:red">我是父组件three：插槽的默认内容</p>
    <slotThree></slotThree>
    <br/>
    
    
    <p style="color:red">我是父组件Four：编译作用域</p>
    <slotFour>
      <p>{{name}}</p>
    </slotFour>
    <br/>

    
    <p style="color:red">我是父组件Five：作用域插槽</p>
    <slotFive>
      <template slot-scope="user">
        <div v-for="(item, index) in user.data" :key="index">
        {{item}}
        </div>
      </template>
    </slotFive>
  </div>
</template>

<script>
import slotOne from './slot1'
import slotTwo from './slot2'
import slotThree from './slot3'
import slotFour from './slot4'
import slotFive from './slot5'

export default {
  components: {
    slotOne,
    slotTwo,
    slotThree,
    slotFour,
    slotFive
  },
  data() {
    return {
      name: 'Jack'
    }
  },
}
</script>

<style lang="less" scoped>
.slot{
  margin: 24px;
}
</style>