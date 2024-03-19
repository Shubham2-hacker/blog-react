import { Link } from "react-router-dom";

function Page404() {
    return(
        <>
            <h1>404 Page</h1>
            <p>This URL is not available.</p>
            <p>And here I am learning about Route in React</p>

            <Link to="/">Go to Home Page</Link>
        </>
    )
}

export default Page404;