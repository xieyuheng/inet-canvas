import { State } from "../State"
import { Camera } from "../camera"
import { Formula } from "../components/Formula"

export function renderFormula(
  ctx: CanvasRenderingContext2D,
  state: State,
  camera: Camera,
  formula: Formula,
): void {
  ctx.save()
  ctx.translate(state.canvas.width / 2, state.canvas.height / 2)
  ctx.scale(1, -1)
  ctx.lineWidth = 1

  const left = 0
  const right = 100
  const delta = 0.01
  for (let x = left; x < right; x += delta) {
    const x0 = x
    const x1 = x + delta
    const y0 = formula.f(x0)
    const y1 = formula.f(x1)

    ctx.beginPath()
    ctx.moveTo(x0 * camera.unit, y0 * camera.unit)
    ctx.lineTo(x1 * camera.unit, y1 * camera.unit)
    ctx.stroke()
  }

  ctx.restore()
}
