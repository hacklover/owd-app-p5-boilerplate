<template>
  <Window :window="props.window">
    <div :id="canvasContainerId" />
  </Window>
</template>

<script setup>
import p5 from "p5"
import {ref, computed, defineProps, onMounted, onBeforeUnmount} from "vue";
import Window from "@owd-client/core/src/components/window/app/WindowApp.vue";

const instance = ref(null)
const frameRate = ref(30)

const props = defineProps({
  window: Object
})

const canvasContainerId = computed(() => `canvas-container-${props.window.uniqueName}`)

function canvasInitialize(p5) {
  p5.setup = () => {
    const canvas = p5.createCanvas(400, 400)
    const canvasContainer = document.getElementById(canvasContainerId.value)

    canvas.parent(canvasContainer)

    p5.frameRate = frameRate.value
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

onMounted(() => instance.value = new p5(canvasInitialize))
onBeforeUnmount(() => instance.value.remove())
</script>