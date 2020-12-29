import './styles/App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App"> 

    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#">Brand website</Navbar.Brand>
      <Navbar.Toggle aira-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#gallery">Socials</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <header className="app-header">
        <h2 className="title header-title">
          Brand website
        </h2>
        <p className="paragraph-copy">TODO: ADD SOMETHING HERE OR REMOVE SECTION ALL TOGETHER.</p>
    </header>
    <section className="section section-about">
      <h2 className="title about-title">About Man</h2>
      <div className="paragraph-copy">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at tempus nibh. Vestibulum feugiat rutrum dui eu facilisis. Donec nulla dui, tempus vitae tellus at, interdum pretium magna. Proin semper tellus at imperdiet ultricies. Aenean fermentum auctor odio ut accumsan. Aliquam id est nec leo rutrum pulvinar non sed enim.</p>
      </div>
    </section>
    <section className="section section-images">
      <div className="images-container">
        <div className="col-xl-3 col-lg-4 col-sm-6">
          {/* <img src={this.props.image} alt="image-goes here" aria-label="image" /> */}
        </div>
      </div>
      <div className="images-copy">
        <h2 className="title imaages-title">About the work</h2>
      </div>
      <div className="paragraph-copy">
        <p>Pictures/info on the persons work...</p>
        <p>See more here at: <a href="https://www.instagram.com" target="_blank">Link to Instagram</a>.</p>
      </div>
    </section>
    <section className="section section-socials">
    <h2 className="title socials-title">Socials</h2>
      <div className="socials paragraph-copy">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque:</p>
        <nav className="social-media-links">
          <a href="" className="social-media-link link fa fa-facebook" aria-label="link to fb" target="_blank"></a>
          <a href="" className="social-media-link link fa fa-linkedin" aria-label="link to linkedin" target="_blank"></a>
          <a href="" className="social-media-link link fa fa-instagram" aria-label="link to insta" target="_blank"></a>
          <a href="" className="social-media-link link fa fa-youtube" aria-label="link to Youtube" target="_blank"></a>
          <a href="" className="social-media-link link fa fa-reddit" aria-label="link to reddit" target="_blank"></a>
          <a href="" className="social-media-link link fa fa-twitter" aria-label="link to twitter" target="_blank"></a>
        </nav>
      </div>
    </section>
    <section className="section section-contact">
      <div>
        <h2 className="title contact-title">Contact me</h2>
        <div>
          <p className="paragraph-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque:</p>
          <form className="contact-form">
            <p>Name&nbsp;(Required):</p><input className="contact-form-item" type="text" placeholder="Full name" required />
            <p>Subject&nbsp;(Required):</p><input className="contact-form-item" type="text" placeholder="subject" />
            <p>Message&nbsp;(Required):</p><textarea className="contact-form-item" placeholder="Ask away"></textarea>
            <input className="contact-form-item form button" type="button" value="Send" />
            <input className="contact-form-item form-button" type="button" value="Cancel" />
          </form>
          
        </div>
      </div>
    </section>

    <footer className="footer">
      <div>
        <p className="footer-copy">This website was designed and developed by <em><a href="https://www.instagram.com/marksman_g/" target="_blank">Marcus Gardner</a></em></p>
      </div>
    </footer>
    </div>
  );
}

export default App;
