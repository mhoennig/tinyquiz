import { Injectable } from '@angular/core';

@Injectable()
export class LessonsService {

  private english = [ 
            new WordPair( '0', 'zero'),
            new WordPair( '1', 'one'),
            new WordPair( '2', 'two'),
            new WordPair( '3', 'three'),
            new WordPair( '4', 'four'),
            new WordPair( '5', 'five'),
            new WordPair( '6', 'six'),
            new WordPair( '7', 'seven'),
            new WordPair( '8', 'eight'),
            new WordPair( '9', 'nine'),
            new WordPair('10', 'ten'),
            new WordPair('11', 'eleven'),
            new WordPair('12', 'twelve'),
            new WordPair('13', 'thirteen'),
            new WordPair('14', 'fourteen'),
            new WordPair('18', 'eighteen'),
            new WordPair('19', 'nineteen'),
            new WordPair('20', 'twenty'),
            new WordPair('21', 'twenty one'),
            new WordPair('40', 'fourty'),
            new WordPair('50', 'fifty'),
            new WordPair('51', 'fifty one'),
            new WordPair('52', 'fifty two'),
            new WordPair('60', 'sixty'),
            new WordPair('61', 'sixty one'),
            new WordPair('64', 'sixty four'),
            new WordPair('70', 'seventy'),
            new WordPair('80', 'eighty'),
            new WordPair('81', 'eighty one'),
            new WordPair('85', 'eighty fife'),
            new WordPair('90', 'ninety'),
            new WordPair('100', 'one hundred')];

private french = [ 
            new WordPair( '0', 'zéro'),
            new WordPair( '1', 'un'),
            new WordPair( '2', 'deux'),
            new WordPair( '3', 'trois'),
            new WordPair( '4', 'quatre'),
            new WordPair( '5', 'cinq'),
            new WordPair( '6', 'six'),
            new WordPair( '7', 'sept'),
            new WordPair( '8', 'huit'),
            new WordPair( '9', 'neuf'),
            new WordPair('10', 'dix'),
            new WordPair('11', 'onze'),
            new WordPair('12', 'douce'),
            new WordPair('13', 'treize'),
            new WordPair('14', 'quatorze'),
            new WordPair('18', 'dix-huit'),
            new WordPair('19', 'dix-neuf'),
            new WordPair('20', 'vingt'),
            new WordPair('21', 'vingt et un'),
            new WordPair('40', 'quarante'),
            new WordPair('50', 'cinquante'),
            new WordPair('51', 'cinquante et un'),
            new WordPair('52', 'cinquante deux'),
            new WordPair('60', 'soixante'),
            new WordPair('61', 'soixante et un'),
            new WordPair('64', 'soixante quatre'),
            new WordPair('70', 'soixante-dix'),
            new WordPair('80', 'quatre-vingt'),
            new WordPair('81', 'quatre-vingt et un'),
            new WordPair('85', 'quatre-vingt cinq'),
            new WordPair('90', 'quatre-vingt-dix'),
            new WordPair('100', 'cent')];

  constructor() { }

  public loadLesson(lang: String): WordPair[] {
    switch (lang) {
      case 'english': return this.english;
      case 'french': return this.french;
      default: throw new Error('unknown language ' + lang);
    }
  }
}


export class WordPair {
  constructor(public question: string, public answer: string) {
  }
  
  public reverse(): WordPair {
    return new WordPair(this.answer, this.question);
  }
}