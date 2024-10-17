<script lang="ts" setup>
const props = defineProps<{
  list?: any[]
  type?: string
}>()
const emit = defineEmits<{
  (e: 'clickItem', item: any): void
}>()
const mockData = [
  {
    title: '全省职业健康知识有奖竞答活动火热进行中',
    blurd: '动动手指，活动期间学习职业健康知识每天都有奖品拿，怎么样是不是很心动，赶快看下面的规则吧；活动时间：2022年8月17日-21日；参与流程：活动入口方式一，长按识别活动二维码活...',
    info: '陕西百姓健康',
    time:'2023-12-07',
    url:'/img/swiper.png'
  },
  {
    title: '全省职业健康知识有奖竞答活动火热进行中',
    blurd: '动动手指，活动期间学习职业健康知识每天都有奖品拿，怎么样是不是很心动，赶快看下面的规则吧；活动时间：2022年8月17日-21日；参与流程：活动入口方式一，长按识别活动二维码活...',
    info: '陕西百姓健康',
    time:'2023-12-07',
    url:'/img/swiper.png'
  },
  {
    title: '全省职业健康知识有奖竞答活动火热进行中',
    blurd: '动动手指，活动期间学习职业健康知识每天都有奖品拿，怎么样是不是很心动，赶快看下面的规则吧；活动时间：2022年8月17日-21日；参与流程：活动入口方式一，长按识别活动二维码活...',
    info: '陕西百姓健康',
    time:'2023-12-07',
    url:'/img/swiper.png'
  },
  {
    title: '全省职业健康知识有奖竞答活动火热进行中',
    blurd: '动动手指，活动期间学习职业健康知识每天都有奖品拿，怎么样是不是很心动，赶快看下面的规则吧；活动时间：2022年8月17日-21日；参与流程：活动入口方式一，长按识别活动二维码活...',
    info: '陕西百姓健康',
    time:'2023-12-07',
    url:'/img/swiper.png'
  },
  {
    title: '全省职业健康知识有奖竞答活动火热进行中',
    blurd: '动动手指，活动期间学习职业健康知识每天都有奖品拿，怎么样是不是很心动，赶快看下面的规则吧；活动时间：2022年8月17日-21日；参与流程：活动入口方式一，长按识别活动二维码活...',
    info: '陕西百姓健康',
    time:'2023-12-07',
    url:'/img/swiper.png'
  },
 
]
const list = computed(() => {
  if (props.list) {
    return props.list
  }
  else {
    return mockData
  }
})

function handleClickItem(item: any) {
  emit('clickItem', item)
}
</script>

<template>
  <div class="w-full gap-y-30px pr-30px" >
    <div
      v-for="item in list" :key="item.id"
      class="cursor-pointer overflow-hidden bg-#F7F9FD rounded-10 rounded-6px flex my-20px"
      @click="handleClickItem(item)"
    >
      <slot name="image">
        <img :src="item.url ? item.url : '/img/news_img.jpg'"
          class="inline-block h-80px w-full md:h-158px w-30%"
        >
      </slot>

      <div class="px-24px py-16px w-60%">
        <div class="truncate text-size-18px text-#0E9472 font-700 line-height-26px" :title="item.title">
          {{ item.title }}
        </div>
        <div class="mt-5px text-ellipsis text-#424242  line-clamp-2" >
          {{ item.blurd }}
        </div>
        <div class="pt-20px w-50% flex justify-between items-center" text="#AEAEB2">
          <span>
            {{ item.info }}
          </span>
          <el-divider direction="vertical" />
          <span>
            {{ item.time }}
          </span>
        </div>
      </div>
     
    </div>
  </div>
  
</template>

<style lang="scss" scoped></style>
