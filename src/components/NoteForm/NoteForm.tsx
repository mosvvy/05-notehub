import { useId } from "react";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import css from "./NoteForm.module.css";

interface NoteFormValues {
  title: string;
  content: string;
  tag: string;
}

const initialValues: NoteFormValues = {
  title: "",
  content: "",
  tag: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title too short")
    .max(50, "Title too long")
    .required("Title is required"),
  content: Yup.string()
    .min(5, "Message too short")
    .max(300, "Message too long"),
  tag: Yup.string().required("Select tag"),
});

export default function NoteForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: NoteFormValues,
    actions: FormikHelpers<NoteFormValues>
  ) => {
    console.log("Form submitted:", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={`${fieldId}-title`}>Title</label>
        <Field
          type="text"
          name="title"
          id={`${fieldId}-title`}
          className={css.input}
        />
        <ErrorMessage name="title" component="span" className={css.error} />

        <label htmlFor={`${fieldId}-content`}>Content</label>
        <Field
          as="textarea"
          name="content"
          id={`${fieldId}-content`}
          className={css.textarea}
        />
        <ErrorMessage name="content" component="span" className={css.error} />

        <label htmlFor={`${fieldId}-tag`}>Tag</label>
        <Field
          as="select"
          name="tag"
          id={`${fieldId}-tag`}
          className={css.input}
        >
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </Field>

        <button type="submit" className={css.submitButton}>
          Submit
        </button>
        <button type="reset" className={css.cancelButton}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
}
