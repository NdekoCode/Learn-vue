class NotificationsStore {
  constructor(start = 0, step = 1) {
    this.state = {
      count: start,
    };
    console.log(this);
    this.step = step;
  }
  increment() {
    this.state.count += this.step;
  }
  decrement() {
    this.state.count -= this.step;
  }
}
const notifStore = new NotificationsStore();
export default notifStore;
