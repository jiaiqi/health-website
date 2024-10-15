<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center">
    <el-empty description="敬请期待" />
    <div>
      <button btn @click="router.back()">
        返回123
      </button>
    </div>
  </main>
</template>
