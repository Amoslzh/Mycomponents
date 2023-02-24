<!--
 * @Author: liangzhihao zhihao_liang@intsig.net
 * @Date: 2023-02-05 12:01:58
 * @LastEditors: liangzhihao zhihao_liang@intsig.net
 * @LastEditTime: 2023-02-05 19:21:18
 * @Description: 
 * title: 提示框标题
 * width：提示框宽度
 * trigger: 触发提示框方式(click/focus/hover/manual)
 * banline: 显示行数
 * content: 文字内容
 * 
-->
<template>
    <div>
      <el-popover
        placement="top-start"
        :title="title"
        :width="width"
        :trigger="trigger"
        :content="content"
        :disabled="bantip"
      >
      <template #reference>
        <div
          ref="aspan"
          class="ellipsis"
          @mouseover="intban"
          :style="{
            '-webkit-line-clamp': banline,
          }"
        >
          {{ content }}
        </div>
      </template>
        
      </el-popover>
    </div>
  </template>
  
  <script>
  export default {
    name:'as-textbox',
    data() {
      return {
        bantip: true,
      }
    },
    methods: {
  
      intban() {
        if (this.$refs.aspan.clientHeight < this.$refs.aspan.scrollHeight) {
          this.bantip = false
        } else {
          this.bantip = true
        }
      },
    },
    mounted() {
      if (this.$refs.aspan.clientHeight < this.$refs.aspan.scrollHeight) {
        this.bantip = false
      }
    },
    props:{
      banline:{
          default:2
      },
      title:{
          default:'' 
      },
      width:{
          default:'200'
      },
      trigger:{
          default:'hover'
      },
      content:String,
    }
  }
  </script>
  
  <style scoped>
  .ellipsis {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  </style>
  