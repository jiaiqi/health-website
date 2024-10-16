<script lang="ts" setup>
import {
    ArrowLeft,
    ArrowRight,
} from '@element-plus/icons-vue'
</script>
<template>
    <div class="h-160 ">
        <div class="flex justify-center items-end pt-30px">
            <span class="w-8px h-8px bg-#0E9472 inline-block mr-10px -mt-15px"></span>
            <span class="px-2 font-bold" text="#1D2128 22px">宣传活动</span>
            <span class="w-8px h-8px bg-#0E9472 inline-block ml-10px -mt-15px"></span>
        </div>
        <div class=" flex justify-center font-black font-serif -mt-10px" text="#031D2822 26px">
            CAMPAIGN
        </div>
        <div class="py-6 px-80 flex justify-between">
            <div class="w-25% relative" border="1px solid #E5E5EA">
                <img class="w-100%" src="/img/img2.png" alt="">
                <div class="h-50 p-15px" text=" 16px">
                    <div class="flex justify-between items-end py-5px">
                        <div text="#1D2128 14px" class="font-sans font-bold pt-2" style="border-bottom:5px solid #35B389">
                            电视节目
                        </div>
                        <div>
                            <el-button size="small" color="#35B389" plain>更多</el-button>
                        </div>
                    </div>
                    <div class="">
                        来学习！不能打破的交互设计规则
                    </div>
                    <div>
                        你必须知道的8种产品设计能力你必须知道的8种产品设计能力你必须知道的8种产品设计能力你必须知道的8种产品设计能力提升技...
                    </div>
                </div>
            </div>
            <div class="w-72% grid grid-cols-2 gap-3 p-30px" border="1px solid #E5E5EA">
                <div v-for="item in 6" class=" flex">
                    <img class="w-40%" src="/img/img2.png" alt="">
                    <div class="bg-#fff w-60%">
                        <div class="w-100%  px-5px line-clamp-2 text-ellipsis">煤矿作业场所职业病危所职业病危害防治规所职业病危所职业所职业病危所职业害防治规定
                        </div>
                        <div class="pt-30px px-5px" text="#AEAEB2">2023-08-01</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex py-2  px-80 justify-between">
            <div>
            </div>
            <div>
                <el-button color="#35B389" :icon="ArrowLeft" plain></el-button>
                <el-button color="#35B389" :icon="ArrowRight" style="color:#fff"></el-button>
            </div>
        </div>
    </div>
</template>