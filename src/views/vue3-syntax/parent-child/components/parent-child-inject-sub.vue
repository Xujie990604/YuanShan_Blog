<template>
  <div class="parent-child-inject-sub">
    依赖注入的孙组件
    <div
      class="content"
      @click="injectSubClick">
      依赖注入的Count: {{ injectInfo }}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'ParentChildInjectSub',
  }
</script>

<script lang="ts" setup>
  import { injectInfoKey, injectInfoClass } from '../types'
  // import type { IInjectInfoAll } from '../types'
  import { inject } from 'vue'

  function injectSubClick() {
    updateInjectInfo()
  }

  // 1. 带有默认值的依赖注入
  const { injectInfo, updateInjectInfo } = inject(injectInfoKey, () => new injectInfoClass(), true)

  // 2.不带默认值的导致，因为导出值可能是 undefined，所以需要加上 as IInjectInfoAll
  // 但是这种情况下的类型系统是不安全的
  // const { injectInfo: injectInfo2, updateInjectInfo: updateInjectInfo2 } = inject(
  //   injectInfoKey
  // ) as IInjectInfoAll
</script>

<style scoped lang="scss"></style>
