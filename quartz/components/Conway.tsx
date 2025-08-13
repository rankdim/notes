import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface ConwayOptions {
  id?: string
}

export default ((userOpts?: ConwayOptions) => {
  const canvasId = userOpts?.id ?? "conway"
  
  const ConwayComponent: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class="conway-container">
      <canvas class={classNames(displayClass)} id={canvasId}></canvas>
      </div>
    )
  }

  ConwayComponent.css = `
  #${canvasId} {
    border: none;
    background: #faf8f8;
  }
  
  .conway-container {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  `

  return ConwayComponent
}) satisfies QuartzComponentConstructor
