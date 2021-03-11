import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function EpisodeCard(props){

    return <>
        <div>
      <Card className="card align-items-center p-3">
        <CardBody>
            <div>
                <CardTitle tag="h5" className="d-inline mr-2">Name:</CardTitle>
                <CardTitle tag="h5" className="d-inline">{props.name}</CardTitle>
            </div>
            <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">Episode:</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.episode}</CardSubtitle>
            </div>
            <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">AirDate:</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.airDate}</CardSubtitle>
            </div>
            <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">Created:</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.created}</CardSubtitle>
            </div>
        </CardBody>
      </Card>
    </div>
    </>
}

export default EpisodeCard;