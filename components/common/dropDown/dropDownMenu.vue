/**
* Created by linzx on 2017/6/21.
*/
<template>
  <ul class="drop-down-menu" v-show="isShowDropDownMenu">
    <slot></slot>
  </ul>
</template>

<script type="text/ecmascript-6">

    'use strict';
    export default {
      name : "dropDownMenu",
      props : [],
      components : {

      }
    }

</script>
<style rel="stylesheet/scss" lang="scss">

</style>
