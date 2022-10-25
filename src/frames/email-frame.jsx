import "../frames-style/email-frame.css"
import Message from "../components/message";
import EmailArea from "../components/email-area";
import StyledButton from "../components/styled-button";
import {useNavigate} from "react-router";
import {useCallback, useContext, useEffect, useState} from "react";
import {UserDataContext} from "../contexts/user-data-context";

function EmailFrame () {

    const [email, setEmail] = useState("")

    const {userActivity, setUserData} = useContext(UserDataContext);

    const navigate = useNavigate();
    const directToResults = useCallback(() => navigate('/', {replace: true}) [navigate])
    const handleEvent = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    useEffect(() => {
        try {
            if (!userActivity.hasStarted) directToResults();
        } catch (e) {

        }
    })

    const submitEmail = () => {
        if (email != null) {
            let updatedUserActivity = userActivity;
            updatedUserActivity.email = email;
            updatedUserActivity.currentQuestionIndex = 0;
            setUserData(updatedUserActivity);
            directToResults();
        } else {
            console.log("11 ")
        }
    }


    return (
        <div className={"frame"}>
            <div className="main-body">
                <Message message={"Залиште вашу пошту для того, щоб дізнатись результати"}/>
                <EmailArea handler={handleEvent}/>
                <StyledButton buttonLabel={"Отримати віповіді"} onClickEvent={submitEmail}/>
            </div>


        </div>
    );
}

export default EmailFrame;