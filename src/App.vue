<template>
  <div id="app">
    <!--<xf-nav></xf-nav>-->
    <!--<xf-header></xf-header>-->
    <router-view></router-view>
    <xf-footer></xf-footer>
  </div>
</template>

<script>
    import xfHeader from '@/components/common/xfHeader/xfHeader.vue'
    import xfFooter from '@/components/common/xfFooter/xfFooter.vue'
    import xfNav from '@/components/common/xfNav/xfNav.vue'
    export default {
        name: 'index',
        components: {
            xfHeader, xfFooter, xfNav
        }
    }
</script>

