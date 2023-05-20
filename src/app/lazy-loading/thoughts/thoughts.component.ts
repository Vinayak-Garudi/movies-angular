import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent implements OnInit, DoCheck {
  thought: string = ''
  showThought: boolean = false
  feelPop: boolean = false
  temp: string = ""


  ngOnInit(): void {
    window.scroll(0, 0)
    setTimeout(() => {
      this.temp = "temp changed"
    }, 3000);
  }

  ngDoCheck(): void {
    console.log("temppp", this.temp)
  }

  adjustTextArea() {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

  sendThought() {
    this.showThought = true
    setTimeout(() => {
      this.showThought = false
      this.feelPop = true
    }, 2500);
  }

  continueWriting() {
    this.feelPop = false
    this.thought = ''
  }
}
