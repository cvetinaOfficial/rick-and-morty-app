import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function ActorCard(props){

    return <>
    <div className="col-md-4">
      <Card className="align-items-center p-3 mr-2 mb-2">
        <CardImg top width="100%" src={props.image} alt="Actor image" style={{borderRadius: 125 + 'px'}} />
        <CardBody>
            <div>
                <CardTitle tag="h5" className="d-inline mr-2">Name:</CardTitle>
                <CardTitle tag="h5" className="d-inline">{props.name}</CardTitle>
            </div>
            <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">Gender:</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.gender}</CardSubtitle>
            </div>
            <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">Location:</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.location}</CardSubtitle>
            </div>
            <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">Status:</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.status}</CardSubtitle>
            </div>
            <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">Species:</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.species}</CardSubtitle>
            </div>
          <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">Origin:</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.origin}</CardSubtitle>
          </div>
          <div>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-inline mr-2">Created</CardSubtitle>
                <CardSubtitle tag="h6" className="d-inline">{props.created}</CardSubtitle>
          </div>
        </CardBody>
      </Card>
      </div>
    </>
}

export default ActorCard;