import '../components-style/email-area.css';

function EmailArea ({handler}) {

    return (
        <div id={"email-area"}>
            <input type="email" placeholder={"Your email"} onChange={handler}/>
        </div>
    );

}

export default EmailArea;