<script lang="ts" setup>
import {
    ArrowLeft,
    ArrowRight,
} from '@element-plus/icons-vue'
</script>
<template>
    <div class="h-210 bg-[url('/img/popularbg.png')]">
        <div class="flex justify-center items-end pt-30px">
            <span class="w-8px h-8px bg-#0E9472 inline-block mr-10px -mt-15px"></span>
            <span class="px-2 font-bold" text="#1D2128 22px">科普资料</span>
            <span class="w-8px h-8px bg-#0E9472 inline-block ml-10px -mt-15px"></span>
        </div>
        <div class=" flex justify-center font-black font-serif -mt-10px" text="#031D2822 26px">
            POPULAR SCIENCE
        </div>
        <div class="py-6 px-80">
            <div class="bg-#ffffffcc flex justify-around p-5">
                <div class="w-20% ">
                    <div text="#1D2128 16px" v-for="item in 10" class="w-100% flex justify-center flex-wrap py-5px">
                        <div class=" w-40px font-sans font-bold pt-2 text-center" style="border-bottom:5px solid #35B389">
                            海报
                        </div>
                    </div>
                </div>
                <div class="w-75% ">
                    <div class="grid grid-cols-5 gap-3">
                        <div v-for="item in 10">
                            <img src="/img/img5.png" alt="">
                            <div class="p-10px bg-#fff">
                                <div>
                                    无烟家庭海报
                                </div>
                                <div class="flex justify-between">
                                    <span text="#AEAEB2 12px">
                                        2024-05-27
                                    </span>
                                    <div class="flex">
                                        <img src="/img/eys.png" alt="">
                                        <span text="#AEAEB2 12px">529</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex py-6  justify-between">
                        <div>
                            <el-button color="#35B389" plain>查看更多</el-button>
                        </div>
                        <div>
                            <el-button color="#35B389" :icon="ArrowLeft" plain></el-button>
                            <el-button color="#35B389" :icon="ArrowRight" style="color:#fff"></el-button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>