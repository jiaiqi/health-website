<script lang="ts" setup>
const props = defineProps<{
  title: string
  path: any[]
}>()
const emit = defineEmits<{
  (e: 'navigate', index: number, text: string): void
}>()
function onNavigate(index: number, text: string) {
  emit('navigate', index, text)
}
</script>

<template>
  <div class="pos-relative bg-#F7F9FD  min-h-screen-260">
    <div class=" pos-absolute left-0 top-0 z-0 h-310px w-full" />
    <div class="m-auto min-h-220px container xl:max-w-1300px">
      <div class="page-content pos-relative z-2  bg-white px-30px py-20px drop-shadow-sm">
        <PublicBreadcrumbNavigation :path="props.path" @navigate="onNavigate">
          <template #right>
            <slot name="right" />
          </template>
        </PublicBreadcrumbNavigation>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-bg {
  background-image: url('~/assets/images/top-bg.jpg');
}
.line-bg {
  background-image: linear-gradient(
    126.83deg,
    rgba(22, 132, 252, 1) 6.77%,
    rgba(255, 255, 255, 0) 85.31%,
    rgba(255, 255, 255, 0) 85.31%
  );
}
</style>
