<template>
  <div>
    我是作用域插槽的子组件
    <slot :data="user"></slot>
  </div>
</template>

<script>
export default {
  name: 'slotthree',
  data () {
    return {
      user: [
        {name: 'Jack', sex: 'boy'},
        {name: 'Jone', sex: 'girl'},
        {name: 'Tom', sex: 'boy'}
      ]
    }
  }
}
</script>