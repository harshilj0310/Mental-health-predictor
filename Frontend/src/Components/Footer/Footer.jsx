export default function Footer() {
  return (
    <div className="main_footer">
      <section class="footer" id="footer">
        <div class="footer-box">
          <h2>
            Mind<span> Guardians</span>
          </h2>
          <p>
            An AI-based tool that monitors users' mental health through their
            interactions (text and voice) and provides real-time support
          </p>
          <div class="social">
            <a href="#">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div class="footer-box">
          <h3>Services</h3>
          {/* <!-- <li><a href="#">Product</a></li>--> */}
          <li>
            <a href="#">Help & Support</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </div>

        <div class="footer-box contact-info">
          <h3>Contact</h3>
          <span>Indore, India</span>
          <span>912345678</span>
          <span>brian@MindGuardians.com</span>
        </div>
      </section>
      <div class="copyright">
        <p>&#169; MindGuardians All Right Reserved.</p>
      </div>
      {/* <!-- Link To JS --> */}
      <script src="main.js"></script>
    </div>
  );
}
