
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { LessonsService, WordPair } from '../lessons/lessons.service';

@Component({
  selector: 'tinyquiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  private originalRiddle;
  private shuffledRiddle = [];
  private selected = null;
  private correct = [];
  private wrong = [];
  private done = [];
  private visible = false;
  
  constructor(private lessonsService: LessonsService) {
    this.buildRiddle();
  }

  ngOnInit() {
  }
  
  buildRiddle(): void {
    this.originalRiddle = this.lessonsService.loadLesson('english');
    this.visible = false;
    let partialRiddle: WordPair[] = this.originalRiddle;
    this.shuffle(partialRiddle);
    this.shuffledRiddle = [];
    for ( let tag of partialRiddle.slice(0, 6) ) {
      this.shuffledRiddle.push(tag);
      this.shuffledRiddle.unshift(tag.reverse());
    }
    this.shuffle( this.shuffledRiddle );
    
    setTimeout(() => {
          this.visible = true;
        }, 700);
  }

  clicked(self: string, other: string) {
    // this.echo('clicked: ', self);
    this.correct = [];
    this.wrong = [];
    
    if ( this.selected == null ) {
      this.selected = self;
    } else if ( this.selected == other ) {
      this.done.push(self, other);
      this.correct = [self, other];
      this.selected = null;
      setTimeout(() => {
          this.correct = [];
          if ( this.done.length === this.shuffledRiddle.length ) {
            this.done = [];
            this.buildRiddle();
          }
        }, 1300);
    } else {
      this.wrong = [self, this.selected];
      this.selected = null;
     setTimeout(() => {
          this.wrong = [];
        }, 1300);
    }
  }
  
  isSelected(tag: string): boolean {
    return this.selected == tag;
  }
  
  isHighlightingAsWrong(tag: string): boolean {
    return this.wrong.indexOf(tag) !== -1;
  }

  isHighlightingAsCorrect(tag: string): boolean {
    return this.correct.indexOf(tag) !== -1;
  }

  isDone(tag: string): boolean {
    return this.done.indexOf(tag) !== -1;
  }
  
  echo(message: string, param: any) {
    let line = document.createElement('p');
    line.textContent = message + param;
    document.body.appendChild(line);
  }
  
  shuffle<T>(array: T[]): void {
    // makes no sense to shuffle arrays <= 1 of length
    if (array.length > 1) {

      // For each index in array
      for (let i: number = 0; i< array.length; ++i) {
    
        // choose a random not-yet-placed item to place there
        // must be an item AFTER the current item, because the stuff
        // before has all already been placed
        const randomChoiceIndex = this.random(1*i+1, array.length - 1);
        if ( randomChoiceIndex > i && randomChoiceIndex < array.length) {
          
          // place our random choice in the spot by swapping
          [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
        }
      }
    }
  }
  
   random(min: number, max: number): number {
    let rand: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
  }
}

