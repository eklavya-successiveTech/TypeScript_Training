
"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  List,
  ListItem,
} from "@mui/material";


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be exactly 10 digits")
    .required("Phone is required"),
});

const FormSummary = () => {
  const [showSummary, setShowSummary] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert("Form submitted successfully!");
      console.log(values);
    },
  });

  const hasErrors = Object.keys(formik.errors).length > 0;

  const handleSubmit = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hasErrors) {
      setShowSummary(true);
    }
    formik.handleSubmit(e);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", mt: 5 }}
    >
      <Typography variant="h5" gutterBottom>
        Contact Form
      </Typography>

      
      {showSummary && hasErrors && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Please fix the following errors:
          <List dense>
            {Object.values(formik.errors).map((error, index) => (
              <ListItem key={index} sx={{ pl: 2 }}>
                • {error}
              </ListItem>
            ))}
          </List>
        </Alert>
      )}

    
      <TextField
        fullWidth
        label="Name"
        name="name"
        margin="normal"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        margin="normal"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FormSummary;
