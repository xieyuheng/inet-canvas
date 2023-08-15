import { Node } from "./Node.js"

export type Edge = {
  first: Node
  second: Node
}

export function treeEdges(node: Node): Array<Edge> {
  return [
    ...node.children.map((child) => ({ first: node, second: child })),
    ...node.children.flatMap(treeEdges),
  ]
}