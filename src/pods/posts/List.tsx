import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// @ts-ignore
import EditIcon from '../../images/edit-icon.png';
import PostModel from '../../models/PostModel';


const List = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    const navigate = useNavigate();

    const getPosts = async () => {
        try {
            const response = await axios.get('https://63590307c27556d289495329.mockapi.io/posts');
            setPosts(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const navigateToCreateNewPost = () => {
        navigate('/new');
    }

    useEffect(() => {
        getPosts();
    }, [])

    return <div>
        <button className='post-new-btn'
            onClick={navigateToCreateNewPost}>&#43; Add new</button>
        <table cellSpacing={0}>
            <thead>
                <tr>
                    <td>
                        Title
                    </td>
                    <td>
                        Content
                    </td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {posts.map((i: PostModel) => 
                    <tr key={i.id}>
                        <td>{i.title}</td>
                        <td>{i.content}</td>
                        <td>
                            <button className='post-edit-btn'
                                onClick={() => navigate(`/edit/${i.id}`)}>
                                <img src={EditIcon}
                                    alt='edit'
                                    height='12px'
                                    width='12px' />
                            </button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default List;
