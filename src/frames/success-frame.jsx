import "../frames-style/success-frame.css"
import image from "../images/success-image.png"
import emojis from "../images/success-emojis.png"
import TopperPhoto from "../components/topper-photo";
import Message from "../components/message";
import StyledButton from "../components/styled-button";
import {useCallback, useContext, useEffect} from "react";
import {UserDataContext} from "../contexts/user-data-context";
import {useNavigate} from "react-router";
import {QuizDataContext} from "../contexts/quiz-data-context";

function SuccessFrame () {

    const {userActivity, setUserData} = useContext(UserDataContext)
    const {quizData} = useContext(QuizDataContext)

    const navigate = useNavigate();
    const directToQuestion = useCallback(() => navigate('/question', {replace: true}), [navigate]);
    const directToResults = useCallback(() => navigate('/results', {replace: true}), [navigate])
    const directToStart = useCallback(() => navigate('/', {replace: true}), [navigate])

    const increaseCurrentQuestionIndex = () => {
        let updatedUserActivity = userActivity;
        updatedUserActivity.currentQuestionIndex++;
        updatedUserActivity.rightAnswers++;
        setUserData(updatedUserActivity);
    }

    const handleOnClickSuccess = () => {
        increaseCurrentQuestionIndex();
        if (quizData.numOfQuestions == userActivity.currentQuestionIndex) {
            directToResults();
        } else {
            directToQuestion();
        }
    }

    useEffect(() => {
        try {
            if (!userActivity.hasStarted) directToStart();
        } catch (e) {}
    })

    return (
        <div className={"success-frame"}>
            <TopperPhoto image={image}/>
            <div className={"main-body"}>
                <Message message={"Так! Ти справжній криптан!"}></Message>
                <img src={emojis} alt=""/>
                <StyledButton buttonLabel={"Йдемо далі"} onClickEvent={handleOnClickSuccess}/>
            </div>
        </div>
    );
}

export default SuccessFrame;