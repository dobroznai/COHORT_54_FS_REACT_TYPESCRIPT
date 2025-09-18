import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { ContactUsFormWrapper, Title, InputContainer } from "./styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CONTACT_US_FORM_VALUES, type ContactUsFormValues } from "./types";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_FORM_VALUES.FULL_NAME]: Yup.string()
      .required("Full name is required")
      .min(3, "Full name field should contain minimum 3 characters")
      .max(50, "Full name field should contain maximum 50 characters"),
    [CONTACT_US_FORM_VALUES.PHONE]: Yup.string()
      .required("Phone name is required")
      .matches(/^\+?[0-9\s-]+$/, "Enter a valid phone number") // Добавил валидацию через matches мобильного номера
      .min(4, "Phone field should contain minimum 4 characters")
      .max(20, "Phone field should contain maximum 20 characters"),
    [CONTACT_US_FORM_VALUES.EMAIL]: Yup.string()
      .required("Email field is required")
      .email("This field should be in email forward")
      .min(6, "Email fiels should contain minimum 6 characters")
      .max(60, "Email field should contain maximum 60 characters"),
  });

  // добавил типизацию через type ContactUsFormValues
  const formik = useFormik<ContactUsFormValues>({
    initialValues: {
      [CONTACT_US_FORM_VALUES.FULL_NAME]: "",
      [CONTACT_US_FORM_VALUES.PHONE]: "",
      [CONTACT_US_FORM_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values: ContactUsFormValues, helpers) => {
      console.log(values);
      console.log(helpers);
      console.log("Submit from formik works!!!");
    },
  });
  return (
    <ContactUsFormWrapper onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputContainer>
        <Input
          id="full_name"
          name={CONTACT_US_FORM_VALUES.FULL_NAME}
          type="text"
          placeholder="Your full name"
          label="Full name"
          value={formik.values[CONTACT_US_FORM_VALUES.FULL_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.FULL_NAME]}
        />
        <Input
          id="phone"
          name={CONTACT_US_FORM_VALUES.PHONE}
          type="text"
          placeholder="Your phone number"
          label="Phone"
          value={formik.values[CONTACT_US_FORM_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.PHONE]}
        />
        <Input
          id="email"
          name={CONTACT_US_FORM_VALUES.EMAIL}
          type="email"
          placeholder="Your email"
          label="Email"
          value={formik.values[CONTACT_US_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.EMAIL]}
        />
      </InputContainer>
      <Button type="submit" name="SEND REQUEST" />
    </ContactUsFormWrapper>
  );
}

export default ContactUs;
