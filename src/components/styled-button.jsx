import "../components-style/styled-button.css"

function StyledButton ({buttonLabel, onClickEvent}) {
    return (
        <div className={"styled-button"}>
            <button onClick={onClickEvent}>{buttonLabel}</button>
        </div>
    );
}

export default StyledButton;