import {defineStore} from 'pinia'

// stores are used when a single value is used by many components
export const useExampleStore = defineStore('exampleStore', {

  state: () => ({
    // default values of the "states" / variables
    // accessible by declaring the 'exampleStore' variable in any component and using 'exampleStore.count'
    count: 0,
    name: "defaultUserName",
  }),
  actions: {
    // Functions that can be used for changing an existing value or performing more complex tasks, such as fetching data
    resetCount(newCount) {
        this.count = newCount;
    },
    incrementCount() {
      this.count++;
    },
    setName(newName) {
      this.name = newName;
    },
    performTask(arg) {
        console.log("Your complex task here" + arg);
        return "Task completed";
    },
  },
});
