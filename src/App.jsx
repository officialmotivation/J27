import { useState, useEffect } from "react";
import "./App.css";
import groom from "./assets/grm.png";
import bride from "./assets/bride.png";
import FloatingCouple from "./FloatingCouple";
import couple from "./assets/couple.png";
import music from "./assets/music.mp3";

export default function WeddingInvitation() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="container">
      <div className="petals">
        <span>🌸</span>
        <span>🌺</span>
        <span>💮</span>
        <span>🌸</span>
        <span>🌺</span>
      </div>
      <div className="doorsContainer">

        {/* LEFT DOOR */}
        <div
          className={`door left-door ${open ? "open-left" : ""}`}
          onClick={() => {
            setOpen(true)
            const audio = document.getElementById("wedding-music");

            if (playing) {
              audio.pause();
            } else {
              audio.play();
            }

            setPlaying(!playing);
          }}
        >

          <div className="pattern">

            <div className="divider">
              ༺❀༻
            </div>

            <div className="titles">
              <h2 className="heading">You're</h2>
              <div className="mini-text">
                Together with your family
              </div>
              <div className="sub-heading">
                You're warmly welcomed
              </div>

              <div className="quote">
                “A beautiful beginning
                to a lifetime of love.”
              </div>
            </div>

            <div id="bride">
              <img src={bride} alt="" />
            </div>
          </div>
        </div>

        {/* RIGHT DOOR */}
        <div
          className={`door right-door ${open ? "open-right" : ""}`}
        onClick={() => {
          setOpen(true)
          const audio = document.getElementById("wedding-music");

            if (playing) {
              audio.pause();
            } else {
              audio.play();
            }

            setPlaying(!playing);
        }}
        >
          <div className="pattern">

            <div className="divider">
              ༺❀༻
            </div>

            <div className="titles">
              <h2 className="heading">Invited</h2>
              <div className="mini-text">
                Save The Date
              </div>
              <div className="sub-heading">
                To celebrate with us
              </div>

              <div className="quote">
                “Two hearts,
                one forever.”
              </div>
            </div>
            <div id="groom">
              <img src={groom} alt="" />
            </div>
          </div>
        </div>

      </div>
      <div className={`snackbar ${open ? "hide-snackbar" : ""}`}>
        ✨ Click anywhere to open the invitation
      </div>

      <div className="hero-section">

        <FloatingCouple
          image={couple}
          brideName="Bindu"
          groomName="Sam"
        />
        <section className="story-section">

          {/* TOP FLOWER */}
          <div className="story-flower top-flower">❀</div>

          {/* BOTTOM FLOWER */}
          <div className="story-flower bottom-flower">❀</div>

          {/* GLOW */}
          <div className="story-glow"></div>

          <div className="story-card">

            <div className="story-divider">
              ✦ ✦ ✦
            </div>

            <p className="story-mini">
              Save The Date
            </p>

            <h2 className="story-title">
              June 27, 2026
            </h2>

            <div className="story-line"></div>

            <p className="story-desc">
              Two hearts unite in a celebration
              of love, tradition, and forever.
            </p>

            <button className="story-btn"
              onClick={() => {
                window.open(
                  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Celebration&dates=20260627T150000/20260627T180000&details=Join+our+wedding+celebration&location=Wedding+Venue",
                  "_blank"
                );
              }}>
              Remind Me
            </button>

          </div>
        </section>

        <section className="timeline-section">

          <div className="timeline-heading">
            Wedding Timeline
          </div>

          <div className="timeline">

            {/* ITEM 1 */}
            <div className="timeline-item left">
              <div className="timeline-content">
                <span className="timeline-date">
                  June 26
                </span>

                <h3>Bride Preparation</h3>

                <p>
                  Mehendi, haldi, and beautiful
                  bridal moments begin.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="timeline-item right">
              <div className="timeline-content">
                <span className="timeline-date">
                  June 27 · 3:00 PM
                </span>

                <h3>Wedding Ceremony</h3>

                <p>
                  The sacred wedding rituals
                  and tying the knot.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="timeline-item left">
              <div className="timeline-content">
                <span className="timeline-date">
                  June 27 · 5:00 PM
                </span>

                <h3>Reception</h3>

                <p>
                  Join us for an evening
                  of celebration and dinner.
                </p>
              </div>
            </div>

          </div>

        </section>


        <section className="venue-section">

          <div className="venue-card">

            <p className="venue-mini">
              Wedding Venue
            </p>

            <h2 className="venue-title">
              The Grand Palace
            </h2>

            <p className="venue-address">
              Hyderabad, Telangana
            </p>

            {/* MAP */}

            <div className="map-container">

              <iframe
                title="Wedding Venue"
                src="https://www.google.com/maps/embed?q=Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="venue-btn"
            >
              Open In Google Maps
            </a>

          </div>

        </section>


        <section className="rsvp-section">

          <div className="rsvp-card">

            <div className="rsvp-divider">
              ✦ ✦ ✦
            </div>

            <p className="rsvp-mini">
              We Would Love To Celebrate With You
            </p>

            <h2 className="rsvp-title">
            </h2>

            <p className="rsvp-desc">
              Kindly confirm your presence
              and bless us with your love
              on our special day.
            </p>

            <div className="rsvp-buttons">

              <a
                href="tel:+918688235675"
                className="rsvp-btn"
                id="call"
              >
                Call Us
              </a>

              <a
                href="https://wa.me/918688235675"
                target="_blank"
                className="rsvp-btn"
                id="whatsapp"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </section>

        <button
          className="music-btn"
          onClick={() => {
            const audio = document.getElementById("wedding-music");

            if (playing) {
              audio.pause();
            } else {
              audio.play();
            }

            setPlaying(!playing);
          }}
        >
          {playing ? "⏸ Pause Music" : "🎵 Play Music"}
        </button>

        <audio
          id="wedding-music"
          loop
        >
          <source src={music} type="audio/mp3" />
        </audio>

      </div>

    </div>
  );
}