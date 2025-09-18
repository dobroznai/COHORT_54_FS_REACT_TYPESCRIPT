export enum CONTACT_US_FORM_VALUES {
  FULL_NAME = "full_name",
  PHONE = "phone",
  EMAIL = "email",
}

export type ContactUsFormValues = {
  [CONTACT_US_FORM_VALUES.FULL_NAME]: string;
  [CONTACT_US_FORM_VALUES.PHONE]: string;
  [CONTACT_US_FORM_VALUES.EMAIL]: string;
};
