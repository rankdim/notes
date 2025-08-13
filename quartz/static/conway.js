console.log("rank decoposition")

import "https://unpkg.com/@rankdim/conway@0.5.0/dist/conway.umd.cjs"

document.addEventListener("DOMContentLoaded", function () {
  const canvasElement = document.getElementById("conway-3")
  if (!canvasElement) return

  const game3 = conway.conway("conway-3", {
    cellSize: 10,
    gridWidth: 50,
    gridHeight: 50,
    animationSpeed: 600,
    showGrid: true,
    backgroundColor: "#faf8f8",
  })

  game3.randomize()

  game3.start()
})
