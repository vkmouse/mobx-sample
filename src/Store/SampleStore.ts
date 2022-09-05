import { action, makeObservable, observable } from "mobx";

export default class SampleStore {
  @observable value = 0;

  constructor() {
    makeObservable(this);
  }

  @action addOne() {
    this.value = this.value + 1;
  }
}