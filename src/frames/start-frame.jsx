import "../frames-style/start-frame.css"
import "../frames-style/frame.css"
import TopperPhoto from "../components/topper-photo";
import Message from "../components/message";
import StyledButton from "../components/styled-button";
import startImage from "../images/start-image.png"
import {useCallback, useContext} from "react";
import {useNavigate} from "react-router";
import {QuizDataContext} from "../contexts/quiz-data-context";
import {UserDataContext} from "../contexts/user-data-context";

function StartFrame () {

    const {userActivity, setUserData} = useContext(UserDataContext)


    const navigate = useNavigate();
    const directToQuestions = useCallback(() => navigate('/question', {replace: true}), [navigate]);

    const handleOnClick = () => {
        let tempUserActivity = userActivity;
        tempUserActivity.hasStarted = true;
        setUserData(tempUserActivity)
        directToQuestions()
    }

    console.log(userActivity)

    return (
        <div className={"start-frame frame"}>
            <TopperPhoto image={startImage}/>
            <div className={"main-body"}>
                <Message message={"Вважаєш себе справжнім криптаном?\n" +
                    "\n" +
                    "   то зараз подивимось\n" +
                    "...що ти за токен!"}/>
                <StyledButton buttonLabel={"Почати"} onClickEvent={handleOnClick} />
            </div>

        </div>
    );
}

export default StartFrame;