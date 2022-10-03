import { useRef, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";


export const Login = () => {

    const { setUser } = useContext(UserContext);

    const username = useRef();
    const password = useRef();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username.current.value,
            password: password.current.value
        }

        localStorage.setItem("user", JSON.stringify(user));

        setUser(user);

        navigate('/')
    }

    return (
        <div className="col-8 mx-auto">
            <h2 className="text-center mb-2">Connect to your Color Palettes account!!!</h2>
            <form action="" className="col-8 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        ref={username}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        ref={password}
                        required
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">Log In</button>
                </div>

            </form>
        </div>
    )
}
