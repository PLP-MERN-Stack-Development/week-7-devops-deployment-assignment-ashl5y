function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Welcome to our MERN Stack Application</h1>
          <p>A production-ready application with authentication, database integration, and more</p>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Authentication</h3>
              <p>Secure user authentication with JWT tokens</p>
            </div>
            <div className="feature-card">
              <h3>Database Integration</h3>
              <p>MongoDB integration with Mongoose ODM</p>
            </div>
            <div className="feature-card">
              <h3>Production Ready</h3>
              <p>Optimized for production with CI/CD pipeline</p>
            </div>
            <div className="feature-card">
              <h3>Monitoring</h3>
              <p>Application monitoring and error tracking</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;