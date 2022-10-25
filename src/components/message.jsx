import "../components-style/message.css"

function Message ({message}) {
    return (
        <div className={"message"}>
            <p>{message}</p>
        </div>
    );
}

export default Message;