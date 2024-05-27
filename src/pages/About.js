import React from 'react';

function About({ visits }) {
  return (
    <section>
      <h1>About Page</h1>
      <p>Welcome to the About Page</p>
      <p>Home page visited {visits} times</p>
    </section>
  );
}

export default About;