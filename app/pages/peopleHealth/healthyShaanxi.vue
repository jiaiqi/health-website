<script lang="ts" setup>
import { getHealthSX } from '~/api/home'
const title = ref('健康陕西')
const routePath = [{ name: '首页', path: '/' }, { name: title }]
const timeNow = ref('1')
const valuedate = ref('')
const total = ref(0)
const infoType = ref('1')
const infocss = ref('background:linear-gradient(88.92deg, rgba(92,224,168,0.41) 1.07%,rgba(195,228,214,0.22) 99.94%);padding-left:10px')
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
  //   getList()
}
function typeClick(item) {
  infoType.value = item
}
</script>

<template>
  <div class="bg-#F7F9FD bg-[url('/img/index.png')] bg-no-repeat ">
    <PublicSearch />
    <div class=" px-80">
      <div class=" bg-#fff">
        <CommonPageContainer :title="title" :path="routePath">
          <div class="flex justify-between mt-20px">
            <div class="w-85%" v-if="infoType == '政策解读'">
              <PublicList></PublicList>
              <PublicPagination :page-size="queryParams.pageSize" :page-num="queryParams.pageNum" :total="total"
                @change="onPageChange" />
            </div>
            <div class="w-85%" v-if="infoType == '健康陕西行动'">

            </div>
            <div class="w-85%" v-if="infoType == '1'">
              <div>
                <div class="flex h-40px justify-between w-95%">
                  <div class="flex items-center">
                    <span class="w-8px h-8px bg-#0E9472 inline-block ml-10px "></span>
                    <span class="pl-4 font-extrabold" text="#016738">政策解读</span>
                  </div>
                  <div class="flex cursor-pointer" @click="typeClick('政策解读')">
                    <div class="h-20px">更多</div>
                    <img class="h-22px ml-5px" src="/img/more.png" alt="">
                  </div>
                </div>
                <div class="w-95% bg-#F7F9FD p-5 flex justify-between">
                  <div class="w-40% h-240px">
                    <img class="w-100% h-100%" src="/img/img4.png" alt="">
                  </div>
                  <div class="w-58%">
                    <div class="py-5px cursor-pointer" v-for="item in 4">
                      <div>AI模型可为癌症患者选择最佳疗法</div>
                      <div class="flex w-100% justify-between" text="#8E8E93">
                        <span>工业和信息化部</span>
                        <span>2023-03-20 19:22</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 w-95%">
                <div class="flex h-40px justify-between w-95% ">
                  <div class="flex items-center">
                    <span class="w-8px h-8px bg-#0E9472 inline-block ml-10px "></span>
                    <span class="pl-4 font-extrabold" text="#016738">健康陕西行动</span>
                  </div>
                  <div class="flex cursor-pointer" @click="typeClick('健康陕西行动')">
                    <div class="h-20px">更多</div>
                    <img class="h-22px ml-5px" src="/img/more.png" alt="">
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-3">
                  <div v-for="item in 8">
                    <div>
                      <img src="/img/img2.png" alt="">
                    </div>
                    <div class="p-2">煤矿作业场所职业病危害防治规定</div>
                    <div class="flex justify-between items-center p-2">
                      <div>2023-08-01</div>
                      <div class="p-1" text="#35B389 14px" border="1px solid #35B389">查看详情</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="w-15%">
              <div>
                <div class=" flex items-center py-5px px-10px rounded-tr rounded-tl h-10px"
                  style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);">
                </div>
                <div class="rounded-br rounded-bl" border="2px solid #50bc8d">
                  <div class="p-2 pl-10 cursor-pointer" :style="infoType == '政策解读' ? infocss : ''" @click="typeClick('政策解读')">
                    <i v-if="infoType == '政策解读'"
                      class="i-ri:arrow-right-circle-line cursor-pointer text-#50bc8d w-25px h-25px" />
                    政策解读
                  </div>
                  <div class="p-2 pl-10 cursor-pointer" :style="infoType == '健康陕西行动' ? infocss : ''"
                    @click="typeClick('健康陕西行动')">
                    <i v-if="infoType == '健康陕西行动'"
                      class="i-ri:arrow-right-circle-line cursor-pointer text-#50bc8d w-25px h-25px" />
                    健康陕西行动
                  </div>
                </div>
              </div>
              <div class="mt-20px">
                <div class=" flex items-center py-5px px-10px rounded-tr rounded-tl h-30px"
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
