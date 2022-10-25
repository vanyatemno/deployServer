import "../frames-style/quiz-frame.css"
import "../frames-style/frame.css"
import TopperPhoto from "../components/topper-photo";
import image from "../images/results-image.png"
import Message from "../components/message";
import StyledButton from "../components/styled-button";
import emojis from "../images/results-emojis.png"
import {useCallback, useContext, useEffect, useState} from "react";
import {UserDataContext} from "../contexts/user-data-context";
import {useNavigate} from "react-router";
import StyledSecondaryButton from "../components/styled-secondary-button";

function ResultsFrame ({numOfRightAnswers}) {

    const [userData, setState] = useState({
        rightAnswers: ""
    })

    const {userActivity, setUserData} = useContext(UserDataContext)

    const navigate = useNavigate();
    const directToStart = useCallback(() => navigate("/", {replace: true}), [navigate]);
    const directToEmail = useCallback(() => navigate("/answers", {replace: true}), [navigate])

    const restartQuiz = () => {
        setUserData({
            email: userActivity.email,
            currentQuestionIndex: 0,
            totalAnswers: 0,
            rightAnswers: 0
        })
        directToStart();
    }

    useEffect(() => {
        try {
            if (!userActivity.hasStarted) directToStart();
            setState(userActivity);
        } catch (e) {}
    })

    return (
        <div className={"results-frame frame"}>
            <TopperPhoto image={image}/>
            <div className="main-body">
                <Message message={"Твій результат " + userData.rightAnswers + " з 10. Ти справжній Dogecoin!"}/>
                <img src={emojis} alt=""/>
                <div className="buttons-area">
                    <StyledButton buttonLabel={"Покращити результат"} onClickEvent={restartQuiz}/>
                    <StyledSecondaryButton buttonLabel={"Дізнатись відповіді"} onClickevent={directToEmail}/>
                </div>
            </div>

        </div>
    );
}

export default ResultsFrame;