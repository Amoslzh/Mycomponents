<template>
  <div>
    <!-- 文本框容器 -->
    <as-card style="width: 100%; height: 400px" class="c2card">
      <template #header>文本框容器</template>
      <template #des
        >可以跟据父级容器的大小进行省略显示，并赋予鼠标事件显示完整内容</template
      >
      <!-- @change="card2cg" -->
      <template #body>
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
</template>

<script>
export default {
  data() {
    return {
      card2width: 0,
      card2height: 0,
      card2num: 10,
      card2option: [
        { label: "click", value: "click" },
        { label: "focus", value: "focus" },
        { label: "hover", value: "hover" },
        { label: "manual", value: "manual" },
      ],
      card2trigger: "hover",
    };
  },
  computed: {
    card2text() {
      let str =
        '可以跟据父级容器的大小进行省略显示，并赋予鼠标事件显示完整内容'.repeat(
          1 + this.card2num / 30
        );
      return str.slice(0, this.card2num);
    },
  },
};
</script>

<style scoped lang="scss">
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
