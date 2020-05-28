import styles from "./styles.css"

const SimpleComponent = props => {
  if (props.tag === undefined) return

  const node = document.createElement(props.tag)
  if (Array.isArray(props.className)) node.classList.add(...props.className)
  if (props.text !== undefined) {
    const text = document.createTextNode(props.text)
    node.appendChild(text)
  }
  return node
}

const Title = ({ text }) => {
  return SimpleComponent({ tag: "h1", text })
}

export default () => {
  console.log(styles)
  const mountingNode = document.querySelector("#app")

  const render = () => {
    const title = Title({ text: "Hello World" })
    mountingNode.appendChild(title)
  }

  render()
}
