import "../frames-style/quiz-frame.css"
import "../frames-style/frame.css"
import StyledButton from "../components/styled-button";
import TopperPhoto from "../components/topper-photo";
import Message from "../components/message";
import image from "../images/0.png"
import {useCallback, useContext, useEffect, useState} from "react";
import {QuizDataContext} from "../contexts/quiz-data-context";
import {UserDataContext} from "../contexts/user-data-context";
import {useNavigate} from "react-router";
import def from "../images/def.png"


function QuizFrame () {

    let {userActivity} = useContext(UserDataContext)
    let {quizData} = useContext(QuizDataContext)


    const navigate = useNavigate();
    const handleOnClickRightAnswer = useCallback(() => navigate('/success', {replace: true}), [navigate]);
    const handleOnClickWrongAnswer = useCallback(() => navigate('/failure', {replace: true}), [navigate]);
    const directToStart = useCallback(() => navigate('/', {replace: true}), [navigate])

    const [currentQuestion, setQuestion] = useState({
        question: "Loading...",
        answers: [
            {
                answer: "",
                isTrue: false
            },
            {
                answer: "",
                isTrue: false
            },
            {
                answer: "",
                isTrue: false
            },
            {
                answer: "",
                isTrue: false
            }
        ]
    });


    useEffect(() => {
        try {
            if (!userActivity.hasStarted) directToStart();
            setQuestion(quizData.questions[userActivity.currentQuestionIndex])
            def = require("../images/" + quizData.questions[userActivity.currentQuestionIndex].image)
        } catch (e) {
            console.log(e);
        }
    })


    return (
        <div className={"quiz-frame frame"}>
            <TopperPhoto image={image}/>
            <div className="main-body">
                <Message message={currentQuestion.question}/>
                {currentQuestion.answers.map((answer, index) => {
                    if (answer.isTrue) {
                        return <StyledButton buttonLabel={answer.answer} onClickEvent={handleOnClickRightAnswer} key={index}/>
                    } else {
                        return <StyledButton buttonLabel={answer.answer} onClickEvent={handleOnClickWrongAnswer} key={index}/>
                    }
                })}
            </div>

        </div>
    );
}

export default QuizFrame;