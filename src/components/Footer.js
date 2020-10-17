import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment
      inverted color="teal"
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid.Column width={7}>
          <Header inverted as="h4" content="Find the course code on GitHub" />
          <p>
            Frontend HERE and backend HERE
          </p>
        </Grid.Column>

        <Divider inverted section />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
}

export default connect(null, null)(Footer)