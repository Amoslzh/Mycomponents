<template>
  <div>
    <as-card style="height: 300px">
      <template v-slot:header>选择器</template>
      <template #des>
        多选器，传入[{lable,value}]，选择后返回对应的value
      </template>
      <template #body>
        <as-select :option="option" title="城市"></as-select>
      </template>
    </as-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: [
        { label: "Option A", value: "A" },
        { label: "Option B", value: "B" },
        { label: "Option C", value: "C" },
        { label: "Option D", value: "D" },
      ],
    };
  },
};
</script>

<style>
</style>