import { useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/siteContent.js";

export default function Services() {
  useEffect(() => {
    document.title = "Services | Jude Anandaraj";
  }, []);

  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">Services</p>
        <h1>What I can take on</h1>
        <p className="lede">Programming, web, games, and 3D assets.</p>
      </header>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <img src={service.image} alt={service.imageAlt} />
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
          </article>
        ))}
      </div>
      <p className="services-note">
        To reach me, use the <Link to="/contact">contact form</Link>.
      </p>
    </div>
  );
}
