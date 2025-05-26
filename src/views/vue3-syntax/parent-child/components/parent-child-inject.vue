<template>
  <h2>3. 依赖注入的使用</h2>
  <div class="parent-child-inject">
    依赖注入的子组件
    <ParentChildInjectSub></ParentChildInjectSub>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'ParentChildInject',
  }
</script>

<script lang="ts" setup>
  import ParentChildInjectSub from './parent-child-inject-sub.vue'
</script>

<style scoped lang="scss"></style>
