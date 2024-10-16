<script lang="ts" setup>
import {
    ArrowLeft,
    ArrowRight,
} from '@element-plus/icons-vue'
</script>
<template>
    <div class="h-280 bg-#FFF">
        <div class="flex justify-center items-end pt-30px">
            <span class="w-8px h-8px bg-#0E9472 inline-block mr-10px -mt-15px"></span>
            <span class="px-2 font-bold" text="#1D2128 22px">百姓健康系列栏目</span>
            <span class="w-8px h-8px bg-#0E9472 inline-block ml-10px -mt-15px"></span>
        </div>
        <div class=" flex justify-center font-black font-serif -mt-10px" text="#031D2822 26px">
            PEPLE'S HEALTH
        </div>
        <div class="py-6 px-80 flex justify-between">
            <div class="flex justify-between w-100%">
                <div class="w-55%">
                    <div class="flex justify-between">
                        <div text="#1D2128 16px" class="font-sans font-bold pt-2" style="border-bottom:5px solid #35B389">
                            报纸专刊
                        </div>
                        <div>
                            <el-button color="#35B389" plain>更多</el-button>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex justify-between p-20px cursor-pointer">
                            <div class="w-32%">
                                <img src="/img/img3.png" alt="">
                            </div>
                            <div class="w-65%">
                                <div text="18px">2023年第十七期</div>
                                <div text="14px #AEAEB2" class="py-10px">
                                    民间谚语“朝暮叩齿三百六，七老八十牙不落”。清朝尤乘的《寿世青编》说：“齿为筋骨之余，宜常叩击，使筋骨活动，心神清爽。”</div>
                                <div text="14px" class="flex pl-5px">
                                    <span>详情</span> <img src="/img/more.png" alt="">
                                </div>
                            </div>
                        </div>
                        <el-divider border-style="dotted" style="margin: 0;" />
                        <div class="flex justify-between p-20px cursor-pointer">
                            <div class="w-32%">
                                <img src="/img/img3.png" alt="">
                            </div>
                            <div class="w-65%">
                                <div text="18px">2023年第十七期</div>
                                <div text="14px #AEAEB2" class="py-10px">
                                    民间谚语“朝暮叩齿三百六，七老八十牙不落”。清朝尤乘的《寿世青编》说：“齿为筋骨之余，宜常叩击，使筋骨活动，心神清爽。”</div>
                                <div text="14px" class="flex pl-5px">
                                    <span>详情</span> <img src="/img/more.png" alt="">
                                </div>
                            </div>
                        </div>
                        <el-divider border-style="dotted" style="margin: 0;" />
                        <div class="flex justify-between p-20px cursor-pointer">
                            <div class="w-32%">
                                <img src="/img/img3.png" alt="">
                            </div>
                            <div class="w-65%">
                                <div text="18px">2023年第十七期</div>
                                <div text="14px #AEAEB2" class="py-10px">
                                    民间谚语“朝暮叩齿三百六，七老八十牙不落”。清朝尤乘的《寿世青编》说：“齿为筋骨之余，宜常叩击，使筋骨活动，心神清爽。”</div>
                                <div text="14px" class="flex pl-5px">
                                    <span>详情</span> <img src="/img/more.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-40%">
                    <div class="flex justify-between">
                        <div text="#1D2128 16px" class="font-sans font-bold pt-2" style="border-bottom:5px solid #35B389">
                            广播
                        </div>
                        <div>
                            <el-button color="#35B389" plain>更多</el-button>
                        </div>
                    </div>
                    <div v-for="item in 11" class="flex justify-between py-10px cursor-pointer" text="14px">
                        <div class="line-clamp-1 text-ellipsis w-85%">
                            来学习！不能打破的交互设计规则来学习！不能打破的交互设计规则来学习！
                        </div>
                        <div text="#C7C7CC">
                            [08-12]
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="py-6 px-80">
            <div class="flex justify-between">
                <div text="#1D2128 16px" class="font-sans font-bold pt-2" style="border-bottom:5px solid #35B389">
                    电视节目
                </div>
                <div>
                    <el-button color="#35B389" plain>更多</el-button>
                </div>
            </div>
            <div class="flex justify-between py-10px h-100">
                <div class="w-30% relative cursor-pointer">
                    <div class="rounded-full bg-[#0310109c] w-60px h-60px flex absolute top-45% left-42%">
                        <img src="/img/play.png" alt="">
                    </div>
                    <div class="bg-[#0310109c] w-100% h-40px flex  items-center absolute bottom-0% font-blod pl-40px"
                        text="#fff">
                        如何做好防护 放心拥抱春天
                    </div>
                    <img class="w-100% h-100%" src="/img/img4.png" alt="">
                </div>
                <div class="w-68% grid grid-cols-3 gap-3">
                    <div class="h-184px relative cursor-pointer">
                        <div class="rounded-full bg-[#0310109c] w-40px h-40px flex absolute top-45% left-42%">
                            <img src="/img/play.png" alt="">
                        </div>
                        <div class="bg-[#0310109c] w-100% h-30px flex  items-center absolute bottom-0% font-blod pl-40px"
                            text="#fff 14px">
                            如何做好防护 放心拥抱春天
                        </div>
                        <img class="w-100% h-100%" src="/img/img4.png" alt="">
                    </div>
                    <div class="h-184px relative cursor-pointer">
                        <div class="rounded-full bg-[#0310109c] w-40px h-40px flex absolute top-45% left-42%">
                            <img src="/img/play.png" alt="">
                        </div>
                        <div class="bg-[#0310109c] w-100% h-30px flex  items-center absolute bottom-0% font-blod pl-40px"
                            text="#fff 14px">
                            如何做好防护 放心拥抱春天
                        </div>
                        <img class="w-100% h-100%" src="/img/img4.png" alt="">
                    </div>
                    <div class="h-184px relative cursor-pointer">
                        <div class="rounded-full bg-[#0310109c] w-40px h-40px flex absolute top-45% left-42%">
                            <img src="/img/play.png" alt="">
                        </div>
                        <div class="bg-[#0310109c] w-100% h-30px flex  items-center absolute bottom-0% font-blod pl-40px"
                            text="#fff 14px">
                            如何做好防护 放心拥抱春天
                        </div>
                        <img class="w-100% h-100%" src="/img/img4.png" alt="">
                    </div>
                    <div class="h-184px relative cursor-pointer">
                        <div class="rounded-full bg-[#0310109c] w-40px h-40px flex absolute top-45% left-42%">
                            <img src="/img/play.png" alt="">
                        </div>
                        <div class="bg-[#0310109c] w-100% h-30px flex  items-center absolute bottom-0% font-blod pl-40px"
                            text="#fff 14px">
                            如何做好防护 放心拥抱春天
                        </div>
                        <img class="w-100% h-100%" src="/img/img4.png" alt="">
                    </div>
                    <div class="h-184px relative cursor-pointer">
                        <div class="rounded-full bg-[#0310109c] w-40px h-40px flex absolute top-45% left-42%">
                            <img src="/img/play.png" alt="">
                        </div>
                        <div class="bg-[#0310109c] w-100% h-30px flex  items-center absolute bottom-0% font-blod pl-40px"
                            text="#fff 14px">
                            如何做好防护 放心拥抱春天
                        </div>
                        <img class="w-100% h-100%" src="/img/img4.png" alt="">
                    </div>
                    <div class="h-184px relative cursor-pointer">
                        <div class="rounded-full bg-[#0310109c] w-40px h-40px flex absolute top-45% left-42%">
                            <img src="/img/play.png" alt="">
                        </div>
                        <div class="bg-[#0310109c] w-100% h-30px flex  items-center absolute bottom-0% font-blod pl-40px"
                            text="#fff 14px">
                            如何做好防护 放心拥抱春天
                        </div>
                        <img class="w-100% h-100%" src="/img/img4.png" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>