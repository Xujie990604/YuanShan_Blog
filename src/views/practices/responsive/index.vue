<template>
  <h1>屏幕总宽度为 1080 rem</h1>
  <div class="width-rem-400">400rem</div>
  <div class="width-rem-108">108rem</div>
</template>

<script lang="ts">
  export default {
    name: 'ResponsiveDemo',
  }
</script>

<script lang="ts" setup>
  // setup 逻辑
</script>

<style scoped lang="scss">
  $list: (400, red), (108, yellow);
  @mixin line($width, $color) {
    width: $width;
    height: 30px;
    text-align: center;
    background-color: $color;
    border-radius: 15px;
    margin : {
      bottom: 10px;
    }
  }

  @each $list-key, $list-value in $list {
    .width-rem-#{$list-key} {
      @include line($width: $list-key + rem, $color: $list-value);
    }
  }
</style>
