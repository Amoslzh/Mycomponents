
<template>
  <div id="mainnode">
    <as-card style="width: 200px;height: 250px;">
      <template #body>
        <as-test :option="option" title="城市" :clickcheckbox="false" @change="testcg" single></as-test>
      </template>
      <template v-slot:header>标题</template>
    </as-card>
    <as-select :option="option" title="城市"></as-select>
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
  },
  methods:{
    testcg(){
      // console.log(data);
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
.cardbody{
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
