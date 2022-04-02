import QUESTIONS from "../global/questions";
import { useState } from 'react';

const Quiz = (): JSX.Element => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    const handleAnswerButtonClick = (isCorrect: boolean): void => {
        if (isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1;
        nextQuestion < QUESTIONS.length ? setCurrentQuestion(nextQuestion) : setShowScore(true);
    }

    return (
        <>
            <div className={`card mx-auto md:flex items-center justify-center gap-2 border-gray-400 border-2 rounded-xl shadow-2xl px-4 py-20`}>
                {showScore 
                ?   
                    <div className={`text-center text-2xl ${((100 / QUESTIONS.length) * (score)) <= 25? 'text-red-500' : ((100 / QUESTIONS.length) * (score)) >= 75 ? 'text-green-500' : 'text-yellow-500'} font-bold`}>
                        <div className='uppercase'>
                            You scored {score} out of {QUESTIONS.length}
                        </div>
                    </div> 
                : 
                <>
                <div className={`fade md:w-2/3`}>    
                    <div className='md:text-2xl text-white text-center'>
                        <span className="">QUESTION {currentQuestion+ 1}</span>/{QUESTIONS.length}
                    </div>
                    <div className="bar-container block rounded-2xl my-2.5">
                        <div className="bar p-3 bg-gradient-to-r border-none from-rose-500 to-purple-500 rounded-xl" style={{width: `${(100 / QUESTIONS.length) * (currentQuestion+1)}%`}}></div>
                    </div>
                    <div className="w-3/4 text-center mx-auto text-white font-bold text-xl">
                        {QUESTIONS[currentQuestion].question}
                    </div>
                </div>
                <div className={`answers fade md:w-1/3 flex flex-col`}>
                    {QUESTIONS[currentQuestion].answers.map((el, index) => 
                    <button className="answer px-2 h-14 border-solid bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-xl" key={index} onClick={() => handleAnswerButtonClick(el.isCorrect)}>{el.answerText}</button>)}
                </div>
                </>}
            </div>
            <p className="text-gray-200">by Raxel Arias {new Date().getFullYear()}</p>
        </>
    )
}

export default Quiz;