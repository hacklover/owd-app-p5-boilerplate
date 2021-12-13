import {ModuleApp} from "@owd-client/core/index";

// window components
import WindowSampleProcessing from "./windows/WindowSampleProcessing.vue";

export default class SampleProcessingModule extends ModuleApp {
  setup() {
    return {
      name: "sample-p5",
      singleton: true,
      windows: [
        {
          component: WindowSampleProcessing,
          name: "WindowSampleProcessing",
          title: "Sample module / p5.js",
          titleMenu: "Sample p5.js",
          icon: {
            name: "mdi mdi-draw",
            size: "25px",
            offset: {
              y: -1
            }
          },
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