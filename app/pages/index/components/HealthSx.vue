<script lang="ts" setup>
import { getHealthSX } from '~/api/home'

const loading = ref(true)
const list = ref<any[]>([])
function getHealthSxList() {
  getHealthSX().then((res) => {
    loading.value = false
    list.value = res.data
  }).catch(() => {
    loading.value = false
  })
}
getHealthSxList()
</script>

<template>
  <div class="bg-#E7F0F5">
    <div>健康陕西</div>
    <div class="min-h-100px">
      <div v-for="(item, index) in list" :key="index">
        {{ item.title_name }}
      </div>
    </div>
  </div>
</template>

<style>

</style>
