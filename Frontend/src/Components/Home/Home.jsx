import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section class="home" id="home">
        <div class="home-text">
          <h1>
            <span> 1 </span>in every 8 people<br></br> In the World live with{" "}
            <span>Mental Disorder</span>
          </h1>
          <p>
            Despite their prevalence, many individuals do not receive timely
            intervention, and mental health issues affect millions of people
            worldwide.
          </p>
          <Link className="btn" to="/chat">
            Start Here
          </Link>
        </div>
      </section>
      {/* <!-- Shop --> */}
      <section class="shop" id="shop">
        <div class="heading">
          <span>Our Key</span>
          <h2>Features</h2>
        </div>
        {/* <!-- Content --> */}
        <div class="shop-container">
          {/* <!-- Box 1 --> */}
          <div class="box">
            <div class="box-img">
              <img src="mind7.jpg" alt="" />
            </div>
            <div class="title-price">
              <h3>Emotion Detection</h3>
            </div>
          </div>
          {/* <!-- Box 2 --> */}
          <div class="box">
            <div class="box-img">
              <img src="mind 8.jpg" alt=""></img>
            </div>
            <div class="title-price">
              <h3>Sentiment Analysis</h3>
            </div>
          </div>

          <div class="box">
            <div class="box-img">
              <img src="mind14.jpg" alt=""></img>
            </div>
            <div class="title-price">
              <h3>Voice Emotion Recognition</h3>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About --> */}
      <section class="about" id="about">
        <div class="about-img">
          <img src="img/about.jpg" alt=""></img>
        </div>
        <div class="about-text">
          <span>About Us</span>
          <h2>Because Your Mental Health Matters &hearts;</h2>
          <p>
            An AI-based tool that monitors users' mental health through their
            interactions (text and voice) and provides real-time support.
          </p>
          <p>
            Helps in early identification of mental health issues, leading to
            timely intervention. Provides personalized and immediate resources,
            increasing awareness and utilization. Offers timely intervention and
            continuous monitoring, enhancing overall mental well-being.
          </p>
          <a href="#shop" class="btn">
            Learn More.
          </a>
        </div>
      </section>
    </div>
  );
}
