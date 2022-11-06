import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

import PostModel from '../../models/PostModel';
import { RouteName } from '../../enums/Routes';

const EditPost = () => {
    const navigate = useNavigate()

    const [editPost, setEditPost] = useState<Partial<PostModel>>({title: '', content: ''});
    const { id } = useParams();

    const submitEdit = async (e: any)  => {
        try {
            e.preventDefault();
           await axios.put(`https://63590307c27556d289495329.mockapi.io/posts/${id}`, {
                title: editPost.title,
                content: editPost.content
            })
            navigate(RouteName.HOME);
        } catch (err) {
            console.log(err);
        }
    }

    const isSubmitDisabled = () => {
        return editPost.content === '' || editPost.title === '';
    }

    const getPostDetails = async () => {
        try {
           const response = await axios.get(`https://63590307c27556d289495329.mockapi.io/posts/${id}`)
            setEditPost({...editPost, title: response.data.title, content: response.data.content})
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPostDetails();
        // eslint-disable-next-line
    }, [])

    return <div className='posts-list'>
        <form>
            <label>Edit post: {id}</label>
            <input 
                placeholder='Title'
                value={editPost.title}
                onChange={
                    (e) => setEditPost({
                        ...editPost,
                        title: e.target.value
                    })
            }/>
            <textarea 
                placeholder='Content' 
                className='content'
                value={editPost.content}
                onChange={(e) => setEditPost({
                        ...editPost,
                        content: e.target.value
                    })
                }/>
            <button 
                onClick={(e) => submitEdit(e)}
                disabled={isSubmitDisabled()}
                style={{cursor: isSubmitDisabled() ? 'not-allowed' : 'pointer'}}>Submit</button>
        </form>
    </div>
}

export default EditPost;
