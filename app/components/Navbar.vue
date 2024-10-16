<script lang="ts" setup>
const route = useRoute()
const activeNav = computed(() => route.path || '/')
const navList = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '头条资讯',
    path: '/peopleHealth/topNews',
  },
  {
    name: '健康陕西',
    path: '/peopleHealth/healthyShaanxi',
  },
  {
    name: '百想健康系列栏目',
    path: '/peopleHealth/peopleHealthSeries',
  },
  {
    name: '健康知识',
    path: '/peopleHealth/knowledge',
  },
  {
    name: '科普资料',
    path: '/peopleHealth/popularization',
  },
  {
    name: '宣传活动',
    path: '/peopleHealth/HealthActivity',
  },
  {
    name: '中医健康科普',
    path: 'https://saas.100xsys.cn/health/pages/knowledge/knowledge',
    external: true,
  },
  {
    name: '健康评测',
    path: 'https://saas.100xsys.cn/health/pages/evaluation/evaluation',
    external: true,
  },
]

const menuHamburgerActive = ref(false)
const navName = computed(() => route.meta?.navName)
function isActive(item: any) {
  return item.path === activeNav.value || (item.path !== '/' && activeNav.value.indexOf(item.path) === 0) || navName.value === item.name
}
</script>

<template>
  <div class="pos-sticky top-0 z-1000 w-full bg-#FFF pb-2px shadow-md">
    <div class="mx-a flex items-center justify-center">
      <div class="logo-icon mr-55px" />
      <button
        class="reset-btn menu-hamburger m-15px w-20px cursor-pointer md:hidden" flex="~ col justify-center"
        aria-label="移动端导航"
        aria-expanded="false"
        aria-controls="full-screen"
        :class="{ active: menuHamburgerActive }"
        @click="menuHamburgerActive = !menuHamburgerActive"
      >
        <span class="hamburger-1" />
        <span class="hamburger-2" />
        <span class="hamburger-3" />
      </button>
      <nav :class="{ active: menuHamburgerActive }" class="menu-box h0 items-center justify-between p-x-10px md:h-unset md:flex">
        <NuxtLink
          v-for="nav in navList" :key="nav.name" :to="nav.path"
          :external="nav.external || false"
          :target="nav.external ? '_blank' : ''"
          class="nav-item pos-relative mx-10px px-10px"
          :class="{ active: isActive(nav) }"
        >
          <span>
            {{ nav.name }}
          </span>
          <!-- <ClientOnly>
            <div v-if="nav.children" class="nav-item-children pos-absolute bottom-0 left-0 hidden bg-white">
              <NuxtLink v-for="child in nav.children" :key="child.name" :to="child.path">
                {{ child.name }}
              </NuxtLink>
            </div>
          </ClientOnly> -->
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-icon {
  width: 351px;
  height: 50px;
  background: url('/img/logo.png');
  cursor: pointer;
}
.menu-box {
  transition: all 0.3s ease;
  transform: translateY(0);

  .nav-item {
    cursor: pointer;
    border-bottom: 4px solid transparent;
    font-weight: 700;
    line-height: 55px;
    &:hover {
      // border-bottom-color: var(--color-primary);
      color: var(--color-primary);
      .nav-item-children {
        display: flex;
        max-height: 100px;
      }
    }
    &.active {
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
    }
    .nav-item-children {
      max-height: 0;
      overflow: hidden;
      transform: translateY(100%);
      width: 200%;
      flex-direction: column;
      border: 1px solid #eee;
      border-top-color: transparent;
      color: #000;
      transition: all 0.5s ease;
      a {
        line-height: 50px;
        padding-left: 10px;
        padding-right: 10px;
        &:hover {
          color: var(--color-primary);
          background-color: #e9f7fc;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .md\:flex,
    [md\:flex=''] {
      display: flex;
    }
    &.active {
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      transform: translateY(calc(100% - 0px));
      height: unset;
      .nav-item {
        border: none;
        line-height: 40px;
      }
    }
  }
}
button.reset-btn {
  background: none;
  border: none;
  padding: 0;
  touch-action: manipulation;
  z-index: 1;
}
.menu-hamburger {
  --text-color: #303133;
  --transition-all: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  span {
    background-color: var(--text-color);
    border-radius: 10px;
    height: 2px;
    margin: 2px 0;
    transition: var(--transition-all);
    width: 100%;
  }
  .hamburger-1 {
    width: 50%;
  }
  .hamburger-3 {
    width: 75%;
  }
  &.active {
    .hamburger-3 {
      transform-origin: bottom;
      width: 50%;
      transform: translate(2px, -10px) rotate(45deg);
    }
    .hamburger-2 {
      transform-origin: top;
      transform: rotate(-45deg);
    }
    .hamburger-1 {
      transform-origin: bottom;
      transform: rotate(45deg) translate(13px);
    }
  }
}
</style>
