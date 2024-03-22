import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center items-center align-middle">
            <h2>!! OOPS 404</h2>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;