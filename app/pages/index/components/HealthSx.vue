<script lang="ts" setup>
import { getHealthSX } from '~/api/home'
import bg from 'public/img/banner.png'
const inputVal = ref('')
const loading = ref(true)
const list = ref<any[]>([])
const searchValue = ref('')
const hotSearch = ref<any[]>([
  "高血压", "糖尿病", "冠心病", "关节炎"
])
// 搜索
function onSearch() {
  searchValue.value = inputVal.value
  // getList()
  navigateTo({
    path: `/peopleHealth/advancedSearch`,
    query: {
      data: searchValue.value,
    },
  })
}
function clearInput() {
  inputVal.value = ''
}
function getHealthSxList() {
  getHealthSX().then((res) => {
    loading.value = false
    list.value = res.data
  }).catch(() => {
    loading.value = false
  })
}
function hotSearchClick(item:any) {
  inputVal.value=item
}
getHealthSxList()
</script>

<template>
  <div class="bg-#E7F0F5">
    <div class="h-40" :style="{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }">
      <div class="h-30 flex items-center pl-120">
        <div class="right w-60% flex items-center py-5px">
          <input v-model="inputVal" placeholder="请输入搜索信息" class="min-w-0 h-12 flex-1 indent-18px outline-none">
          <i class="i-ri:close-circle-line cursor-pointer text-gray opacity-0 -ml-6" :class="{ 'opacity-100': inputVal }"
            @click="clearInput" />
          <el-button type="info" size="large" class="mx-20px md:w-96px"
            style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);"
            @click="onSearch">
            搜索
          </el-button>
        </div>
        <div class="right h-12 w-36 pl-6 text-[#fff] font-bold flex items-center absolute right-0 cursor-pointer"
          style="background: linear-gradient(-44deg, rgba(251,165,28,1) -1.24%,rgba(251,165,165,1) 98.64%)">
          <img :src="'/img/heart.png'" class="h-25px pr-2">
          关爱模式
        </div>
      </div>
      <div class="flex items-center pl-120 -mt-6">
        <div>热门搜索：</div>
        <span class="pl-2  cursor-pointer"  v-for="item in hotSearch" @click="hotSearchClick(item)">{{ item }}</span>
      </div>
    </div>

    <!-- <div class="min-h-100px">
      <div v-for="(item, index) in list" :key="index">
        {{ item.title_name }}
      </div>
    </div> -->
  </div>
</template>

<style></style>
