import React, { useState } from 'react';

// Define types for MenuItem props
interface MenuItemProps {
  imageSvg: string; // Inline SVG content
  imageSrc?: string;
  altText: string;
  title: string;
  description: string;
  price: string;
}

// Define types for TestimonialCard props
interface TestimonialCardProps {
  quote: string;
  author: string;
  avatarSvg: string; 
}









// Main App component
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Close mobile menu when a navigation link is clicked
  const handleNavLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Header/Navigation Bar */}
      <header className="header">
        <nav className="navbar">
          <a href="#home" className="site-title">
            Indian Arabica Cuisine
          </a>
          <div className="nav-links-desktop">
            <a href="#home" className="nav-link" onClick={handleNavLinkClick}>Home</a>
            <a href="#menu" className="nav-link" onClick={handleNavLinkClick}>Menu</a>
            <a href="#about" className="nav-link" onClick={handleNavLinkClick}>About Us</a>
            <a href="#testimonials" className="nav-link" onClick={handleNavLinkClick}>Reviews</a>
            <a href="#contact" className="nav-link" onClick={handleNavLinkClick}>Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
          >
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path>
            </svg>
          </button>
        </nav>
        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-menu-close-button"
            aria-label="Close mobile menu"
          >
            <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a href="#home" onClick={handleNavLinkClick} className="mobile-nav-link">Home</a>
          <a href="#menu" onClick={handleNavLinkClick} className="mobile-nav-link">Menu</a>
          <a href="#about" onClick={handleNavLinkClick} className="mobile-nav-link">About Us</a>
          <a href="#testimonials" onClick={handleNavLinkClick} className="mobile-nav-link">Reviews</a>
          <a href="#contact" onClick={handleNavLinkClick} className="mobile-nav-link">Contact</a>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/4A2C2A/EFEFEF?text=Chitresh+Coffee+Shop')" }}>
          <div className="hero-overlay"></div> {/* Overlay */}
          <div className="hero-content">
            <h1 className="hero-title">
              Your Daily Dose of Delight
            </h1>
            <p className="hero-subtitle">
              Savor the aroma, taste the passion. Crafted just for you.
            </p>
            <a href="#menu" className="hero-button">
              Explore Our Menu
            </a>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="menu-section">
          <div className="container">
            <h2 className="section-title">
              Our Signature Brews & Bites
            </h2>

            {/* Coffee Category */}
            <h3 className="category-title">
              Freshly Brewed Coffees
            </h3>
            <div className="menu-grid">
              {/* Coffee Item 1: Espresso */}
              <MenuItem
               imageSrc="https://img.freepik.com/premium-photo/classic-italian-espresso_679964-4266.jpg"
               altText="Espresso Photo"
               title="Classic Espresso"
              description="A rich, concentrated shot of coffee, perfect for a quick boost."
              price="₹120.00"
               />

              
              
              {/* Coffee Item 2: Latte */}
              
              <MenuItem
               imageSrc="https://tse4.mm.bing.net/th/id/OIP.GvMM0-_vS_Xw9YJgab1M0wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
               altText="latte Photo"
               title="Creamy Latte"
              description="A smooth, velvety blend of coffee and milk, perfect for a comforting sip."
              price="₹160.00"
               />
              {/* Coffee Item 3: Cappuccino */}
              <MenuItem
               imageSrc="https://th.bing.com/th/id/OIP.UyWdgy2PeY26CFIMrAFaXgHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
               altText="cappuccino Photo"
               title="Frothy Cappuccino"
              description="A bold mix of espresso, steamed milk, and airy foam, perfect for a light yet rich indulgence."
              price="₹170.00"
               />
              {/* Coffee Item 4: Americano */}
              <MenuItem
               imageSrc="https://th.bing.com/th/id/OIP.BSP4bZJ0kWXLzrBgU_L0IQHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
               altText="americano Photo"
               title="Bold Americano"
              description="A strong, smooth blend of espresso and hot water, perfect for a pure and robust coffee experience."
              price="₹140.00"
               />
              {/* Coffee Item 5: Cold Brew */}
               <MenuItem
               imageSrc="https://img.freepik.com/premium-photo/iced-cold-brew-coffee_99233-113469.jpg"
               altText="cold brew Photo"
               title="Signature Cold Brew"
              description="A slow-steeped infusion of premium Arabica beans, perfect for a smooth, refreshing chill."
              price="₹180.00"
               />
              {/* Coffee Item 6: Mocha */}
               <MenuItem
               imageSrc="https://img.freepik.com/premium-photo/cafe-mocha-coffee-drink-decadent_87720-36564.jpg"
               altText="Decadent Mocha Photo"
               title="Decadent Mocha"
              description="A rich fusion of espresso, velvety chocolate, and creamy milk, perfect for a sweet indulgence."
              price="₹190.00"
               />
            </div>

            {/* Pastries Category */}
            <h3 className="category-title">
              Delicious Pastries & Treats
            </h3>
            <div className="menu-grid">
              {/* Pastry Item 1: Croissant */}
               <MenuItem
               imageSrc="https://tse1.mm.bing.net/th/id/OIP.nG0TTQW_zuLk6CCIfwx1uQHaE7?w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3"
               altText="buttery croissant Photo"
               title="Buttery Croissant"
              description="A flaky, golden pastry with a light, airy texture, perfect for a buttery delight."
              price="₹90.00"
               />
              {/* Pastry Item 2: Muffin */}
               <MenuItem
               imageSrc="https://img.freepik.com/free-photo/blueberry-muffin_74190-2636.jpg?size=626&ext=jpg"
               altText="blueberry muffin Photo"
               title="Blueberry Muffin"
              description="A soft, moist treat bursting with juicy blueberries, perfect for a sweet and fruity bite."
              price="₹110.00"
               />
              {/* Pastry Item 3: Cookie */}
               <MenuItem
               imageSrc="https://img.onmanorama.com/content/dam/mm/en/food/readers-recipe/images/2020/8/20/chocolatepastry.jpg"
               altText="chocolate pastry Photo"
               title="Chocolate Pastry"
              description="A rich, indulgent dessert layered with chocolatey goodness, perfect for a decadent treat."
              price="₹130.00"
               />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-section">
          <div className="container about-content">
            <div className="about-image-wrapper">
              {/* Using inline SVG for About Us placeholder */}
              <div className="about-svg-container">
                <svg width="80%" height="80%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2Z" stroke="#604535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8C16 9.10457 15.1046 10 14 10C12.8954 10 12 9.10457 12 8C12 6.89543 12.8954 6 14 6C15.1046 6 16 6.89543 16 8Z" fill="#604535"/>
                  <path d="M8 18C8 16.8954 8.89543 16 10 16H14C15.1046 16 16 16.8954 16 18C16 19.1046 15.1046 20 14 20H10C8.89543 20 8 19.1046 8 18Z" fill="#D4B89C"/>
                  <path d="M4 14L8 10L12 14L16 10L20 14" stroke="#604535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="about-text-content">
              <h2 className="section-title">Our Story</h2>
              <p className="about-description">
                At The Indian Arabica Cuisine, we believe in the magic of a perfect cup of coffee. Founded in 2025 by passionate coffee aficionados, our mission is to bring you the finest beans from around the world, roasted to perfection, and brewed with love.
              </p>
              <p className="about-description">
                We're more than just a coffee shop; we're a community hub where friends gather, ideas brew, and moments are savored. Come experience the difference!
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <h2 className="section-title">
              What Our Customers Say
            </h2>
            <div className="testimonials-grid">
              {/* Testimonial 1 */}
              <TestimonialCard
                quote="The best coffee in town! The atmosphere is so pleasant,
                 and the staff are incredibly friendly."
                author="Aayush."
                avatarSvg={`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#604535"/>
                  <path d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z" fill="#D4B89C"/>
                  <path d="M20 32C15.3333 32 12 34 12 38H28C28 34 24.6667 32 20 32Z" fill="#D4B89C"/>
                  </svg>`}
              />
              {/* Testimonial 2 */}
              <TestimonialCard
                quote="I start every morning with their latte. It's consistently perfect and truly brightens my day."
                author="Milan."
                avatarSvg={`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#604535"/>
                  <path d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z" fill="#D4B89C"/>
                  <path d="M20 32C15.3333 32 12 34 12 38H28C28 34 24.6667 32 20 32Z" fill="#D4B89C"/>
                  </svg>`}
              />
              {/* Testimonial 3 */}
              <TestimonialCard
                quote="Great place to work or relax. Their pastries are also a must-try!"
                author="Dev."
                avatarSvg={`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#604535"/>
                  <path d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z" fill="#D4B89C"/>
                  <path d="M20 32C15.3333 32 12 34 12 38H28C28 34 24.6667 32 20 32Z" fill="#D4B89C"/>
                  </svg>`}
              />
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="contact-section">
          <div className="container contact-content">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-description">
              Have questions or want to say hello? Fill out the form below or find us at our shop.
            </p>

            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <p className="contact-detail">327376 Coffee Lane, Faridabad, India 121001</p>
              <p className="contact-detail">Phone: (+91)123-456-7890</p>
              <p className="contact-detail">Email: info@theindianarabicacuisine.com</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-text">&copy; {new Date().getFullYear()} The Indian Arabica Cuisine Coffee Co. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}



