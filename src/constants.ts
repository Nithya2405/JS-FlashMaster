import { FlashCardData } from './types';

export const FLASHCARDS: FlashCardData[] = [
  {
    id: 1,
    question: "What is the difference between 'let' and 'var'?",
    answer: "'let' is block-scoped, while 'var' is function-scoped. 'let' also does not allow re-declaration in the same scope and is not hoisted in the same way as 'var'.",
    category: "Basics"
  },
  {
    id: 2,
    question: "What are the primitive types in JavaScript?",
    answer: "The primitive types are: string, number, boolean, null, undefined, symbol, and bigint.",
    category: "Types"
  },
  {
    id: 3,
    question: "What is a closure in JavaScript?",
    answer: "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
    category: "Advanced"
  },
  {
    id: 4,
    question: "What is the purpose of 'use strict'?",
    answer: "'use strict' enables strict mode, which catches common coding bloopers, prevents unsafe actions, and disables confusing features.",
    category: "Basics"
  },
  {
    id: 5,
    question: "What is the difference between '==' and '==='?",
    answer: "'==' performs type coercion before comparison, while '===' (strict equality) compares both value and type without coercion.",
    category: "Basics"
  },
  {
    id: 6,
    question: "What is an IIFE?",
    answer: "An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.",
    category: "Advanced"
  },
  {
    id: 7,
    question: "What is the 'this' keyword in JavaScript?",
    answer: "The 'this' keyword refers to the object that the function is a property of, or the object that the function is currently being executed on.",
    category: "Advanced"
  },
  {
    id: 8,
    question: "What is a Promise?",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.",
    category: "Async"
  }
];
