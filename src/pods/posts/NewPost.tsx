import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import PostModel from '../../models/PostModel';

const NewPost = () => {
    const [newPost, setNewPost] = useState <Partial<PostModel>>({title: '', content: ''});
    const navigate = useNavigate()

    const createNewPost = async (e: any)  => {
        try {
            e.preventDefault();
           const response = await axios.post('https://63590307c27556d289495329.mockapi.io/posts', {
                title: newPost.title,
                content: newPost.content
            })
            navigate(`/edit/${response.data.id}`);
        } catch (err) {
            console.log(err);
        }
    }

    const isSubmitDisabled = () => {
        return newPost.content === '' || newPost.title === '';
    }

    return <div className='posts-list'>
        <form>
            <label>Add new post</label>
            <input placeholder='Title'
                value={
                    newPost.title
                }
                onChange={
                    (e) => setNewPost({
                        ...newPost,
                        title: e.target.value
                    })
                }/>
            <textarea placeholder='Content' className='content'
                value={newPost.content}
                onChange={(e) => setNewPost({
                        ...newPost,
                        content: e.target.value
                    })
                }/>
            <button 
                onClick={(e) => createNewPost(e)}
                disabled={isSubmitDisabled()}
                style={{cursor: isSubmitDisabled() ? 'not-allowed' : 'pointer'}}>Submit</button>
        </form>
    </div>
}

export default NewPost;
