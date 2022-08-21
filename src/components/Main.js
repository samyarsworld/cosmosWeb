import React, { Component } from 'react';
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';
import { PROJECTS } from '../shared/projects';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projects: PROJECTS,
          selectedProjectId: null
        };
      }

    onProjectSelect(projectId) {
        this.setState({selectedProjectId: projectId})
    }

    render () {
        return (
            <React.Fragment>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/' element={<ProjectList
                        projects={this.state.projects}
                        onClick={(projectId => this.onProjectSelect(projectId))}/>} />

                    <Route path='/meh' element={<ProjectDetail
                        selectedProject={this.state.projects.filter(project => project.id === this.state.selectedProjectId)[0]}/>} />
                    
                </Routes>
                <Footer />
                
            </React.Fragment>
        );
    }  
}

export default Main;
