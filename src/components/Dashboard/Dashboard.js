import React from "react";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router";

const Dashboard = (props) => {
    const {projects, auth} = props
    console.log("projects ", projects)
    if (!auth.uid) return <Redirect to="/signin"/>
    return (
        <div>
            {
                projects ?
                    projects.map(project =>
                        <div key={project.id}>
                            <h2>{project.title}</h2>
                            <p>{project.content}</p>
                        </div>)
                    :
                    <p>Loading...</p>
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "projects"}
    ])
)(Dashboard)