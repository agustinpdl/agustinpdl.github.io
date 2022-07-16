import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public root: Node = {
    nodeType: NodeType.None,
    x: 0,
    y: 0,
    child: []
  }


  constructor() { }

  ngOnInit() {
    this.generateMap()
  }

  public generateMap(): void {
    this.generateChildAndNavigate(this.root, 0);
    console.log(this.root)
  }

  public generateChildAndNavigate(root: Node, currentNodes: number): void {
    if (root.y == 15) return;
    const s = Math.floor(Math.random() * 100);
    const p = Math.floor(Math.random() * 100);
    let maxChild = 1;
    if (s > 90) {
      maxChild = 2
    }
    for (let i = 0; i < maxChild; i++) {
      const nT = p < 15 ? NodeType.Item : p > 90 ? NodeType.Shop : NodeType.Battle;
      let child = {
        nodeType: nT,
        x: 0,
        y: root.y + 1,
        child: []
      }
      if (root.child != null) root.child.push(child);
    }
    console.log(this.root)
    root.child?.forEach((child) => {
      this.generateChildAndNavigate(child, currentNodes)
    })
  }
}
export enum NodeType {
  Battle = 0,
  Shop,
  Item,
  None,
}
export type Node = {
  nodeType: NodeType,
  x: number,
  y: number,
  child?: Node[]
}