const MenuItem: React.FC<MenuItemProps> = ({ imageSvg, imageSrc, altText, title, description, price }) => (
  <div className="menu-item-card">
    <div
      className="menu-item-image-container"
      style={{ backgroundColor: 'var(--color-d4b89c)' }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={altText}
          className="menu-item-img"
          width={611}
          height={300}
        />
      ) : (
        <div
          className="menu-item-svg-wrapper"
          dangerouslySetInnerHTML={{ __html: imageSvg }}
        />
      )}
    </div>
    <div className="menu-item-details">
      <h4 className="menu-item-title">{title}</h4>
      <p className="menu-item-description">{description}</p>
      <div className="menu-item-footer">
        <span className="menu-item-price">{price}</span>
        <button className="order-button">
          Order Now
        </button>
      </div>
    </div>
  </div>
);


// Reusable TestimonialCard Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, avatarSvg }) => (
  <div className="testimonial-card">
    {/* Render SVG directly using dangerouslySetInnerHTML */}
    <div className="testimonial-avatar-container" style={{backgroundColor: 'var(--color-d4b89c)'}}>
      <div className="testimonial-avatar-svg" dangerouslySetInnerHTML={{ __html: avatarSvg }} />
    </div>
    <p className="testimonial-quote">"{quote}"</p>
    <p className="testimonial-author">- {author}</p>
  </div>
);
