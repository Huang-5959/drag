export default class taskWorker {

  handle: null | number = null;

  task: Function[] = [];

  lastTime = 2000

  constructor(lastTime = 2000) {
    this.lastTime = lastTime
  }

  nonEssentialWorker(deadline: IdleDeadline) {
    if((deadline.timeRemaining() > 0 || deadline.didTimeout) && this.task.length > 0) {
      const task = this.task.shift();
      task && task();
      if(this.task.length > 0) {
        this.start()
      }
    }
  }

  start() {
    this.handle = window.requestIdleCallback(this.nonEssentialWorker, {timeout: this.lastTime})
  }

  stop() {
    this.handle && window.cancelIdleCallback(this.handle)
    this.handle = null
  }
}
