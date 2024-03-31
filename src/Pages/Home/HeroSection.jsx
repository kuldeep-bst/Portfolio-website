export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kuldeep</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            As a 2023 MCA graduate and software engineer I'm dedicated to
            leveraging my skills in software development to drive innovation and
            solve complex challenges.
          </p>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1HDg6vyPssBa9AF9g_rPW3cMxgjROn3Gd/view?usp=sharing"
            className="navbar--content"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-primary">Resume</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/coder1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
