<template>
  <div id="mainnode">
    <as-card class="cardbody">
      <template #body><as-test :option="option"></as-test></template>
      <template v-slot:header>标题</template>
    </as-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data(){
    return{
      option:[
                {label:'Option A',value:'A'},
                {label:'Option B',value:'B'},
                {label:'Option C',value:'C'},
                {label:'Option D',value:'D'},
            ]
    }
  }
  
};
</script>

<style scoped>
#mainnode {
  background: #191b1c;
  width: 100%;
  height: 100vh;
}
</style>

<style>
* {
  padding: 0px;
  margin: 0px;
}
.cardbody{
  width: 200px;
  height: 300px;
}
</style>
