// File: ComplexForm.jsx
"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
    .required('Phone is required'),
});

const FormYup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phone: '',
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box 
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", mt: 4 }}
    >
      <Typography variant="h5" gutterBottom>Registration Form</Typography>

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Phone Number"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        margin="normal"
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

export default FormYup;
