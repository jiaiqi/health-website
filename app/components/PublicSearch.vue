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
function hotSearchClick(item: any) {
    inputVal.value = item
}
getHealthSxList()
</script>

<template>
    <div class="">
        <div class="h-40">
            <div class="h-30 flex items-center pl-120 relative">
                <div class="right w-60% flex items-center py-5px bg-#fff">
                    <input v-model="inputVal" placeholder="请输入搜索信息" class="min-w-0 flex-1 indent-16px outline-none">
                    <i class="i-ri:close-circle-line cursor-pointer text-gray opacity-0"
                        :class="{ 'opacity-100': inputVal }" @click="clearInput" />
                    <div  @click="onSearch" class="w-120px h-50px mr-10px flex items-center justify-center cursor-pointer" style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);">
                        <i class="i-ri:search-line cursor-pointer text-#fff w-25px h-25px" />
                    </div>
                </div>
            </div>
            <div class="flex items-center pl-120 -mt-6" text="#fff">
                <div>热门搜索：</div>
                <span class="pl-2  cursor-pointer" v-for="item in hotSearch" @click="hotSearchClick(item)">{{ item }}</span>
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
