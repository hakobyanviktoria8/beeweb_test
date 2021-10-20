import React from "react";
import {connect} from "react-redux";

const Dashboard = (props) => {
    const {projects} = props
    return (
        <div>
            Dashboard
            {console.log("projects ",projects)}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)