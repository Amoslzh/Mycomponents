<!--
 * @Author: liangzhihao zhihao_liang@intsig.net
 * @Date: 2023-02-23 21:18:18
 * @LastEditors: liangzhihao zhihao_liang@intsig.net
 * @LastEditTime: 2023-02-23 23:15:48
 * @FilePath: \Mycomponents\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div id="mainnode">
    <img src="./bg.jpg" class="backimg" />
    
    <as-snow>
      <button @click="testcg">ho</button>
      <div class="containbox">
        <as-card style="width: 100%">
          <template v-slot:header>选择器</template>
          <template #body>
            <!-- <as-select
            :option="option"
            title="城市"
            @change="testcg"
          ></as-select> -->

          </template>
        </as-card>

        <!-- 文本框容器 -->
        <as-card style="width: 100%; height: 400px" class="c2card">
          <template #header>文本框容器</template>
          <template #des
            >可以跟据父级容器的大小进行省略显示，并赋予鼠标事件显示完整内容</template
          >
          <!-- @change="card2cg" -->
          <template #body>
            <as-select
            :option="card2option"
            title="触发方式"
            :clickcheckbox="false"
            @getvalue="card2cg"
            single
          ></as-select>
            <div class="c2box">
              <div class="linebox">
                <el-slider v-model="card2width" :min="80" :max="300" />
                <div class="c2show">宽度：{{ card2width }}</div>
              </div>
              <div class="linebox">
                <el-slider v-model="card2num" :min="10" :max="200" />
                <div class="c2show">字数：{{ card2num }}</div>
              </div>
              <div class="linebox">
                <el-slider
                  v-model="card2height"
                  style="width: 200px"
                  :min="1"
                  :max="7"
                />
                <div class="c2show">高度：{{ card2height }}</div>
              </div>
            </div>

            <div
              :style="{
                width: card2width + 'px',
                height: card2height * 22 + 'px',
              }"
              class="textbox"
            >
              <as-textbox
                :content="card2text"
                :banline="card2height"
                :trigger="card2trigger"
              ></as-textbox>
            </div>
          </template>
        </as-card>
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

.c2card {
  .textbox {
    border: 1px skyblue solid;
    border-radius: 3px;
    margin: auto;
    background: #18202faa;
    color: aqua;
    padding: 8px;
  }
  .c2box {
    width: 600px;
    margin: auto;
    .linebox {
      display: flex;
      gap: 10px;
      flex-direction: row;
      padding: 8px;
      .c2show {
        width: 200px;
      }
    }
  }
}
</style>

<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
