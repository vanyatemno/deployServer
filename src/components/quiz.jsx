import "../components-style/quiz.css"
import StyledButton from "./styled-button"

function Quiz ({data}) {
    return (
        <div className={"quiz"}>
            <p>{data.question}</p>
            {data.answers.map((answer) => {return <StyledButton buttonLabel={answer.answer}/>})}
        </div>
    );
}

export default Quiz;