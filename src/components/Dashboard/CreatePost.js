import React, {useMemo, useState} from 'react'
import {connect} from 'react-redux'
import {createPost} from "../../store/actions/postAction";
import {Redirect} from "react-router";
import {createEditor} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'

const CreatePost = (props) => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [content, setContent] = useState([
        {
            type: 'paragraph',
            children: [{text: 'Write text here ...'}],
        },
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPost(content[0].children[0]);
    }

    const {auth} = props
    if (!auth.uid) return <Redirect to="/signin"/>

    return (
        <div className="CreatePost">
            <Slate
                editor={editor}
                value={content}
                onChange={newValue => setContent(newValue)}
            >
                <Editable/>
                <button className="btn" onClick={handleSubmit}>Create Post</button>
            </Slate>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)