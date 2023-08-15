import { animate } from "./animate.ts"
import { createState } from "./createState.ts"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const mouse = {
    x: 0,
    y: 0,
  }

  const state = createState(ctx, {
    width: canvas.width,
    height: canvas.height,
    mouse,
  })

  animate(ctx, state)

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x
    mouse.y = event.y
  })

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    state.width = window.innerWidth
    state.height = window.innerHeight
  })
}
