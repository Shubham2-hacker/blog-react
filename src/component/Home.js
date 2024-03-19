import { Link, useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navToPage = (url) => {
    navigate(url);
  };
  
  return (
    <>
      <h1>Home Page</h1>
      <p>This is home page of our app.</p>
      <p>And here I am learning about Route in React</p>
      <Link to="/about">Go to About Page</Link>
      <br />
      <button onClick={() => navToPage('/about')}>Go to About Page</button>
      <br />
      <button onClick={() => navToPage('/filter')}>Go to Filter Page</button>
    </>
  );
}

export default Home;
