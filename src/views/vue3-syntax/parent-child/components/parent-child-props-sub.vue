<template>
  <div class="parent-child-props-sub">
    <span>普通传值的孙组件</span>
    <div
      class="user-info"
      @click="updateUserInfo">
      userInfo: {{ userInfo }}
    </div>
    <div
      class="count"
      @click="updateCount">
      count: {{ count }}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'ParentChildPropsSub',
  }
</script>

<script lang="ts" setup>
  import { toRefs } from 'vue'

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

  const emits = defineEmits<{
    (e: 'update-user-info-sub'): void
    (e: 'update-count-sub'): void
  }>()

  function updateUserInfo() {
    emits('update-user-info-sub')
  }

  function updateCount() {
    emits('update-count-sub')
  }
</script>

<style scoped lang="scss"></style>
