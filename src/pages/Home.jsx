import Cool from '../assets/img/Cool_Picture.png'
import Logo1 from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <div >
                <nav className="navbar">
                    <Link to={'/'} className="logo-link">
                        <img className='logo-img' src={Logo1} alt="" />
                    </Link>
                    <div className="nav-links">
                        <Link to="/login" className="link-button">Iniciar seccion</Link>
                    </div>
                </nav>

                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <hr />
                        <h2
                            className="intro-text"
                            style={{ fontSize: 48, color: "#FFFFFF", fontWeight: "bold" }}
                        >
                            IMAX - TECHNICAL AND INDUSTRIAL SOLUTION PROVIDER
                        </h2>
                        <hr />
                        <div className="text-center" style={{
                            marginTop: 50

                        }}>
                            <img
                                src={Cool}
                                alt="Cool Picture"
                                className="img-responsive"
                                style={{ display: "inline-block" }}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>


                    <h2 className="brand-before">
                        <small>Welcome to</small>
                    </h2>
                    <h1 className="brand-name">IMAX Tech Industries</h1>
                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12">
                                <hr />
                                <h2 className="intro-text text-center">
                                    Contact:{" "}
                                    <strong>IMAX Tech Industries</strong>
                                </h2>
                                <hr />
                            </div>
                            <div className="col-lg-12">
                                <p>
                                    Address:{" "}
                                    <strong>
                                        Jiron cosme bueno 128, Salamanca de Monterico, Lima, Peru
                                    </strong>
                                </p>
                                <p>
                                    Phone: <strong>989629569</strong> <br />
                                    Email:{" "}
                                    <strong>
                                        <a href="mailto:imaxtech%40imaxtechindustries.com">
                                            imaxtech@imaxtechindustries.com
                                        </a>
                                    </strong>{" "}
                                    <br />
                                    Business Hours: <strong>9 am - 6 pm</strong> <br />
                                </p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="copyright">Copyright © IMAX Tech Industries 2022</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home