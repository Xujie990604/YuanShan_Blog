<template>
  <v-card
    @click="navigateToRoute"
    class="card-hover"
    elevation="2"
    height="auto"
    max-width="400"
    rounded="lg">
    <v-card-item class="pa-4">
      <v-card-title class="text-h6 font-weight-bold mb-2 pa-0">{{ item.title }}</v-card-title>
      <v-card-text class="card-description text-body-1 text-grey-darken-1 pa-0">{{
        item.description
      }}</v-card-text>
    </v-card-item>
    <v-card-actions class="pa-4 pt-0">
      <v-btn
        variant="text"
        color="primary"
        class="px-0 text-body-2"
        >阅读更多</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
  export default {
    name: 'TutorialCard',
  }
</script>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router'

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  })

  const router = useRouter()

  function navigateToRoute() {
    router.push(`/home-page/${props.item.itemRouter}`)
  }
</script>

<style scoped lang="scss">
  .card-hover {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 1px solid rgb(25 118 210 / 15%);
    transition: all 0.25s;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 20px rgb(0 0 0 / 10%) !important;
    }
  }

  .card-description {
    display: -webkit-box;
    height: 3em; /* 设置为2行文字的高度 */
    overflow: hidden;
    line-height: 1.5em;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>
