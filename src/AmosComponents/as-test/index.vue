<template>
  <div>
    <button @click="test">go</button>
    <div class="optioncard">
      <el-checkbox-group v-model="checkList" label="tttt" style="width: 100%">
        <div
          v-for="(item, index) in option"
          :key="item.label"
          class="oneoption"
          @mouseenter="hover = index"
          @mouseleave="hover = -1"
        >
          <el-checkbox :label="item.value">{{ item.label }}</el-checkbox>
          <transition name="el-zoom-in-top">
            <div class="justone" v-show="hover == index" @click="checkList=[item.value]">仅选此项</div>
          </transition>
        </div>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script src="./component.js">
</script>
<style scoped>
.optioncard {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 164px;
  padding: 4px;
  background: #ffffff;
  border: 1px solid #e6e7eb;
  box-shadow: 0px 8px 20px rgba(26, 28, 36, 0.1);
  border-radius: 4px;
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
  color: red;
  width: 68px;
  background: #2258f4;
  line-height: 100%;
  font-weight: 400;
  font-size: 12px;
  color: #fafbff;
  box-sizing: border-box;
  padding: 4px 12px 4px 8px;
}
</style>