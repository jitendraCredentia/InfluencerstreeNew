import { useState } from "react";
import { notification } from "antd";
import emailjs from "emailjs-com";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>( {
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));
  
    // Fill in the EmailJS service ID, template ID, and user ID
    const serviceID = "service_x5cky48"; // Replace with your service ID
    const templateID = "template_rzriu9k"; // Replace with your template ID
    const userID = "iPGCRT65MWBlJgMsR"; // Replace with your user ID from EmailJS
  
    try {
      if (Object.values(errors).every((error) => error === "")) {
        // Send specific keys to EmailJS instead of sending the entire values object
        const emailResponse = await emailjs.send(
          serviceID,
          templateID,
          {
            user_name: values.name, // Map name to user_name
            user_email: values.email, // Map email to user_email
            message: values.message, // Map message to message
          },
          userID
        );
  
        if (emailResponse.status === 200) {
          // Reset the form if the email was sent successfully
          event.target.reset();
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues },
          }));
  
          notification["success"]({
            message: "Success",
            description: "Your message has been sent!",
          });
        } else {
          notification["error"]({
            message: "Error",
            description: "There was an error sending your message, please try again later.",
          });
        }
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }
  };
  

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
