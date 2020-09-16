import React from 'react';
import { Pane, Heading, Paragraph } from 'evergreen-ui';

function MyComponent(_props) {
  return (
    <Pane>
      <Heading marginTop="default" size={900}>Test Heading 900</Heading>
      <Heading marginTop="default" size={800}>Test Heading 800</Heading>
      <Heading marginTop="default" size={700}>Test Heading 700</Heading>
      <Heading marginTop="default" size={600}>Test Heading 600</Heading>
      <Heading marginTop="default" size={500}>Test Heading 500</Heading>
      <Heading marginTop="default" size={400}>Test Heading 400</Heading>
      <Heading marginTop="default" size={300}>Test Heading 300</Heading>
      <Heading marginTop="default" size={200}>Test Heading 200</Heading>
      <Heading marginTop="default" size={100}>Test Heading 100</Heading>
      <Heading marginTop="default">Test Heading default size</Heading>
      <Paragraph marginTop="default" size={500}>Test Paragraph 500</Paragraph>
      <Paragraph marginTop="default" size={400}>Test Paragraph 400</Paragraph>
      <Paragraph marginTop="default" size={300}>Test Paragraph 300</Paragraph>
    </Pane>
  );
}

export default MyComponent;
