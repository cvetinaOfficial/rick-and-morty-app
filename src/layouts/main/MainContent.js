import '../main/MainContent.scss';

function MainContent() {
    return <>
    <div className="row align-items-center justify-content-center mb-3">
        <div className="col-md-3 ml-2 col-sm-8 col-xs-8">
            <div className="w-100 p-3">
                <img className="w-100" src={process.env.PUBLIC_URL + '/s-l400.jpg'} />
            </div>
        </div>
        <div className="col-md-8 text-center title-font">
            The Rick and Morty's App
        </div>
    </div>
    </>
}

export default MainContent;