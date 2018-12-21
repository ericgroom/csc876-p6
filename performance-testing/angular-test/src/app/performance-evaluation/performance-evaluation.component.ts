import { Component, OnInit } from "@angular/core";

interface Item {
  key: number;
  value: number;
}

@Component({
  selector: "app-performance-evaluation",
  templateUrl: "./performance-evaluation.component.html",
  styleUrls: ["./performance-evaluation.component.css"]
})
export class PerformanceEvaluationComponent implements OnInit {
  items: Item[] = [];
  index: number = 0;
  constructor() {}

  ngOnInit() {}

  addRandom(quantity: number): void {
    const start = new Date();
    for (let i = 0; i < quantity; i++) {
      const value = Math.random();
      const key = this.index + 1;
      this.items = [...this.items, { key, value }];
      this.index = key;
    }
    const end = new Date();
    console.log("time to add:", end.getTime() - start.getTime());
  }

  sort(): void {
    const start = new Date();
    const sorted = this.items.slice().sort((a, b) => a.value - b.value);
    this.items = sorted;
    const end = new Date();
    console.log("time to sort:", end.getTime() - start.getTime());
  }
}
