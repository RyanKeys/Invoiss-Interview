import {
  Container,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import Link from "next/link";

export default function Question2() {
  const [reqBody, setReqBody] = useState({ id: "Test", name: "Ryan" });
  const handleSubmit = async () => {
    const res = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };
  return (
    <Container sx={{ pt: 2 }}>
      <Grid>
        <Link href="/question1" passHref>
          <ListItemButton component="a">
            <ListItemText>Go to Question 1</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/question3" passHref>
          <ListItemButton component="a">
            <ListItemText>Go to Question 3</ListItemText>
          </ListItemButton>
        </Link>
      </Grid>
      <Typography variant="h5">Question 2</Typography>
      <Typography>
        Create an api function in NextJS that takes an object with this type{" "}
        {"{id: string, name: test}"}[] and converts it to {"{id: name}"}
      </Typography>
      <Typography>
        Perform error handling so that any object without that shape will throw
        an error.
      </Typography>
      <Typography>Call the function from a button press</Typography>
      <Typography>You can use any library for this</Typography>
      <Typography sx={{ mt: 3 }} variant="h5">
        Data is being sent is id: "Test", name: "Ryan"
      </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Button
          color="primary"
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
          variant="contained"
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </Grid>
    </Container>
  );
}
