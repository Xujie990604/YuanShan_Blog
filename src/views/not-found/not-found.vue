<template>
  <div class="not-found">
    <v-container class="d-flex flex-column align-center justify-center fill-height">
      <div class="text-center">
        <div class="error-code">404</div>
        <h1 class="text-h3 font-weight-bold mb-6">页面不存在</h1>
        <p class="text-body-1 mb-8">抱歉，您访问的页面已被移动、删除或从未存在过。</p>

        <v-btn
          color="primary"
          size="large"
          rounded
          prepend-icon="mdi-home"
          @click="goHome">
          返回首页
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function goHome() {
    router.push('/home-page')
  }
</script>

<style scoped lang="scss">
  .not-found {
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;

    .error-code {
      margin-bottom: 24px;
      font-size: 180px;
      font-weight: 900;
      line-height: 1;
      color: #1976d2;
      text-shadow: 4px 4px 0 rgb(25 118 210 / 10%);
      opacity: 0.8;
      animation: float 6s ease-in-out infinite;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0);
    }
  }
</style>
