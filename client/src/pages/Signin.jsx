import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import auth from "../auth-helper.js";

export default function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: ""
  });

  const navigate = useNavigate();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    };

    try {
      let response = await fetch('/auth/signin', {
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
        auth.authenticate(data, () => {
          navigate('/');
        });
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
            Sign In
          </Typography>
          <form onSubmit={clickSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
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
        </CardContent>
      </Card>
    </div>
  );
}