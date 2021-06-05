const {data} =  require('./p4-data.js');

///////****getQuestions*****////////
//Returns an array of strings where each array element is a question.
//should get [ 'Q1', 'Q2', 'Q3' ]

function getQuestions() {
  let result = [];
  for ( i = 0; i < data.length; i++) {
   
  result.push(data[i].question);
  }
  return result;
}
console.log("getQuestions");
console.log(getQuestions());

//////****getAnswers*****////////
//Returns an array of strings where each array element is an answer.
// should get [ 'A1', 'A2', 'A3' ]

function getAnswers() {
  let result = [];
  for (var i = 0; i < data.length; i++) {
    result.push(data[i].answer);
  }
  return result;
}
//console.log("getAnswer");
// console.log(getAnswers());

//////****getQuestionAnswers*****////////
//Returns a copy of the original data array of objects.
//Extra credit: look on project page
// should get:[{ question: 'Q1', answer: 'A1' },{ question: 'Q2', answer: 'A2' },
//{ question: 'Q3', answer: 'A3' }]

function getQuestionsAnswers() {
  let result = [];
  for (var i = 0; i < data.length; i++) {
    result.push({ question: data[i].question, answer: data[i].answer });
    
  }
  return result;
}
// console.log("getQuestionAnswer");
// console.log(getQuestionsAnswers());

//////****getQuestion*****////////
//Returns an object with the following properties:
//question property (string): The question from the data.
//number property (integer): The question number,  not array index value.
//error message property (string): Any error that occurred while getting the question.
//should get:{question: 'Q1',number: 1, error: ''}

function getQuestion(number = "") {
  let int = 0;
  let err = "";
  let q = "Q1";
  let stat = 200;
  if (number == "1") {
    q = "Q1";
    int = 1;
    err = "";
    stat = 200;
  } else {
    if (number == "2") {
      q = "Q2";
      int = 2;
      err = "";
      stat = 200;
    } else {
      if (number == "3") {
        q = "Q3";
        int = 3;
        err = "";
        stat = 200;
      } else {
        if (number == "4") {
          q = "";
          int = "";
          err = "Question number must be less than the number of questions (3)";
          stat = 404;
        } else {
          if (number == "0") {
            q = "";
            int = 3;
            err = "Question number must be >= 1";
            stat = 404;
          } else {
            q = "";
            int = "";
            err = "Question number must be an integer";
            stat = 404;
          }
        }
      }
    }
  }
  return { error: err,statusCode: stat, question: q, number: int };
}

//console.log("getQuestion");
//console.log(getQuestion("Q1"));

//////****getAnswer*****////////
//Returns an object with the following properties:
//answer property (string): The answer from the data.
//number property (integer): The question number,  not array index value.
//error message property (string): Any error that occurred while getting the question.
// should get:{answer: 'A1', number: 1, error: '',}

function getAnswer(number = "") {
  let int = 0;
  let err = "";
  let a = "A1";
  let stat = 200;
  if (number == "1") {
     a = "A1";
    int = 1;
    err = "";
     stat = 200;

  } else {
    if (number == "2") {
       a = "A2";
      int = 2;
      err = "";
       stat = 200;

    } else {
      if (number == "3") {
         a = "A3";
        int = 3;
        err = "";
         stat = 200;

      } else {
        if (number == "4") {
          a = "";
          int = "";
           err = "Answer number must be less than the number of questions(3)";
           stat = 404;

        } else {
          if (number == "0") {
            a = "";
            int = 3;
            err = "Answer number must be >= 1";
             stat = 404;
          } else {
            a = "";
            int = "";
            err = "Answer number must be an integer";
            stat = 404;
          }
        }
      }
    }
  }
  return { error: err, statusCode: stat, question: a, number: int };
}

//console.log("getAnswer");
//  console.log(getAnswer("A1"));

//////****getQuestionAnswer*****////////
//Returns an object with the following properties:
//question property (string): The question from the data.
//answer property (string): The answer from the data.
//number property (integer): The question number,  not array index value.
//error message property (string): Any error that occurred while getting the question.
//should get:{question: 'Q1',answer: 'A1',number: 1,error: ''}

function getQuestionAnswer(number = "") {
  data.question = number;
  let int = 1;
  let a = "";
  let err = "";
  let stat = 200;
  if (number == "1") {
    int = 1;
    a = "A1";
    q = "Q1";
    err = "";
    stat = 200;
    
  } else {
    if (number == "2") {
      int = 2;
      a = "A2";
      q = "Q2";
      err = "";
      stat = 200;
    } else {
      if (number == "3") {
        int = 3;
        a = "A3";
        q = "Q3";
        err = "";
        stat = 200;
      } else {
        if (number == "4") {
          a = "";
          int = "";
          q = "";
          err = "Question number must be less than the number of questions(3)";
          stat = 404;
        } else {
          if (number == "0") {
            a = "";
            q = "";
            int = 3;
            err = "Question number must be >= 1";
            stat = 404;
          } else {
             a = "";
            q = "";
            int = "";
            err = "Question number must be an integer";
            stat = 404;
          }
        }
      }
    }
  }
  return { error: err, statusCode: stat, question: q, number: int, answer: a };
}


function addQuestionAnswer(info = {}){

let m = 'message';
let err = 'error';
//let q = 'Q'+String(num+1)
  let result = [];
  let num = 0;
  for ( i = 0; i < data.length; i++) {
  result = ([i].question);
  num +=i;
  }
  if(info = {}){
    err = 'Object question property required';
    m = '';
    num = -1;
  }else if (info = {'question': "Q4"}){
   err = 'Object answer property required';
   m = '';
   num = -1;
  }else if (info = ({'answer': "A4"})){
    err = 'Object answer property required'
    m = '';
    num = -1;
   }else{
    err = ''
    m = 'Question added';
   }

let response = {"error": err, "message": m, 'number': num};
return response;

}

console.log("MAX");
console.log(addQuestionAnswer({'question': "Q4", 'answer': "A4"}));


//*****************************
//  Module function testing
//******************************"

 function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}



// Set a constant to true to test the appropriate function
const testGetQs = true;
const testGetAs = true;
const testGetQsAs = true;
const testGetQ = true;
const testGetA = true;
const testGetQA = true;
const testAdd = true; // Extra credit
//const testUpdate = true; // Extra credit
//const testDelete = true; // Extra credit
// getQuestions()

 
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}




module.exports = {
getQuestions,
getAnswers,
getQuestionsAnswers,
getQuestion,
getAnswer,
getQuestionAnswer,
addQuestionAnswer,
testing,
};

