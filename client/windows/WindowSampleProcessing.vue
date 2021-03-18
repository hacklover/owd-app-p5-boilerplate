<template>
  <Window :window="window">
    <div :id="canvasContainerId"/>
  </Window>
</template>

<script>
import p5 from "p5"
import Window from "@owd-client/core/src/components/window/Window"

export default {
  components: {Window},

  props: {
    window: Object
  },

  data() {
    return {
      instance: null,
      frameRate: 30
    }
  },

  computed: {
    /**
     * Get id of the canvas container div
     *
     * @returns {string}
     */
    canvasContainerId() {
      return `canvas-container-${this.window.uniqueName}`
    }
  },

  methods: {
    /**
     * Initialize canvas
     *
     * @param p5
     */
    canvasInitialize(p5) {
      p5.setup = () => {
        const canvas = p5.createCanvas(400, 400)
        const canvasContainer = document.getElementById(this.canvasContainerId)

        canvas.parent(canvasContainer)

        p5.frameRate = this.frameRate
        p5.fill(55, 55, 55)
        p5.stroke(22, 22, 22)
      }

      // p5.js documentation
      // https://p5js.org/reference/
      //
      // example taken from
      // https://p5js.org/examples/form-star.html
      p5.draw = () => {
        p5.background(45)

        p5.push();
        p5.translate(p5.width * 0.5, p5.height * 0.5)
        p5.rotate(p5.frameCount / 100.0)
        star(0, 0, 5, 70, 3)
        p5.pop()

        function star(x, y, radius1, radius2, npoints) {
          let angle = p5.TWO_PI / npoints
          let halfAngle = angle / 2.0

          p5.beginShape()

          for (let a = 0; a < p5.TWO_PI; a += angle) {
            let sx = x + p5.cos(a) * radius2
            let sy = y + p5.sin(a) * radius2
            p5.vertex(sx, sy)
            sx = x + p5.cos(a + halfAngle) * radius1
            sy = y + p5.sin(a + halfAngle) * radius1
            p5.vertex(sx, sy)
          }

          p5.endShape(p5.CLOSE);
        }

      }
    }
  },

  /**
   * Vue.js mount event
   */
  mounted() {
    // initialize p5.js instance
    this.instance = new p5(this.canvasInitialize);
  },

  /**
   * Vue.js beforeUnmount event
   */
  beforeUnmount() {
    // destroy p5.js instance
    this.instance.remove()
  }
}
</script>