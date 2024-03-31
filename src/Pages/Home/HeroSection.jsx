export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Hey, how are you?</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non
            doloremque autem quas consequatur eligendi et ab expedita delectus,
            tenetur hic ipsum explicabo veniam. Dolore cum veniam sunt ipsa
            voluptatem sed doloribus harum reprehenderit quidem, sequi nihil
            ullam neque, quas eius beatae in eum, a nisi et quibusdam. Labore,
            architecto!
            <br />
            Dolom, quas. Amet soliuta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">Get in touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
