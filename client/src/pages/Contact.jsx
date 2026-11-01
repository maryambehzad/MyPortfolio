import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

export default function Contact() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = async (data) => {
    try {
      let response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      let result = await response.json();
      if (result.error) {
        console.log(result.error);
      } else {
        setValues({ firstname: "", lastname: "", email: "" });
        alert("Contact saved successfully!");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="page-center">
      <Card sx={{ width: '100%', maxWidth: 500, padding: "30px", boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1f2a44' }}>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit(submitForm)}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                {...register("firstname", { required: "First name is required" })}
                value={values.firstname}
                onChange={handleChange('firstname')}
                error={!!errors.firstname}
                helperText={errors.firstname ? errors.firstname.message : ""}
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                {...register("lastname", { required: "Last name is required" })}
                value={values.lastname}
                onChange={handleChange('lastname')}
                error={!!errors.lastname}
                helperText={errors.lastname ? errors.lastname.message : ""}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                {...register("email", { required: "Email is required" })}
                value={values.email}
                onChange={handleChange('email')}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#1f2a44', padding: '12px', fontWeight: 'bold' }}>
                Submit Contact
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}