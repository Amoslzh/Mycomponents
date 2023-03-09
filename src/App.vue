<!--
 * @Author: liangzhihao zhihao_liang@intsig.net
 * @Date: 2023-02-23 21:18:18
 * @LastEditors: liangzhihao zhihao_liang@intsig.net
 * @LastEditTime: 2023-02-27 21:36:46
 * @FilePath: \Mycomponents\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div id="mainnode">
    <img src="./bg.jpg" class="backimg" />
    
    <as-snow>
      <div class="containbox">

        <example1></example1>
        <example2></example2>
        <example3></example3>

        
      </div>
    </as-snow>
  </div>
</template>

<script src="./app">
</script>

<style scoped lang="scss">
.containbox {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  margin-top: 50px;
  row-gap: 30px;
}
.backimg {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.box {
  background-color: aqua;
}
.flexbox {
  height: 40px;
  background-color: gray;
  display: inline-flex;
  gap: 10px;
}

#mainnode {
  background: #191b1c;
  width: 100%;
  height: 100vh;
}
.cardbody {
  width: 200px;
  height: 300px;
}


</style>

<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
