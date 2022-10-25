import "../frames-style/default-frame.css"

function DefaultFrame ({data}) {
    return (
        <div className={"default-frame"}>
            <img src={data.image} alt=""/>

        </div>
    );
}