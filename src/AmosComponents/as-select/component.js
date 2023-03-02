/*
 * @Author: liangzhihao zhihao_liang@intsig.net
 * @Date: 2023-02-27 21:21:55
 * @LastEditors: liangzhihao zhihao_liang@intsig.net
 * @LastEditTime: 2023-02-27 21:40:44
 * @FilePath: \Mycomponents\src\AmosComponents\as-select\component.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
export default {
  name: 'as-select',
  data() {
    return {
      checkList: [],
      hover: -1,
      optionshow: false,
    };
  },
  methods: {
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
  },
};
