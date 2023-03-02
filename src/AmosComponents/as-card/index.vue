<!--
 * @Author: liangzhihao zhihao_liang@intsig.net
 * @Date: 2023-02-23 21:18:18
 * @LastEditors: liangzhihao zhihao_liang@intsig.net
 * @LastEditTime: 2023-02-23 22:59:29
 * @FilePath: \Mycomponents\src\AmosComponents\as-card\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="main_node">

    <div class="head">
      <slot name="header" :data="datt" pros2="pros2"></slot>
    </div>

    <div class="des">
      <slot name="des"></slot>
    </div>

    <div class="body">
      <slot name="body"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "as-card",
  data(){
    return {
      datt:{name:'fuck',age:123}
    }
  }
};
</script>

<style scoped>

.main_node {
  position: relative;
  background-color: #ffffff35;
  backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
.main_node:hover{
  box-shadow: 0px 4px 10px rgba(255, 255, 136, 0.1);
  background-color: #ffffff40;
  z-index: 2;
}

.main_node .des{
  height: auto;
<<<<<<< HEAD
  font-size: 12px;
  color: #37373d;
=======
  font-size: 13px;
  color: #1e1e1e;
>>>>>>> fa2019ecbbaaccd4744ef66859653b0ef440237e
}

.main_node .body{

  }
.main_node .head {
  position: relative;
  padding-bottom: 8px;
}
.main_node .head::after {
  content: '';
  width: 100%;
  height: 1px;
  background: #f0f0f4;
  position: absolute;
  left: 0px;
  bottom: 0px;
}

</style>