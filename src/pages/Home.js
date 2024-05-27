import React from 'react';

function Home({ visits }) {
  return (
    <section>
      <h1>Home Page</h1>
      <p>Banner Id: B00916506</p>
      <p>Home page visited {visits} times</p>
    </section>
  );
}

export default Home;