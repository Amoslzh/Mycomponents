export default {
  name: 'as-select',
  data() {
    return {
      checkList: [],
      checked1: '',
      hover: -1,
      optionshow: false,
    };
  },
  methods: {
    // change(dt) {
    //   this.$emit('getvalue', dt);
    // },
    singlecg() { 
      if(this.single&&this.checkList.length>1){
        this.checkList = [this.checkList.pop()]
      }
    },
    keepfocus() {
      this.optionshow = true;
      //延时专业焦点 否则没法选上chekbox 只是因为有过度效果才这样
      setTimeout(() => {
        this.$refs.headnode.focus();
      }, 20);
    },
    handleblur() {
      if (this.hover == -1) {
        this.optionshow = false;
      }
    },
  },
  watch: {
    checkList: {
      handler(newval) {
        this.$emit('getvalue', newval);
      },
      deep: true,
    },
  },
  props: {
    option: Array,
    title: {
      type: String,
      default: '',
    },
    clickcheckbox: {
      type: Boolean,
      default: true,
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
};
