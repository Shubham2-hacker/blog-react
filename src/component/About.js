import { Link, useParams } from "react-router-dom";

function About() {
    return(
        <>
            <h1>About Page</h1>
            <p>This is about page of our app.</p>
            <p>And here I am learning about Route in React</p>

            <Link to="/">Go to Home Page</Link>

            <li><Link to="/user/shubham" state={{name: "chotaliya"}}>Shubham</Link></li>
            <li><Link to="/user/tarang">Tarang</Link></li>
        </>
    )
}

export default About;