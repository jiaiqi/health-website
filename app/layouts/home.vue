<script setup lang="ts">
</script>

<template>
  <el-scrollbar height="100vh">
    <Navbar />
    <div class="min-h-[calc(100vh_-_380px)]">
      <slot />
    </div>
    <Footer />
  </el-scrollbar>
</template>
