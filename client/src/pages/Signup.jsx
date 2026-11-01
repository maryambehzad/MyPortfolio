import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    open: false,
    error: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    };

    try {
      let response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      let data = await response.json();
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", open: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page-center">
      <Card sx={{ width: '100%', maxWidth: 450, padding: "30px", boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1f2a44' }}>
            Sign Up
          </Typography>
          {!values.open ? (
            <form onSubmit={clickSubmit}>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange('name')}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange('email')}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange('password')}
                />
                {values.error && (
                  <Typography color="error" variant="body2">
                    {values.error}
                  </Typography>
                )}
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#1f2a44', padding: '12px', fontWeight: 'bold' }}>
                  Submit
                </Button>
              </Box>
            </form>
          ) : (
            <Box display="flex" flexDirection="column" gap={2} alignItems="center">
              <Typography variant="subtitle1" sx={{ color: 'green', textAlign: 'center' }}>
                New account successfully created!
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/signin" fullWidth sx={{ backgroundColor: '#1f2a44', padding: '12px', fontWeight: 'bold' }}>
                Sign In
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </div>
  );
}