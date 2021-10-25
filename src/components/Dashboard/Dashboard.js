import React from "react";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router";
import CreatePost from "./CreatePost";
import "./Dashboard.css"

const Dashboard = (props) => {
    const {posts, auth} = props
    console.log("posts ", posts)

    if (!auth.uid) return <Redirect to="/signin"/>
    return (
        <div className="Dashboard">
            <CreatePost/>

            {
                posts ?
                    posts.map(post =>
                        <div key={post.id}>
                            <p>{post.text}</p>
                        </div>)
                    :
                    <p>Loading...</p>
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "posts"}
    ])
)(Dashboard)