<template>
  <div class="home-page">
    <v-container class="max-width-container">
      <v-row>
        <v-col cols="12">
          <v-card
            class="mb-6 main-card"
            flat
            v-if="!isSubRoute">
            <v-card-item>
              <v-row
                v-for="(category, index) in mainMenuList"
                :key="index"
                class="mb-10">
                <v-col cols="12">
                  <div class="category-title">
                    <h2 class="text-h5 font-weight-medium">{{ category.title }}</h2>
                  </div>
                  <v-row
                    class="mt-4"
                    justify="start">
                    <v-col
                      v-for="item in category.children"
                      :key="item.title"
                      cols="12"
                      sm="6"
                      md="4"
                      lg="4"
                      class="card-column">
                      <TutorialCard :item="item" />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>

          <!-- 子路由内容 -->
          <RouterView v-if="isSubRoute"></RouterView>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'HomePage',
  }
</script>

<script lang="ts" setup>
  import { reactive, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import TutorialCard from './components/TutorialCard.vue'

  const route = useRoute()

  // 判断是否是子路由
  const isSubRoute = computed(() => {
    return route.path !== '/home-page'
  })

  const mainMenuList = reactive([
    {
      title: 'Vue3 语法',
      children: [
        {
          title: '组件传值',
          description: 'Vue 的多种组件传值方式',
          itemRouter: 'home',
        },
        {
          title: 'Vue 3 语法测试',
          description: 'Vue 3 语法测试',
          itemRouter: 'vue-test',
        },
      ],
    },
    {
      title: '三方工具使用',
      children: [
        {
          title: 'Vue I18n',
          description: 'Vue I18n 使用',
          itemRouter: 'vue-i18n',
        },
        {
          title: 'Tailwindcss 使用',
          description: '探究 CSS 原子化的魅力',
          itemRouter: 'tailwindcss-test',
        },
        {
          title: 'Vue use 使用',
          description: '领略 Hook 的魅力',
          itemRouter: 'vue-use-test',
        },
      ],
    },
    {
      title: '项目工程实践',
      children: [
        {
          title: '响应式布局',
          description: '响应式布局的实现',
          itemRouter: 'rem-size',
        },
        {
          title: '日志打印',
          description: '日志打印的实现',
          itemRouter: 'console-info',
        },
      ],
    },
  ])
</script>

<style scoped lang="scss">
  .home-page {
    min-height: 100vh;
    margin: 0 auto;
    background-color: #fff;
  }

  .max-width-container {
    max-width: 1280px !important;
    margin: 0 auto;
  }

  .main-card {
    background-color: transparent !important;
  }

  .page-title {
    padding-left: 12px;
  }

  .category-title {
    padding-left: 12px;
    margin-bottom: 12px;
    border-left: 4px solid #1976d2;
  }

  .card-column {
    padding: 8px 12px;
  }
</style>
