import "../components-style/styled-secondary-button.css"

function StyledSecondaryButton ({buttonLabel, onClickevent}) {
    return (
        <div className={"styled-secondary-button"}>
            <button onClick={onClickevent}>{buttonLabel}</button>
        </div>
    );
}

export default StyledSecondaryButton;