import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/6";

export default function Api() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="card border-0">
        <div className="display-2 mt-5 mb-5">
            ReactJs Axios - JSON API
        </div>
        <hr/>

        <div className="card-body">
        <h1 className="display-5 alert alert-primary  
        text-capitalize">{post.title}</h1>
        <p className="text-primary h3">{post.body}</p>
      </div>
    </div>
  );
}