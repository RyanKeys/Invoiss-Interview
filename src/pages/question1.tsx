import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
export default function Question1() {
  const [boolSwitch, setBoolSwitch] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "Enter your Name",
      date: new Date().getDate(),
      age: 1,
    },
    onSubmit: (params) => {
      alert(JSON.stringify(params, null, 2));
    },
  });
  return (
    <>
      <Container sx={{ pt: 2 }}>
        <Grid>
          <Link href="/" passHref>
            <ListItemButton component="a">
              <ListItemText>Back to Home</ListItemText>
            </ListItemButton>
          </Link>
          <Link href="/question2" passHref>
            <ListItemButton component="a">
              <ListItemText>Go to Question 2</ListItemText>
            </ListItemButton>
          </Link>
        </Grid>

        <Typography variant="h5">Question 1</Typography>
        <Typography>Design a form with Formik and Material UI</Typography>
        <Typography>Contains the following items: </Typography>
        <List>
          <ListItem>
            <ListItemText>Name</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>Date (datetime)</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>Active (boolean switch)</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>Age (select from 1 to 70)</ListItemText>
          </ListItem>
        </List>
      </Container>
      <Container>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <form onSubmit={formik.handleSubmit}>
            <ListItem>
              <TextField
                id="name"
                name="name"
                label="name"
                value={formik.values.name}
                helperText={formik.touched.name && formik.errors.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                onChange={formik.handleChange}
              />
            </ListItem>
            <ListItem>
              <TextField
                sx={{ pt: 2 }}
                id="date"
                type="date"
                name="date"
                label="Enter your birthday:"
                value={formik.values.date}
                helperText={formik.touched.name && formik.errors.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                onChange={formik.handleChange}
              />
            </ListItem>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <FormControl>
                <FormGroup>
                  <FormControlLabel
                    value={boolSwitch}
                    label={boolSwitch ? <h2>On</h2> : <h2>Off</h2>}
                    onChange={(e) => setBoolSwitch(!boolSwitch)}
                    control={<Switch color="primary" />}
                  />
                </FormGroup>
                <TextField
                  name="age"
                  label="Your age:"
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 70 } }}
                  helperText={formik.touched.age && formik.errors.age}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <Button
                color="primary"
                type="submit"
                variant="contained"
                sx={{ mt: 3 }}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </>
  );
}
