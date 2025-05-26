<!-- eslint-disable vue/no-setup-props-destructure -->
<template>
  <div class="parent-child-props">
    <h2>1. props emits 的使用</h2>
    <span>普通传值的子组件</span>

    <ParentChildPropsSub
      :userInfo="userInfo"
      :count="count"
      @update-user-info-sub="$emit('update-user-info')"
      @update-count-sub="$emit('update-count')"></ParentChildPropsSub>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'ParentChildProps',
  }
</script>

<script lang="ts" setup>
  import { toRefs } from 'vue'

  import ParentChildPropsSub from './parent-child-props-sub.vue'

  interface IProps {
    userInfo: {
      name: string
      age: number
    }
    count: number
  }

  const props = withDefaults(defineProps<IProps>(), {
    userInfo: () => ({
      name: 'tom',
      age: 16,
    }),
    count: 0,
  })
  const { userInfo, count } = toRefs(props)

  defineEmits<{
    (e: 'update-user-info'): void
    (e: 'update-count'): void
  }>()
</script>

<style scoped lang="scss"></style>
