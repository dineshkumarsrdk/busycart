import { Link } from "react-router-dom";

export function ErrorPage() {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-danger fw-bold">Page not found</h1>
            <h6><Link to="/">Return Home</Link></h6>
        </div>
    );
}