export default {
  name: 'App',
  components: {},
  data() {
    return {
      option: [
        { label: 'Option A', value: 'A' },
        { label: 'Option B', value: 'B' },
        { label: 'Option C', value: 'C' },
        { label: 'Option D', value: 'D' },
      ],
      card2width: 0,
      card2height: 0,
      card2num: 10,
      card2option: [
        { label: 'click', value: 'click' },
        { label: 'focus', value: 'focus' },
        { label: 'hover', value: 'hover' },
        { label: 'manual', value: 'manual' },
      ],
      card2trigger:'click'
    };
  },
  methods: {
    testcg() {
      this.card2trigger = 'click'
    },
    card2cg(dt) {
      console.log(1);

      this.card2trigger = dt[0]
    }
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
