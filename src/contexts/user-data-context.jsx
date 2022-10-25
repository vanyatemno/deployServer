import {createContext, useEffect, useState} from "react";


export const UserDataContext = createContext({
    userActivity: {}
});

export const UserDataProvider = ({children}) => {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({
            email: null,
            currentQuestionIndex: 0,
            totalAnswers: 0,
            rightAnswers: 0,
            hasStarted: false
        })
    }, [])


    const value = {userActivity: userData, setUserData}


    return (
        <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>
    );

}