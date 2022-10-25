import './App.css';
import StartFrame from "./frames/start-frame";
import {QuizDataContextProvider} from "./contexts/quiz-data-context";
import {UserDataProvider} from "./contexts/user-data-context";
import QuizFrame from "./frames/quiz-frame";
import SuccessFrame from "./frames/success-frame";
import FailureFrame from "./frames/failure-frame";
import ResultsFrame from "./frames/results-frame";
import EmailFrame from "./frames/email-frame";
import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <UserDataProvider>
            <QuizDataContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index path={"/"} element={<StartFrame/>}/>
                        <Route path={"/question"} element={<QuizFrame/>}/>
                        <Route path={"/success"} element={<SuccessFrame/>}/>
                        <Route path={"/failure"} element={<FailureFrame/>}/>
                        <Route path={"/results"} element={<ResultsFrame/>}/>
                        <Route path={"/answers"} element={<EmailFrame/>}/>
                    </Routes>
                </BrowserRouter>
            </QuizDataContextProvider>
        </UserDataProvider>
    </div>
  );
}

export default App;
