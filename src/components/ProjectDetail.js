import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


function RenderProject({ project }) {
    return(
        <Card>
            <CardImg top src={project.image} alt={project.name}/>
            <CardBody>
                <CardTitle>{project.name}</CardTitle>
                <CardText>{project.description}</CardText>
            </CardBody>
        </Card>
    );
}


function RenderComments({ comments }) {
    if (comments != null) {
        const listItems = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });

        return (
            <div style={{color: "white"}}>
                <h4>Comments</h4>
                <ul className="list-unstyled">{listItems}</ul>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function ProjectDetail(props) {
    if (props.selectedProject != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderProject project={props.selectedProject} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.selectedProject.comments}  />
                </div>
            </div>        
        );
    } else return(<div></div>);
}

export default ProjectDetail;
