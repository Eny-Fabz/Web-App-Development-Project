import React, { useState } from 'react';
import logo from '../assets/strathmore-logo.png';
import campaign1 from '../assets/campaign1.jpg';
import campaign2 from '../assets/campaign2.jpg';
import campaign3 from '../assets/campaign3.jpg';

const initialCampaigns = [
  { id: 1, title: 'Peer Support Fund', desc: 'Help a fellow student with medical expenses.', img: campaign1 },
  { id: 2, title: 'Library Resource Drive', desc: 'Donate books and resources to the campus library.', img: campaign2 },
  { id: 3, title: 'Scholarship Program', desc: 'Fund scholarships for top students.', img: campaign3 }
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = initialCampaigns.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <header className="site-header">
        <img src={logo} alt="Strathmore University Logo" className="logo" />
        <h1>Community Fundraising Portal</h1>
      </header>

      <section className="hero">
        <h2>Empower Change in Our Community</h2>
        <p>Browse and support campaigns led by students, staff, and faculty.</p>
        <a href="#create-section" className="btn-primary">Start a Campaign</a>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">
            <h4>Create</h4>
            <p>Submit your fundraising idea with goals and duration.</p>
          </div>
          <div className="step">
            <h4>Share</h4>
            <p>Promote your campaign via campus networks.</p>
          </div>
          <div className="step">
            <h4>Receive</h4>
            <p>Track donations and engage with supporters.</p>
          </div>
        </div>
      </section>

      <section className="search-bar">
        <input
          type="text"
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </section>

      <section className="campaign-preview">
        <h3>Featured Campaigns</h3>
        <div className="campaign-cards">
          {filtered.map(c => (
            <div key={c.id} className="campaign-card">
              <img src={c.img} alt={c.title} className="campaign-image" />
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <button className="btn-secondary">View Campaign</button>
            </div>
          ))}
        </div>
      </section>

      <section id="create-section" className="create-section">
        <h3>Ready to Make an Impact?</h3>
        <p>Click below to start your own fundraising campaign.</p>
        <button className="btn-primary">Create Campaign</button>
      </section>

      <footer className="site-footer" id="contact">
        <p>&copy; {new Date().getFullYear()} Strathmore University</p>
      </footer>
    </div>
  );
}
