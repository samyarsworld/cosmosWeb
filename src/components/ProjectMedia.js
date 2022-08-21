import React from 'react';
import { Media } from 'reactstrap';

function ProjectList(props) {

    const imageStyle = {
        width: 150,
        height: 150,
    };

    const item = props.projects.map((project) => {
        return (
            <div key={project.id} className="col-12 mt-5">
            <Media tag="li" style={{listStyle: "none"}}>
                <Media left middle>
                    <Media object style={imageStyle} src={project.image} alt={project.name} />
                    <Media body className="ml-5">
                    <Media heading>{project.name} </Media>
                        <p>{project.description}</p>
                    </Media>
                </Media>
                
            </Media>
            </div>
        );
    });

    return(
        <div className='container'>
            <div className='row'>
                <Media list>
                    {item}
                </Media>
            </div>
        </div>
    );
}

export default ProjectList;