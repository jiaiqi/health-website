<script lang="ts" setup>
import {
    ArrowLeft,
    ArrowRight,
} from '@element-plus/icons-vue'
const level = ref('3')
</script>
<template>
    <div class="h-140 py-6 px-80">
        <div class="w-100% flex justify-between">
            <div class="w-40%">
                <div class="flex  items-end pt-30px">
                    <span class="px-2 font-bold" text="#1D2128 22px">专家库</span>
                    <span class="w-8px h-8px bg-#0E9472 inline-block ml-10px -mt-15px"></span>
                </div>
                <div class=" flex  font-black font-serif -mt-10px" text="#031D2822 26px">
                    EXPERT DATABASE
                </div>
            </div>
            <div class="w-16% pt-40px">
                <el-button color="#35B389" :icon="ArrowLeft" plain></el-button>
                <el-button color="#35B389" :icon="ArrowRight" style="color:#fff"></el-button>
                <el-button color="#35B389" plain>查看更多</el-button>
            </div>
        </div>

        <div class="flex py-5 justify-between">
            <div class="pt-5">
                <div text="#1D2128 16px" class="font-sans font-bold pt-2"
                    :style="level == 1 ? 'border-bottom:5px solid #35B389' : 'border-bottom:none'">省级</div>
                <div text="#1D2128 16px" class="font-sans font-bold pt-2"
                    :style="level == 2 ? 'border-bottom:5px solid #35B389' : 'border-bottom:none'">市级</div>
                <div text="#1D2128 16px" class="font-sans font-bold pt-2"
                    :style="level == 3 ? 'border-bottom:5px solid #35B389' : 'border-bottom:none'">区县级</div>
            </div>
            <div class="w-90% flex justify-between">
                <div class="w-18% relative">
                    <div class="w-45px rounded-tl-10px rounded-br-10px absolute top-2 left-2" style="background: linear-gradient(-44deg, rgba(251,165,28,1) -1.24%,rgba(251,165,165,1) 98.64%);color:#fff;font-size: 14px;">
                        已认证
                    </div>
                    <div>
                        <img src="/img/person.png" alt="">
                    </div>
                    <div class="py-10px flex justify-between">
                        <span class="font-bold" text="14px">孙忆枫</span>
                        <span style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);border-radius: 3px;"
                            text="#fff 14px">主任医师</span>
                    </div>
                    <div text="#AEAEB2 14px">
                        西安交通大学第二附属医院
                    </div>
                </div>
                <div class="w-18%  relative">
                    <div class="w-45px rounded-tl-10px rounded-br-10px absolute top-2 left-2" style="background: linear-gradient(-44deg, rgba(251,165,28,1) -1.24%,rgba(251,165,165,1) 98.64%);color:#fff;font-size: 14px;">
                        已认证
                    </div>
                    <div>
                        <img src="/img/person.png" alt="">
                    </div>
                    <div class="py-10px flex justify-between">
                        <span class="font-bold" text="14px">孙忆枫</span>
                        <span style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);border-radius: 3px;"
                            text="#fff 14px">主任医师</span>
                    </div>
                    <div text="#AEAEB2 14px">
                        西安交通大学第二附属医院
                    </div>
                </div>
                <div class="w-18%">
                    <div>
                        <img src="/img/person.png" alt="">
                    </div>
                    <div class="py-10px flex justify-between">
                        <span class="font-bold" text="14px">孙忆枫</span>
                        <span style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);border-radius: 3px;"
                            text="#fff 14px">主任医师</span>
                    </div>
                    <div text="#AEAEB2 14px">
                        西安交通大学第二附属医院
                    </div>
                </div>
                <div class="w-18%">
                    <div>
                        <img src="/img/person.png" alt="">
                    </div>
                    <div class="py-10px flex justify-between">
                        <span class="font-bold" text="14px">孙忆枫</span>
                        <span style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);border-radius: 3px;"
                            text="#fff 14px">主任医师</span>
                    </div>
                    <div text="#AEAEB2 14px">
                        西安交通大学第二附属医院
                    </div>
                </div>
                <div class="w-18%">
                    <div>
                        <img src="/img/person.png" alt="">
                    </div>
                    <div class="py-10px flex justify-between">
                        <span class="font-bold" text="14px">孙忆枫</span>
                        <span style="background: linear-gradient(159.97deg, rgba(206,234,158,1) -140.78%,rgba(53,179,137,1) 89.45%);border-radius: 3px;"
                            text="#fff 14px">主任医师</span>
                    </div>
                    <div text="#AEAEB2 14px">
                        西安交通大学第二附属医院
                    </div>
                </div>

            </div>
    </div>

</div></template>