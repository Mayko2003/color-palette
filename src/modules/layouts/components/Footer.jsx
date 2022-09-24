import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
export const Footer = () => {
    return (
        <div className='bg-dark mt-5'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div calssName="col-md-4 d-flex align-items-center">
                    {/* <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                    </a> */}
                    <span className="text-muted">© 2022 Company, Inc</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex me-3">
                    <li className="ms-3"><a className="text-muted" target='_blank' rel="noreferrer" href="https://github.com/Mayko2003"><FaGithub /></a></li>
                    <li className="ms-3"><a className="text-muted" target='_blank' rel="noreferrer" href="https://instagram.com/maykojej"><FaInstagram /></a></li>
                    <li className="ms-3"><a className="text-muted" target='_blank' rel="noreferrer" href="https://www.facebook.com/mayko.fernandez.520/"><FaFacebook /></a></li>
                </ul>
            </footer>
        </div>
    )
}
