import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h2>This is my Assignment-6 Home Page</h2>
      <p>Implement Lazy Loading.</p>
      <ul>
        <li>
          <Link href="/Assignment-6/about">Go to About Page</Link>
        </li>
        <li>
          <Link href="/Assignment-6/contact">Go to Contact Page</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
