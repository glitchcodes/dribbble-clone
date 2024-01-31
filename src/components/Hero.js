import './Hero.css'
import Pill from "./Pill";

function Hero() {
    return (
        <section className="container">
            <div>
                <h1 className="display-2 fw-bold mt-5 mb-5">Trending web & landing page designs</h1>
                <p>Explore trending Web Design, Responsive Design, User Experience and User Interfaces from popular
                    design
                    portfolios</p>

                <form className="d-flex w-50 mx-auto mt-5" role="search">
                    <input className="form-control p-3" type="search" placeholder="Search 18 million shots"
                           aria-label="Search"/>
                </form>
            </div>
            <div className="mx-auto mt-4 d-inline-block">
                <ul className="nav nav-pills">
                    <Pill name="web-development"></Pill>
                    <Pill name="landing-page"></Pill>
                    <Pill name="user-interface"></Pill>
                    <Pill name="site"></Pill>
                    <Pill name="e-commerce"></Pill>
                </ul>
            </div>
        </section>
    )
}

export default Hero;