<script lang="ts" setup>
import {
    ArrowLeft,
    ArrowRight,
} from '@element-plus/icons-vue'
</script>
<template>
    <div class="h-140 bg-#E7F0F5">
        <div class="flex justify-center items-end pt-30px">
            <span class="w-8px h-8px bg-#0E9472 inline-block mr-10px -mt-15px"></span>
            <span class="px-2 font-bold" text="#1D2128 22px">健康西安</span>
            <span class="w-8px h-8px bg-#0E9472 inline-block ml-10px -mt-15px"></span>
        </div>
        <div class=" flex justify-center font-black font-serif -mt-10px" text="#031D2822 26px">
            HEALTHY XI'AN
        </div>
        <div class="py-6 px-80 flex justify-between">
            <div class="w-34% h-284px relative">
                <img class="w-100%" src="/img/img2.png" alt="">
                <div class="w-100% h-60px bg-[#03101010] absolute bottom-0 flex justify-between items-center p-10px font-semibold" text="#fff 16px">
                    <div>煤矿作业场所职业病危害防治规定</div>
                    <div>2023-08-01</div>
                </div>
            </div>
            <div class="w-64% flex justify-between">
                <div class="w-32%">
                    <img class="w-100%  h-65%" src="/img/img2.png" alt="">
                    <div class="bg-#fff h-35%">
                        <div class="py-10px px-5px">煤矿作业场所职业病危害防治规定</div>
                        <div class="py-10px px-5px">2023-08-01</div>
                    </div>
                </div>
                <div class="w-32%">
                    <img class="w-100%  h-65%" src="/img/img2.png" alt="">
                    <div class="bg-#fff h-35%">
                        <div class="py-10px px-5px">煤矿作业场所职业病危害防治规定</div>
                        <div class="py-10px px-5px">2023-08-01</div>
                    </div>
                </div>
                <div class="w-32%">
                    <img class="w-100%  h-65%" src="/img/img2.png" alt="">
                    <div class="bg-#fff h-35%">
                        <div class="py-10px px-5px">煤矿作业场所职业病危害防治规定</div>
                        <div class="py-10px px-5px">2023-08-01</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex py-6 px-80 justify-between">
            <div>
                <el-button color="#35B389" plain>查看更多</el-button>
            </div>
            <div>
                <el-button color="#35B389" :icon="ArrowLeft" plain></el-button>
                <el-button color="#35B389" :icon="ArrowRight" style="color:#fff"></el-button>
            </div>
        </div>
    </div>
</template>