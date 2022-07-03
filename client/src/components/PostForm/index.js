import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
import {Cloudinary} from "@cloudinary/url-gen";


const PostForm = () => {
  const [postText, setText] = useState("");
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addPost, { error }] = useMutation(ADD_POST, 
    {
    refetchQueries:[
      {
        query: QUERY_POSTS
      }
    ]
  });

  const handleChangeImage = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    console.log(image)
  }, [image]);

  const handleUpload = async (event) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tutorial");

    const response = await fetch("https://api.cloudinary.com/v1_1/dilkd4txa/image/upload",{
      method:"post",
      body: data
    }).then(res => res.json())
    setUrl(response.url);
    return response.url;
    
  };

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const imageURL = await handleUpload();

    try {
      // add post to database
     const post = await addPost({
        variables: { postText, image:imageURL },
      });
      console.log(post)
      // clear form value
      setImage('');
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="content-center p-2">
    
    <div>
      <h3>Upload Image URL:</h3>
      <input
      type="file"
      accept="image/*"
      onChange={handleChangeImage}
      className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md lg:text-lg focus:ring-1 h-30"
    />
    <img src={url}></img>
    </div>
    
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new post..."
          value={postText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
