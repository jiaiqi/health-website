<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <div>
      <NuxtLoadingIndicator color="var(--color-primary)" />
      <el-config-provider :locale="zhCn">
        <NuxtPage
          :transition="{
            name: 'bounce',
            mode: 'out-in',
          }"
        />
      </el-config-provider>
    </div>
  </NuxtLayout>
</template>

<style>
@import '~/assets/style/global.scss';
</style>
