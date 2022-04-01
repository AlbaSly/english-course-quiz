export default interface Question {
    question: string,
    answers: Answers[]
}

interface Answers {
    answerText: string,
    isCorrect: boolean
}