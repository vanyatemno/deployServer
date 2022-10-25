import "../frames-style/failure-frame.css"
import TopperPhoto from "../components/topper-photo";
import Message from "../components/message";
import StyledButton from "../components/styled-button";
import failureEmojis from "../images/failure-emojis.png"
import failureImage from "../images/failure-image.png"
import StyledSecondaryButton from "../components/styled-secondary-button";
import {useCallback, useContext, useEffect} from "react";
import {UserDataContext} from "../contexts/user-data-context";
import {useNavigate} from "react-router";
import {QuizDataContext} from "../contexts/quiz-data-context";

function FailureFrame () {

    const {userActivity, setUserData} = useContext(UserDataContext)
    const {quizData} = useContext(QuizDataContext)

    const navigate = useNavigate();
    const directToQuestion = useCallback(() => navigate('/question', {replace: true}), [navigate]);
    const directToResults = useCallback(() => navigate('/results', {replace: true}), [navigate])
    const directToStart = useCallback(() => navigate('/', {replace: true}), [navigate])

    useEffect(() => {
        try {
            if (!userActivity.hasStarted) directToStart();
        } catch (e) {}
    })


    const skipQuestion = () => {
        let updatedUserActivity = userActivity;
        updatedUserActivity.currentQuestionIndex++;
        setUserData(updatedUserActivity);
        if (quizData.numOfQuestions  == updatedUserActivity.currentQuestionIndex) {
            directToResults();
        } else {
            directToQuestion();
        }
    }




    return (
        <div className={"failure-frame frame"}>
            <TopperPhoto image={failureImage}/>
            <div className={"main-body"}>
                <Message message={"Ох, то не так... Нажаль"}></Message>
                <img src={failureEmojis} alt=""/>
                <div className={"buttons-area"}>
                    <StyledButton buttonLabel={"Повторити спробу"} onClickEvent={directToQuestion}/>
                    <StyledSecondaryButton buttonLabel={"Пропустити та\n" +
                        "втратити бали"} onClickevent={skipQuestion}/>
                </div>

            </div>

        </div>
    );
}

export default FailureFrame;