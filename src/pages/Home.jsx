import { Helmet } from 'react-helmet-async';
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Ambisec Nominees Limited | Corporate Governance Experts Nigeria</title>

        <meta
          name="description"
          content="Ambisec Nominees Limited provides expert corporate governance, company secretarial, and business compliance services in Nigeria."
        />

        <meta
          name="keywords"
          content="Ambisec, corporate governance Nigeria, CAC registration, company secretarial services, business compliance Nigeria"
        />

        <meta name="author" content="Ambisec Nominees Limited" />

        {/* Open Graph */}
        <meta property="og:title" content="Ambisec Nominees Limited" />
        <meta
          property="og:description"
          content="Trusted corporate governance and compliance experts in Nigeria."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Content */}
      <Hero />
    </div>
  )
}

export default Home;