<!--
* @Author: Amoslzh
* @Date: 2023-02-23 17:43:26
* @Description: 选择器
* @props:
* title: 选择器标题
* option: [{label:'Option A',value:'A'},...] 参数数组
* clickcheckbox: 是否通过点击checkbox来选择 默认true
* single: 单选 默认false
-->

<template>
  <div class="main_node">
    <span
      class="card_node"
      @click.self="optionshow = !optionshow"
      tabindex="-1"
      @blur="handleblur"
      ref="headnode"
    >
      <span class="title">{{ title }}</span>
      <img
        :class="{ icon: !optionshow, iconactive: optionshow }"
        src="./img/icon2.svg"
        @click.self="optionshow = !optionshow"
      />
      <transition name="el-zoom-in-top">
        <div class="optioncard" v-show="optionshow" @click="keepfocus($event)">
          <!-- 让父元素保持焦点状态 -->
          <el-checkbox-group
            v-model="checkList"
            label="tttt"
            :max="1"
          >
            <div
              v-for="(item, index) in option"
              :key="item.label"
              class="oneoption"
              @mouseenter="hover = index"
              @mouseleave="hover = -1"
              @click.self="single?checkList = [item.value]:''"
            >
              <div :class="clickcheckbox?'checkhide':''">
                <el-checkbox :label="item.value" style="width: 100%;">{{ item.label }}</el-checkbox>
              </div>
              <span class="labelst" v-if="clickcheckbox">{{ item.label }}</span>
              <transition name="el-zoom-in-top">
                <div
                  v-if="!single"
                  class="justone"
                  v-show="hover == index"
                  @click="checkList = [item.value]"
                >
                  仅选此项
                </div>
              </transition>
            </div>
          </el-checkbox-group>
        </div>
      </transition>
    </span>
  </div>
</template>

<script src="./component.js">
</script>
<style scoped>
.main_node {
  position: relative;
}

.title {
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #1a1c24;
}
.labelst {
  font-size: 14px;
  text-indent: 8px;
}
.checkhide {
  width: 14px;
  overflow: hidden;
  height: 14px;
  display: flex;
  align-items: center;
}
.card_node {
  box-sizing: border-box;
  display: inline-block;
  padding: 5px 28px 8px 16px;
  height: 32px;
  background: #e6e7eb;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  position: relative;
  border-left: 4px solid #2258f4;
  border-radius: 4px;
}

.card_node .icon {
  position: absolute;
  transition: 0.3s;
  right: 8px;
  top: 50%;
  transform: translateY(-50%) rotate(-180deg);
}
.card_node .iconactive {
  position: absolute;
  transition: 0.3s;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}
.optioncard {
  position: absolute;
  top: calc(100% + 8px);
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 164px !important;
  padding: 4px;
  background: #ffffff;
  border: 1px solid #e6e7eb;
  box-shadow: 0px 8px 20px rgba(26, 28, 36, 0.1);
  border-radius: 4px;
  cursor: auto;
  z-index: 5;
}

.oneoption {
  position: relative;
  box-sizing: border-box;
  padding: 4px 12px 4px 8px;
  width: 100%;
  height: 36px;

  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.oneoption:hover {
  background: #e6e7eb;
}

.justone {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 0px;
  width: 40px;
  height: 100%;
  width: 68px;
  background: #2258f4;
  line-height: 100%;
  font-weight: 400;
  font-size: 12px;
  color: #fafbff;
  box-sizing: border-box;
  padding: 4px 12px 4px 8px;
  cursor: pointer;
}
</style>