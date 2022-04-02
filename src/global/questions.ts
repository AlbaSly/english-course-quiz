import Question from "../interfaces/questions.interface";

const QUESTIONS: Question[] = [
    {
        question: "What did parents think about learning a second language in children?",
        answers: [
            {answerText: 'It\'s bad for kid\'s cognitive development', isCorrect: false},
            {answerText: 'Bad grades', isCorrect: false},
            {answerText: 'Lower IQ', isCorrect: false},
            {answerText: 'All of the above', isCorrect: true}
        ]
    },
    {
        question: "Where appeared the next line \"Being bilingual makes you smarter and more creative\"",
        answers: [
            {answerText: 'In the headlines', isCorrect: false},
            {answerText: 'From scientists', isCorrect: false},
            {answerText: 'In researches', isCorrect: false},
            {answerText: 'In the headlines and researches', isCorrect: true}
        ]
    },
    {
        question: "Teach your child French and you get a better child! more creativity, multitasking, and academic performance in other subjects, it's true?",
        answers: [
            {answerText: 'Yes', isCorrect: false},
            {answerText: 'No', isCorrect: true}
        ]
    },
    {
        question: "What part of our body benefits from learning a language?",
        answers: [
            {answerText: 'The brain', isCorrect: true},
            {answerText: 'The nervous system', isCorrect: false},
        ]
    },
    {
        question: "Who receive the main benefit from learning a new language?",
        answers: [
            {answerText: 'The cerebral cortex', isCorrect: false},
            {answerText: 'The executive functions', isCorrect: true},
            {answerText: 'The brain', isCorrect: false}
        ]
    },
    {
        question: "Which are the executive functions?",
        answers: [
            {answerText: 'Attention, problem solving, planning', isCorrect: true},
            {answerText: 'Alzheimer\'s and Dementia', isCorrect: false},
            {answerText: 'Brain muscles', isCorrect: false}
        ]
    },
    {
        question: "\"The research has found that all sorts of cognitively challenging activities improve executive functions.\". It's true?",
        answers: [
            {answerText: 'Yes', isCorrect: true},
            {answerText: 'No', isCorrect: false}
        ]
    },
    {
        question: "Playing video games can make you better at assessing risks and placing bets",
        answers: [
            {answerText: 'True', isCorrect: true},
            {answerText: 'False', isCorrect: false}
        ]
    },
    {
        question: "Switching between vocabularies can help us to be a better multitasker",
        answers: [
            {answerText: 'True', isCorrect: true},
            {answerText: 'False', isCorrect: false}
        ]
    },
    {
        question: "Do other complex cognitive activities seem to prevent or delay dementia?",
        answers: [
            {answerText: 'Yes', isCorrect: true},
            {answerText: 'No', isCorrect: false}
        ]
    },
    {
        question: "learning a language does make you smarter.",
        answers: [
            {answerText: 'No', isCorrect: false},
            {answerText: 'Maybe not', isCorrect: false},
            {answerText: 'Probably', isCorrect: true},
            {answerText: 'Yes', isCorrect: false}
        ]
    }
]

export default QUESTIONS;