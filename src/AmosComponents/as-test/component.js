export default {
    name:'as-test',
    data(){
        return {
            checkList:['A'],
            checked1:'',
            hover:-1,
        }
    },
    methods:{
        
        test(){
            this.checkList.forEach(item=>{
                console.log(item);
            })
        }
    },
    props: {
        option: Array,
    }
}