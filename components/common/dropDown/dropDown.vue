/**
* Created by linzx on 2017/6/21.
*/
<template>
  <div class="drag-down-list">
    <ul>
      <li class="drag-down-li" v-for="data in dropDownList"
          :class="{
            'active' : isActive,
            'disabled' : isDisabled
          }"
          :value="data.value">
        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    'use strict';
    export default {
      name : "dropDown",
      props : ["dropDownList"],
      mounted (){
          console.log(this.dropDownList);
      },
      methods : {
        showDragDownList (e){
          const offset = getOffset(e.target);
        }
      }
    }

    /**
     * desc: 返回点击元素在全局所在的offset位置
     * time: 2017-06-21
     *@param: 点击的dom元素或者dom元素的ID，
     *@param: 需要获取相对距离的父元素(dom元素或者ID),如不需要设置为null，
     *@param: 获得相对元素的滚动条滚动距离，
     *@return:{offsetLeft：left，offsetTop:top}
     **/
    function getOffset(obj,parentObj,scrollParent) {
      let _offset = {};
      let node = typeof obj === "string" ? document.getElementById(obj) : obj;
      parentObj = parentObj ? (typeof obj === "string" ?document.getElementById(parentObj) : parentObj) : null;
      let left = node.offsetLeft;
      let top = node.offsetTop;
      let parent = node.offsetParent;
      //不断向上获取父元素的offsetLeft，知道获取到与页面的距离
      while (parent !== parentObj) {
        left += parent.offsetLeft;
        top += parent.offsetTop;
        parent = parent.offsetParent;
      }
      //获得相对于页面主体的滚动条滚动距离
      let scrollParentLeft = scrollParent ? document.querySelectorAll(scrollParent)[0].scrollLeft : 0;
      _offset.left = left - scrollParentLeft;
      //!!!!!配置页减去对应的滚动条距离
      _offset.top = top;
      return _offset;
    }
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
