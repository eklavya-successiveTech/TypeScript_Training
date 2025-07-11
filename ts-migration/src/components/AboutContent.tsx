"use client"
const AboutContent = () => {
  return (
    <main>
      <h1>About Page</h1>
        <h3>1. Authentication Context</h3>
        <ul>
          <li>Create a parent component as a provider.</li>
          <li>Create a child component that consumes the context.</li>
          <li>Manage login state with a context (`logged in` or `logged out`).</li>
          <li>Child component includes a login button.</li>
        </ul>
    </main>
  );
};

export default AboutContent;
