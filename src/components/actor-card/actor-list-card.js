import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function ActorListCard(props){

    return <>
      <div className="col-12">
          <Card className="mb-3">
            <div className="row">
              <div className="col-3">
              <CardImg top width="100%" src={props.image} alt="Actor image" style={{borderRadius: 125 + 'px'}} />
              </div>
              <div className="col">
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
              </div>
            </div>
          </Card>
      </div>
    </>
}

export default ActorListCard;