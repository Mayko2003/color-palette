import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { UserContext } from '../../../context'


export const Header = () => {


    const { user, setUser } = useContext(UserContext);


    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, [setUser])



    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={logo} alt="..." className="navbar-brand" style={{ width: '4em', height: '4em' }} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="headerNavbar">
                    <ul className="navbar-nav mb-2 w-100">
                        <li className="nav-item me-auto">
                            <Link className='nav-link' to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to={user ? '/palette/create' : '/login'}>
                                Create Palette
                            </Link>
                        </li>
                        {
                            user ?
                                (
                                    <li className="nav-item dropdown">
                                        <span className="nav-link dropdown-toggle" id="sessionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.username}
                                        </span>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="sessionDropdown">
                                            <li>
                                                <Link className='dropdown-item disabled'>
                                                    Profile
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <span className='dropdown-item' onClick={handleLogout}>Log Out</span>
                                            </li>
                                        </ul>
                                    </li>
                                ) :
                                (
                                    <li className='nav-item'>
                                        <Link className='nav-link' to={'/login'}>
                                            Log In
                                        </Link>
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
