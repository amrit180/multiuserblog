import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createBlog } from "../../functions/blog";

export default function CreateBlog() {
  const [values, setValues] = useState({
    title: "",
    body: "",
    image: "",
    postedBy: "",
  });
  const { user } = useSelector((state) => ({ ...state }));

  const userId = user && user._id;
  const authtoken = user && user.token;
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      postedBy: userId,
    });
  };
  const handleSubmit = async () => {
    await createBlog(values, authtoken)
      .then((res) => {
        console.log(res.data);
        setValues({
          title: "",
          body: "",
          image: "",
          postedBy: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <input
          type="text"
          required
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={values.title}
          className="form-control mb-5"
        />
        <input
          type="text"
          required
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={values.image}
          className="form-control mb-5"
        />
        <input
          type="text"
          required
          name="body"
          placeholder="Body"
          onChange={handleChange}
          value={values.body}
          className="form-control mb-5"
        />

        <button class="btn btn-primary" onClick={handleSubmit}>
          Create Blog
        </button>
      </div>
    </>
  );
}
