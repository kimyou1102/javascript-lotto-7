import { Controller } from './controller/Controller';

class App {
  async run() {
    const controller = new Controller();
    await controller.start();
  }
}

export default App;
