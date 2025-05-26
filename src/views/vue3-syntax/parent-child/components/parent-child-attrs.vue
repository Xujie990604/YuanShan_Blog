<template>
  <div class="parent-child-attrs">
    <h2>2. 透传的使用</h2>
    <span @click="$emit('sub-click')"> 透传的子组件</span>
    <span>子组件中消费了 bar: {{ props.bar }}</span>
  </div>
  <ParentChildAttrsSub v-bind="$attrs"></ParentChildAttrsSub>
</template>

<script lang="ts">
  export default {
    name: 'ParentChildAttrs',
  }
</script>

<script lang="ts" setup>
  // import { useAttrs } from 'vue'
  import ParentChildAttrsSub from './parent-child-attrs-sub.vue'
  // const attrs = useAttrs()

  // 1. 如果不声明 bar ，则 attrs 中会存在 bar 属性
  // console.log(attrs)

  // 2. 如果使用 prop 声明了 bar ，则 attrs 中不会存在 bar 属性
  const props = defineProps<{
    bar: string
  }>()
  // console.log(attrs)

  // 1. 如果不使用 emit 声明事件，则 attrs 中会存在 onSubClick 事件
  // console.log(attrs)

  // 2. 如果使用 emit 声明事件，则 attrs 中不会存在 onSubClick 事件，onSubClick 事件在当前页面中消费掉了
  // 下一级组件中无法再调用该事件
  // defineEmits<{
  //   (e: 'sub-click'): void
  // }>()
  // console.log(attrs)
</script>

<style scoped lang="scss"></style>
