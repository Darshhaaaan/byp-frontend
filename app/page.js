
"use client";
import ScrollReveal from "./components/ScrollReveal";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="byp-home">
      <ScrollReveal />
      <Navbar />
      
      {/* Hero Section */}
      <section className="byp-hero">
        <div className="byp-hero-content">
          <p className="byp-eyebrow">
            EVERYTHING YOU NEED, IN ONE PLACE
          </p>

          <h1>
            Everyday essentials.
            <br />
            <span>Extraordinary ease.</span>
          </h1>

          <p className="byp-description">
            Everything all in one place.
            Discover a simpler way to shop for your everyday needs.
          </p>

          <a href="/shop" className="byp-shop-button">
            Explore the collection ↗
          </a>
        </div>

        <div className="byp-hero-image" data-reveal>
  <div className="byp-hero-photo">
    <img
      src="/images/freshproduce.jpg"
      alt="Fresh fruits and vegetables"
    />

    <div className="byp-hero-photo-overlay"></div>

    <div className="byp-hero-photo-label">
      <span>THE EVERYDAY EDIT</span>
      <p>
        Fresh finds.
        <br />
        Everyday favourites.
      </p>
    </div>

    <div className="byp-hero-photo-stamp">
      <span>FRESH</span>
      <span>✳</span>
      <span>ALWAYS</span>
    </div>
  </div>
</div>

        <div className="byp-hero-footer">
          <span>BYTHEPOUND</span>
          <span>SIMPLIFY YOUR EVERYDAY.</span>
          <span>01 / 03</span>
        </div>
      </section>

{/* Product Showcase */}
<section className="byp-showcase">
  <div className="byp-showcase-heading" data-reveal>
    <div>
      <p className="byp-eyebrow">THE EVERYDAY EDIT</p>
      <h2>
        Good things.
        <br />
        <span>Thoughtfully gathered.</span>
      </h2>
    </div>

    <p className="byp-showcase-description">
      From everyday essentials to little indulgences,
      discover everything you need in one place.
    </p>
  </div>

  <div className="byp-product-grid">
    <a href="/shop" className="byp-product-card byp-product-featured" data-reveal>
      <div className="byp-product-art byp-art-one">
  <img
    src="/images/freshproduce.jpg"
    alt="Fresh fruits and vegetables"
  />
  <span>01</span>
  <div className="byp-art-circle">FRESH<br />FINDS</div>
</div>
      <div className="byp-product-info">
        <div>
          <h3>Fresh Finds</h3>
          <p>Everyday freshness, thoughtfully picked.</p>
        </div>
        <span>↗</span>
      </div>
    </a>

    <a href="/shop" className="byp-product-card" data-reveal>
      <div className="byp-product-art byp-art-two">
  <img
    src="/images/dailyessentials.jpg"
    alt="Everyday grocery essentials"
  />
  <span>02</span>
  <div className="byp-art-circle">DAILY<br />NEEDS</div>
</div>
      <div className="byp-product-info">
        <div>
          <h3>Daily Essentials</h3>
          <p>The things you reach for every day.</p>
        </div>
        <span>↗</span>
      </div>
    </a>

    <a href="/shop" className="byp-product-card" data-reveal>
      <div className="byp-product-art byp-art-three">
  <img
    src="/images/littleextras.jpg"
    alt="Snacks and everyday treats"
  />
  <span>03</span>
  <div className="byp-art-circle">LITTLE<br />EXTRAS</div>
</div>
      <div className="byp-product-info">
        <div>
          <h3>Little Extras</h3>
          <p>A little something for every occasion.</p>
        </div>
        <span>↗</span>
      </div>
    </a>
  </div>

  <div className="byp-showcase-footer">
    <span>CURATED FOR YOUR EVERYDAY</span>
    <a href="/shop">EXPLORE EVERYTHING ↗</a>
  </div>
</section>

{/* Brand Story Section */}
<section className="byp-story">
  <div className="byp-story-top" data-reveal>
    <div className="byp-story-heading">
      <p className="byp-eyebrow">A LITTLE ABOUT US</p>
      <h2>
        More than just
        <br />
        <span>the everyday.</span>
      </h2>
    </div>

    <div className="byp-story-copy">
      <p>
        Life is busy enough. Finding the things you need
        shouldn't be complicated.
      </p>
      <p>
        ByThePound brings everyday essentials together
        in one convenient place, making it easier to
        discover, choose and shop for the things that
        matter to you.
      </p>
      <a href="/shop" className="byp-story-link">
        DISCOVER BYTHEPOUND ↗
      </a>
    </div>
  </div>

  <div className="byp-story-divider"></div>

  <div className="byp-benefits">
    <article className="byp-benefit" data-reveal>
      <span className="byp-benefit-number">01</span>
      <div className="byp-benefit-icon">✳</div>
      <h3>Everything in one place</h3>
      <p>
        Explore a variety of everyday products without
        the hassle of looking everywhere.
      </p>
    </article>

    <article className="byp-benefit" data-reveal>
      <span className="byp-benefit-number">02</span>
      <div className="byp-benefit-icon">↗</div>
      <h3>Simple by design</h3>
      <p>
        A straightforward shopping experience that
        keeps things easy and convenient.
      </p>
    </article>

    <article className="byp-benefit" data-reveal>
      <span className="byp-benefit-number">03</span>
      <div className="byp-benefit-icon">✦</div>
      <h3>Made for everyday life</h3>
      <p>
        From daily essentials to unexpected finds,
        discover things that fit your routine.
      </p>
    </article>
  </div>

  <div className="byp-story-bottom">
    <span>BYTHEPOUND</span>
    <span>EVERYTHING ALL IN ONE PLACE.</span>
  </div>
</section>

{/* Website Footer */}
<footer className="byp-footer" data-reveal>
  <div className="byp-footer-main">
    <div className="byp-footer-brand">
      <a href="/">
        <img src="/images/logo.png" alt="ByThePound" />
      </a>
      <p>Everything all in one place.</p>
      <span>Making everyday shopping simpler.</span>
    </div>

    <div className="byp-footer-column">
      <h4>EXPLORE</h4>
      <a href="/">Home</a>
      <a href="/shop">Shop</a>
      <a href="/shop">Explore products</a>
    </div>

    <div className="byp-footer-column">
      <h4>YOUR ACCOUNT</h4>
      <a href="/login">Login</a>
      <a href="/register">Create an account</a>
    </div>

    <div className="byp-footer-column">
      <h4>NEED HELP?</h4>
      <a href="/support">Customer support</a>
    </div>
  </div>

  <div className="byp-footer-bottom">
    <span>© {new Date().getFullYear()} BYTHEPOUND</span>
    <span>EVERYTHING ALL IN ONE PLACE.</span>
    <a href="/">BACK TO TOP ↑</a>
  </div>
</footer>

    </main>
  );
}
