<template>
  <div class="home-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card
            class="mb-6"
            flat
            v-if="!isSubRoute">
            <v-card-item>
              <v-row
                v-for="(category, index) in mainMenuList"
                :key="index"
                class="mb-6">
                <v-col cols="12">
                  <h2 class="text-h5 mb-4">{{ category.title }}</h2>
                  <v-row>
                    <v-col
                      v-for="item in category.children"
                      :key="item.itemName"
                      cols="12"
                      sm="6"
                      md="4"
                      lg="3">
                      <v-card
                        @click="turnToRouter(item.itemRouter)"
                        class="card-hover"
                        elevation="2"
                        height="120">
                        <v-card-item class="d-flex align-center justify-center h-100">
                          <v-card-title class="text-center">{{ item.itemName }}</v-card-title>
                        </v-card-item>
                      </v-card>
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
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  // 判断是否是子路由
  const isSubRoute = computed(() => {
    return route.path !== '/home-page'
  })

  const mainMenuList = reactive([
    {
      title: 'Vue3 语法使用',
      children: [
        {
          itemName: '父子组件传参',
          itemRouter: 'home',
        },
        {
          itemName: '语法测试',
          itemRouter: 'vue-test',
        },
      ],
    },
    {
      title: '三方插件使用',
      children: [
        {
          itemName: '多语言',
          itemRouter: 'vue-i18n',
        },
        {
          itemName: 'Tailwindcss',
          itemRouter: 'tailwindcss-test',
        },
        {
          itemName: 'Vue-use-test',
          itemRouter: 'vue-use-test',
        },
      ],
    },
    {
      title: '项目工程实践',
      children: [
        {
          itemName: '响应式单位',
          itemRouter: 'rem-size',
        },
        {
          itemName: '日志打印',
          itemRouter: 'console-info',
        },
      ],
    },
  ])

  function turnToRouter(itemRouter: string) {
    router.push(`/home-page/${itemRouter}`)
  }
</script>

<style scoped lang="scss">
  .home-page {
    min-height: 100vh;
    background-color: #f8f9fa;
  }

  .card-hover {
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 20px rgb(0 0 0 / 10%) !important;
    }
  }
</style>
