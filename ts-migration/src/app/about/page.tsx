"use client";

const AboutPage = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        padding: "20px",
        maxWidth: "600px",
        margin: "50px auto",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>About This App</h2>

      <section style={{ marginBottom: "20px" }}>
        <h3>1. Authentication Context</h3>
        <ul>
          <li>Create a parent component as a provider.</li>
          <li>Create a child component that consumes the context.</li>
          <li>Manage login state with a context (`logged in` or `logged out`).</li>
          <li>Child component includes a login button.</li>
          <li>Display:
            <ul>
              <li><b>Welcome, [username]!</b> if logged in</li>
              <li><b>Please log in</b> otherwise</li>
            </ul>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3>2. Nested Contexts: Theme Preferences</h3>
        <ul>
          <li>Create a second context to manage theme (light/dark).</li>
          <li>Wrap the parent provider to also include theme context.</li>
          <li>Allow users to toggle themes in the child component.</li>
          <li>Apply theme changes to styling and display preference.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3>3. Routing & Pages</h3>
        <ul>
          <li>Create separate pages: Home and About.</li>
          <li>Use file-based routing (Next.js routing).</li>
          <li>Provide navigation links to switch between pages.</li>
          <li>Display unique content for each route.</li>
          <li>Implement a custom <b>404 Not Found</b> page for invalid routes.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
