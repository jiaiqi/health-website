<script lang="ts" setup>
import { getHealthSX } from '~/api/home'
const title = ref('头条资讯')
const routePath = [{ name: '首页', path: '/' }, { name: title }]
const timeNow = ref('1')
const valuedate = ref('')
const total = ref(0)
const queryParams = reactive(
  {
    pageSize: 9,
    pageNum: 1,
  },
)
const timeYS = ref('background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);color:#fff')
const timeNo = ref('background:none;color:#333;border:1px solid rgba(229,229,234,1);')
function clickTime(item) {
    timeNow.value = item
}
// 分页参数更改
function onPageChange(params: { pageNum: number, pageSize: number }) {
  queryParams.pageNum = params.pageNum
  queryParams.pageSize = params.pageSize
}
</script>

<template>
    <div class="bg-#F7F9FD bg-[url('/img/index.png')] bg-no-repeat ">
        <PublicSearch />
        <div class=" px-80">
            <div class=" bg-#fff">
                <CommonPageContainer :title="title" :path="routePath">
                    <div class="flex justify-between mt-20px">
                        <div class="w-85%">
                            <div class="flex h-40px">
                                <div class="w-68px p-8px rounded-sm cursor-pointer" :style="timeNow == 1 ? timeYS : timeNo"
                                    @click="clickTime(1)">近一周</div>
                                <div class="w-68px p-8px rounded-sm mx-10px cursor-pointer"
                                    :style="timeNow == 2 ? timeYS : timeNo" @click="clickTime(2)">近一月</div>
                                <div class="w-68px p-8px rounded-sm cursor-pointer" :style="timeNow == 3 ? timeYS : timeNo"
                                    @click="clickTime(3)">近半年</div>
                                <div class=" ml-10px">
                                    <el-date-picker style="height:100%" v-model="valuedate" type="daterange"
                                        range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" size="large" />
                                </div>
                            </div>
                            <div class="">
                                <PublicList></PublicList>
                                <PublicPagination  :page-size="queryParams.pageSize"
                                    :page-num="queryParams.pageNum" :total="total" @change="onPageChange" />
                            </div>
                        </div>
                        <div class="w-15%">
                            <div>
                                <div class=" flex items-center py-5px px-10px rounded-tr rounded-tl h-40px"
                                    style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);">
                                    <img src="/img/tj.png" alt="">
                                    <div class="pl-15px " text="#fff 16px">推荐</div>
                                </div>
                                <div class="py-5px px-10px rounded-br rounded-bl" border="2px solid #50bc8d">
                                    <div v-for="item in 3">
                                        <img src="/img/img3.png" alt="">
                                        <div class="py-10px" text="14px">全省职业健康知识有奖竞答活动火热进行中</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CommonPageContainer>
            </div>
        </div>
    </div>
</template>

<style></style>
