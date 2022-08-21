import React from 'react';
import { Card, CardImg,
    CardTitle, CardImgOverlay } from 'reactstrap';

function ProjectList (props) {

    const item = props.projects.map(project => {
        return (
            <div key={project.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => props.onClick(project.id)} style={{marginTop: 25}}>
                    <CardImg width="100%" src={project.image} alt={project.name}/>
                    <CardImgOverlay>
                        <CardTitle>{project.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return(
        <div className="container" style={{marginTop: 20}}>
            <div className="row">
                {item}
            </div>
        </div>
    );
}

export default ProjectList;