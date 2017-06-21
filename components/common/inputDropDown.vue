/**
* Created by linzx on 2017/6/21.
*/
<template>
<span class="drag-down-box" @click="showDragDownList($event)">
          <span></span>
          <i class="drag-down-icon"></i>
          <input type="text">
          <drop-down :drop-down-list="dropDownList" title="">
          </drop-down>
        </span>
</template>

<script type="text/ecmascript-6">
    'use strict';
    import dropDown from "./dropDown/dropDown.vue"
    export default {
      name : "inputDropDown",
      props : ["dropDownList"],
      mounted (){
//        console.log(this.dropDownList);
      },
      data (){
          return {
//            dropDownList : dropDownList
          }
      },
      components : {
        "drop-down" : dropDown
      }
    }

</script>
<style rel="stylesheet/scss" lang="scss">

</style>
