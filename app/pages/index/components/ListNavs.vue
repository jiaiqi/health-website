<script setup lang="ts">
const router = useRouter()
import jksy from '~~/public/img/jksy.png'
import ggws from '~~/public/img/ggws.png'
import jbcs from '~~/public/img/jbcs.png'
import fyjk from '~~/public/img/fyjk.png'
import mbfz from '~~/public/img/mbfz.png'
import xljk from '~~/public/img/xljk.png'
import zyys from '~~/public/img/zyys.png'
import ggaq from '~~/public/img/ggaq.png'
const cateData = [{
    title: '健康素养',
    icon: jksy,
    list: [
        {
            title: '健康知识',

        },
        {
            title: '戒烟限酒',

        },
        {
            title: '科技创新',
        },
        {
            title: '>',
            subList: ['健康技能', '适量运动', '其他'],
        },
    ],
}, {
    title: '公共卫生',
    icon: ggws,
    list: [
        {
            title: '新冠肺炎',
        },
        {
            title: '传染病预防',
        },
        {
            title: '预防接种',

        },
        {
            title: '>',
            subList: ['地方病预防', '职业健康', '环境健康', '其他'],

        },
    ],
}, {
    title: '疾病常识',
    icon: jbcs,
    list: [
        {
            title: '呼吸系统疾病',
        },
        { title: '循环系统疾病' },
        {
            title: '>',
            subList: ['泌尿系统疾病', '消化系统疾病', '运动系统疾病', '内分泌系统疾病', '神经系统疾病', '口腔健康', '康复护理', '其他'],

        },
    ],
}, {
    title: '妇幼保健',
    icon: fyjk,
    list: [
        {
            title: '儿童保健',
        },
        { title: '妇女保健' },
        {
            title: '孕产保健',

        },
        {
            title: '>',
            subList: ['其他'],

        },
    ],
}, {
    title: '慢病防治',
    icon: mbfz,
    list: [
        {
            title: '高血压',
        },
        { title: '高血脂' },
        {
            title: '糖尿病',

        },
        {
            title: '>',
            subList: ['脑卒中', '慢阻肺', '哮喘', '其他'],

        },
    ],
}, {
    title: '心理健康',
    icon: xljk,
    list: [
        {
            title: '心理疾病',
        },
        { title: '儿童青少年心理' },
        {
            title: '婚姻家庭',

        },
        {
            title: '>',
            subList: ['社会关系', '老年心理', '其他'],

        },
    ],
}, {
    title: '中医养生',
    icon: zyys,
    list: [
        {
            title: '中医知识',
        },
        { title: '非药物疗法' },
        {
            title: '情志养生',

        },
        {
            title: '>',
            subList: ['时令养生', '起居养生', '运动养生', '饮食养生', '其他'],

        },
    ],
}, {
    title: '公共安全',
    icon: ggaq,
    list: [
        {
            title: '急救知识',
        },
        { title: '事故灾害' },
        {
            title: '其他',
        },
        {
            title: '>',
        },
    ],
}]

const currentCate = ref(-1)
const currentSubCate = ref('')
const currentSubCateList = computed(() => {
    if (currentCate.value !== -1) {
        const cate = cateData[currentCate.value] || { list: [] }
        return cate.list.find(item => item.title === currentSubCate.value)
    }
    return null
})
</script>

<template>
    <div class="py-6 px-80 h-90 flex pos-relative">
        <div class="m-x-auto container  w-40%">
            <div class="mb-20px  rounded-22px  px-20px py-14px  xl:mb-0" @mouseleave="currentCate = -1">
                <div>
                    <div class="left w-100% ">
                        <div v-for="(item, index) in cateData" :key="item.title" class="content flex items-center"
                            :class="{ active: currentCate === index }" @mouseover="currentCate = index">
                            <img :src="item.icon" alt="" class="mr-10px">
                            <div class="sub-title  pr-15px font-bold" text="#424242 16px ">
                                {{ item.title }}
                            </div>
                            <ul class="flex  justify-between  w-75%">
                                <li v-for="listItem in item.list" :key="listItem.title"
                                    class="list-decorate list-item lh-34px pr-20px" text="14px "
                                    hover="text-#0E9472 cursor-pointer" @mouseenter="currentSubCate = listItem.title">
                                    {{ listItem.title }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class=" z-2 pos-absolute h-90 min-h-90 flex-1  xl:min-w-500px left-42% top-0px">
                        <div v-if="currentSubCateList && currentSubCateList.title == '>'"
                            class="  h-full w-full flex flex-col  bg-#ffffffcc p-15px xl:w-70%"
                            @mouseleave="currentCate = -1" @mousemove="currentSubCate = currentSubCateList.title">
                            <div class="h-full w-full p-15px">
                                <div class="item-box" grid="~ cols-2 gap-10px">
                                    <div v-for="subItem in currentSubCateList.subList" :key="subItem"
                                        class=" text-center text-14px line-height-34px "
                                        hover="text-#0E9472 cursor-pointer">
                                        <span class="w-5px h-5px bg-#0E9472 inline-block mr-10px"></span>
                                        <span>
                                            {{ subItem }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-60%">
            <!-- <img :src="'/img/swiper.png'" class=""> -->
            <el-carousel motion-blur h-full height="100%" trigger="click" :autoplay="false">
                <el-carousel-item v-for="item in 2" :key="item">
                    <el-image class="h-full w-full" src="/img/swiper.png" fit="fill" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
