import { useRouteError } from "react-router-dom";

// useRouteError is a hook

const ErrorElement = () => {
    const error = new useRouteError();
    console.log(error);
    return (
        <div className="error-card">
            <h1>OOPs Erorr ! You are on the wrong path !!!</h1>
        </div>
    )
};

export default ErrorElement;