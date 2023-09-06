import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const AddQuestionForm = () => {
  const [addedQuestion, setAddedQuestion] = useState(null);

  const handleSubmit = (values) => {
    const newQuestion = {
      text: values.newQuestion,
      category: values.category,
    };

    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    })
      .then((r) => r.json())
      .then((questions) => {
        setAddedQuestion(newQuestion);
      });
  };

  return (
    <>
      <Typography variant="h5">Subscribe!</Typography>
      <Formik
        initialValues={{
          newQuestion: "",
          category: "",
        }}
        validationSchema={Yup.object({
          newQuestion: Yup.string()
            .max(150, "Must be 150 characters or less")
            .required("Required"),
          category: Yup.string()
            .oneOf(
              ["recreation", "family & friends", "work", "miscellaneous"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="New Question"
            name="newQuestion"
            type="text"
            placeholder="Type your question here..."
          />

          <MySelect label="Category" name="category">
            <option value="">Select a Category</option>
            <option value="recreation">Recreation</option>
            <option value="family & friends">Family & Friends</option>
            <option value="work">Work</option>
            <option value="miscellaneous">Miscellaneous</option>
          </MySelect>

          <Button type="submit" color="secondary" variant="outlined">
            Submit
          </Button>
        </Form>
      </Formik>

      {/* Display submitted question */}
      {addedQuestion && (
        <div>
          <Typography variant="h6">Submitted Question:</Typography>
          <p>
            <strong>Question:</strong> {addedQuestion.text}
          </p>
          <p>
            <strong>Category:</strong> {addedQuestion.category}
          </p>
        </div>
      )}
    </>
  );
};

export default AddQuestionForm;
