import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

export default function Qualification() {
  const [values, setValues] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: "",
    error: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    const qualification = {
      title: values.title || undefined,
      firstname: values.firstname || undefined,
      lastname: values.lastname || undefined,
      email: values.email || undefined,
      completion: values.completion || undefined,
      description: values.description || undefined
    };

    createQualification(qualification).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        alert("Qualification added successfully!");
        setValues({ title: "", firstname: "", lastname: "", email: "", completion: "", description: "", error: "" });
      }
    });
  };

  const createQualification = async (qualification) => {
    try {
      let response = await fetch('/api/qualifications', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(qualification)
      });
      return await response.json();
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="page-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px' }}>
      <Card sx={{ width: '100%', maxWidth: 550, padding: "30px", boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1f2a44', mb: 3 }}>
            Add Qualification
          </Typography>
          <form onSubmit={clickSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={values.title}
                onChange={handleChange('title')}
                required
              />
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                value={values.firstname}
                onChange={handleChange('firstname')}
                required
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                value={values.lastname}
                onChange={handleChange('lastname')}
                required
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange('email')}
                required
              />
              <TextField
                fullWidth
                label="Completion Date"
                variant="outlined"
                value={values.completion}
                onChange={handleChange('completion')}
                required
              />
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={3}
                value={values.description}
                onChange={handleChange('description')}
                required
              />
              {values.error && (
                <Typography color="error" variant="body2">{values.error}</Typography>
              )}
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ backgroundColor: '#1f2a44', padding: '12px', fontWeight: 'bold', mt: 2 }}
              >
                Submit Qualification
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}