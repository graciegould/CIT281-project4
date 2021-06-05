
const {getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    addQuestionAnswer,
    testing } =require('./p4-module.js');
const data = require('./p4-data.js')
const err =  {"error": "",
"statusCode": 200,};


  // Require the Fastify framework and instantiate it
  const fastify = require("fastify")();
  // Handle GET verb for / route using Fastify
  // Note use of "chain" dot notation syntax
  
  // student route
  fastify.get("/cit/question", (request, reply) => {
    let testQuestion = getQuestions(data);
if (testQuestion =[ 
  "Q1",
  "Q2",
  "Q3"
]){
  testQuestion = {
    "error": "",
    "statusCode": 200,
    "questions": [
        "Q1",
        "Q2",
        "Q3"
    ]
}

}
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(testQuestion);

  });
  
  fastify.get("/cit/answers", (request, reply) => {
    let testAnswer = getAnswer(data);
    if (testAnswer =[ 
      "Q1",
      "Q2",
      "Q3"
    ]){
      testAnswer = {
        "error": "",
        "statusCode": 200,
        "answers": [
            "A1",
            "A2",
            "A3"
        ]
    }}
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(testAnswer);

  });
  
  fastify.get("/cit/questionanswer", (request, reply) => {
    let testQuestionsAnswers = getQuestionsAnswers(data);
    if (testQuestionsAnswers = [
      {"question":"Q1","answer":"A1"},
      {"question":"Q2","answer":"A2"},
      {"question":"Q3","answer":"A3"}]){
        testQuestionsAnswers = {
          "error": "",
          "statusCode": 200,
          "questions_answers": [
              {
                  "question": "Q1",
                  "answer": "A1"
              },
              {
                  "question": "Q2",
                  "answer": "A2"
              },
              {
                  "question": "Q3",
                  "answer": "A3"
              }
          ]
        
      }
      }
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(testQuestionsAnswers);

  });
  fastify.get("/cit/question/:number", (request, reply) => {
    let num = request.params.number;

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(getQuestion(num));

  });
  fastify.get("/cit/answer/:number", (request, reply) => {
    let num = request.params.number;

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(getAnswer(num));

  });
  fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let num = request.params.number;
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(getQuestionAnswer(num));

  });
  fastify.get("*", (request, reply) => {
    let num = request.params.number;
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        "error": "Route not found",
        "statusCode": 404});

  });

  fastify.get("/cit/question/add", (request, reply) => {
    let dataFromClient = JSON.parse(request.body);
    console.log(dataFromClient);

    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(addQuestionAnswer({}));
    });

  
  // Start server and listen to requests using Fastify
  const listenIP = "localhost";
  const listenPort = 8080;
  fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  
  });
 