import React from 'react';
// import { Grid, Segment } from 'semantic-ui-react';
import { Segment, Responsive } from 'semantic-ui-react';

// const { Row, Column } = Grid;

// const { Column } = Grid;

const App = () => (
  <Segment.Group>
    {/* <Responsive as={Segment} {...Responsive.onlyMobile}>Mobile</Responsive>
    <Responsive as={Segment} {...Responsive.onlyTablet}>Tablet</Responsive>
    <Responsive as={Segment} {...Responsive.onlyComputer}>Computer</Responsive>
    <Responsive as={Segment} {...Responsive.onlyLargeScreen}>Large Screen</Responsive>
    <Responsive as={Segment} {...Responsive.onlyWidescreen}>Widescreen</Responsive> */}
    <Responsive as={Segment} {...Responsive}>Does this work everywhere?</Responsive>
  </Segment.Group>
);

// const App = () => (
//   <Grid columns={'equal'}>
//     {/* <Row> */}
//     <Column width={4}>
//       <Segment>Bio</Segment>
//     </Column>
//     <Column width={6}>
//       <Segment>Github Feed</Segment>
//     </Column>
//     <Column width={6}>
//       <Segment>Experience &amp; Education</Segment>
//     </Column>
//     {/* </Row> */}
//   </Grid>
// );

export default App;
