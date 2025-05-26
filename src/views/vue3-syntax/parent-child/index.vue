<template>
  <!-- 分别使用三种方式来体会 普通传值，透传，依赖注入带来的好处 -->
  <div class="my-home">Mouse Position is at : {{ x }} {{ y }}</div>

  <!-- 1. props emit 的方式来实现跨层级传值，事件 -->
  <ParentChildProps
    :userInfo="userInfo"
    :count="count"
    @update-user-info="userInfo.age++"
    @update-count="count++"></ParentChildProps>

  <!-- 2. 透传的方式来实现跨层级传值，事件 -->
  <ParentChildAttrs
    :foo="foo"
    :bar="bar"
    @sub-click="handleSubClick"></ParentChildAttrs>

  <!-- 3. 依赖注入的方式来实现跨层级传值，事件 -->
  <ParentChildInject></ParentChildInject>

  <!--  跳转到后台管理页面-->
  <el-button @click="turnToBackHome">跳转到后台管理页面</el-button>
</template>

<script lang="ts">
  export default {
    name: 'ParentChild',
  }
</script>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'

  // 组合函数的使用
  import { useMouse } from './hooks/mouse-hook'
  // 鼠标在当前页的坐标
  const { x, y } = useMouse()

  // 1. 使用 props emit 的方式来实现跨层级传值，事件
  import ParentChildProps from './components/parent-child-props.vue'
  const userInfo = reactive({
    name: 'xujie',
    age: 18,
  })

  const count = ref(0)

  // 2. 使用透传的方式来实现跨层级传值，事件
  import ParentChildAttrs from './components/parent-child-attrs.vue'
  const foo = reactive({
    name: 'foo',
    age: 19,
  })
  const bar = ref('bar')
  function handleSubClick() {
    foo.age++
  }

  // 3. 依赖注入的方式来实现跨层级传值，事件
  import ParentChildInject from './components/parent-child-inject.vue'
  import { injectInfoKey } from './types'
  import type { IInjectInfo, IUpdateInjectInfo } from './types'
  import { provide } from 'vue'

  const injectInfo: IInjectInfo = reactive({
    name: 'xujie',
    height: 170,
  })

  const updateInjectInfo: IUpdateInjectInfo = function (value = 1) {
    injectInfo.height += value
  }

  console.log(injectInfoKey)

  provide(injectInfoKey, {
    injectInfo,
    updateInjectInfo,
  })

  import { useRouter } from 'vue-router'
  const router = useRouter()

  //  跳转到后台管理页面
  function turnToBackHome() {
    router.push('/back-home')
  }
</script>

<style scoped lang="scss"></style>
