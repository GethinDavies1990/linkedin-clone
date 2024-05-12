import React from "react";
import "./Post.css";
import InputOption from "./InputOption";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { forwardRef } from "react";

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption Icon={ThumbUpIcon} title='Like' color='gray' />
        <InputOption Icon={AddCommentIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareIcon} title='Share' color='gray' />
        <InputOption Icon={SendIcon} title='Send' color='gray' />
      </div>
    </div>
  );
});

export default Posts;
