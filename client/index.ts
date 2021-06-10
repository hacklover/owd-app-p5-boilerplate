import {ModuleApp} from "@owd-client/core/index";

// window components
import WindowSampleProcessing from "./windows/WindowSampleProcessing.vue";

export default class SampleProcessingModule extends ModuleApp {
  loadModule() {
    return {
      name: "p5-boilerplate",
      singleton: true,
      windows: [
        {
          component: WindowSampleProcessing,
          name: "WindowSampleProcessing",
          title: "Sample with p5.js",
          icon: {
            name: "mdi-draw",
            size: "25px",
            offset: {
              y: -1
            }
          },
          menu: true,
          resizable: false,
          size: {
            width: 426,
            height: 462
          },
          position: {
            x: -1,
            y: 0,
            z: 0
          }
        }
      ]
    }
  }
}