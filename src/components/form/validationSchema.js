import * as Yup from "yup";

export const initialValues = {
  originAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  client: {
    name: "",
    email: "",
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  createdAt: new Date(),
  paymentTerms: "30",
  description: "",
  items: [
    // {
    //   name: "Banner Design",
    //   qty: 1,
    //   price: 156.0,
    // },
    // {
    //   name: "Email Design",
    //   qty: 2,
    //   price: 200.0,
    // },
  ],
};

export const validationSchema = Yup.object().shape({
  originAddress: Yup.object().shape({
    street: Yup.string().required('- All fields must be filled.'),
    city: Yup.string().required('- All fields must be filled.'),
    postCode: Yup.string().required('- All fields must be filled.'),
    country: Yup.string().required('- All fields must be filled.'),
  }),

  client: Yup.object().shape({
    name: Yup.string().required('- All fields must be filled.'),
    email: Yup.string()
      .email("- Invalid email.")
      .required('- All fields must be filled.'),
    street: Yup.string().required('- All fields must be filled.'),
    city: Yup.string().required('- All fields must be filled.'),
    postCode: Yup.string().required('- All fields must be filled.'),
    country: Yup.string().required('- All fields must be filled.'),
  }),
  createdAt: Yup.date().typeError('- Invalid date').required('- All fields must be filled.'),
  paymentTerms: Yup.string().required('- All fields must be filled.'),
  description: Yup.string().required('- All fields must be filled.'),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('- All fields must be filled.'),
        qty: Yup.number()
          .typeError("- Invalid input.")
          .required('- All fields must be filled.'),
        price: Yup.number()
          .typeError("- Invalid input.")
          .required('- All fields must be filled.'),
        //total: Yup.number(),
      })
    )
    .min(1, "- An item must be added."),
});
