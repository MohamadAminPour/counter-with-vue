Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      // this.counter+=amount;
      this.counter++;
      console.log(this.counter);
    },
    rem() {
      if (this.counter == 0) {
        return;
      } else {
        this.counter--;
        console.log(this.counter);
      }
    },
  },
}).mount(".app");
