import React from "react";
import { useState } from "react";
import "./Feed.css";
import Post from "./Post";
import InputOption from "./InputOption";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventIcon from "@mui/icons-material/Event";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Feed() {
      const [posts, setPosts] = useState([]);

      const sendPost = (e) => {
            e.preventDefault();
      };

      return (
            <div className="feed">
                  <div className="feed__inputContainer">
                        <div className="feed__input">
                              <CreateIcon />
                              <form>
                                    <input type="text" />
                                    <button onClick={sendPost} type="submit">
                                          Send
                                    </button>
                              </form>
                        </div>
                        <div className="feed__inputOptions">
                              <InputOption
                                    title="Photo"
                                    Icon={ImageIcon}
                                    color="#70B5F9"
                              />
                              <InputOption
                                    title="Video"
                                    Icon={SubscriptionsIcon}
                                    color="#E7A33E"
                              />
                              <InputOption
                                    title="Event"
                                    Icon={EventIcon}
                                    color="#C0CBCD"
                              />
                              <InputOption
                                    title="Write Article"
                                    Icon={CalendarMonthIcon}
                                    color="#7FC15E"
                              />
                        </div>
                  </div>
                  {posts.map((post) => (
                        <Post />
                  ))}
                  <Post
                        name="Gethin Davies"
                        description="This is a Test"
                        message="Wow this worked"
                  />
            </div>
      );
}

export default Feed;
