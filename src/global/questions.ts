import Question from "../interfaces/questions.interface";

const QUESTIONS: Question[] = [
    {
        question: "Language ability is typically measured in what parts",
        answers: [
            {answerText: 'Conjugation and expanse of vocabulary', isCorrect: false},
            {answerText: 'Talking, writing, listening and reading', isCorrect: true},
            {answerText: 'Pronunciation and sentence structure', isCorrect: false},
            {answerText: 'Accent, speed and spelling', isCorrect: false}
        ]
    },
    {
        question: "A person who learns French and English simultaneously from childhood onward would be considered which type of bilingual?",
        answers: [
            {answerText: 'Subordinate bilingual', isCorrect: false},
            {answerText: 'Coordinate bilingual', isCorrect: false},
            {answerText: 'Compound bilingual', isCorrect: true},
            {answerText: 'All of the above', isCorrect: false}
        ]
    },
    {
        question: "Which part of the brain is is responsible for logical thinking?",
        answers: [
            {answerText: 'Cerebellum', isCorrect: false},
            {answerText: 'Right Hemisphere', isCorrect: false},
            {answerText: 'Dorsolateral Prefrontal Cortex', isCorrect: false},
            {answerText: 'Left Hemisphere', isCorrect: true}
        ]
    },
    {
        question: "The fact that language involves functions both typical of the left and right hemispheres while lateralization develops gradually with age has led to which hypothesis?",
        answers: [
            {answerText: 'The Critical Period Hypothesis', isCorrect: true},
            {answerText: 'The Critical Mass Hypothesis', isCorrect: false},
            {answerText: 'The Compound Bilingual Hypothesis', isCorrect: false},
            {answerText: 'The Early Laterization Hypothesis', isCorrect: false}
        ]
    },
    {
        question: "A trained bilingual brain can also help delay the onset of diseases, like Alzheimer's and dementia",
        answers: [
            {answerText: 'True', isCorrect: true},
            {answerText: 'False', isCorrect: false}
        ]
    },
    {
        question: "Being bilingual will make me smarter?",
        answers: [
            {answerText: 'Yes', isCorrect: false},
            {answerText: 'No', isCorrect: true},
            {answerText: 'Not always the case', isCorrect: false}
        ]
    }
]

export default QUESTIONS;