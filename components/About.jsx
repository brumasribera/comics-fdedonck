import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About</h2>
          <div className="about-text">
            <p>
              This portfolio is a growing collection of comics at the intersection of 
              science, art, and storytelling. Each piece aims to make the invisible visible.
            </p>
            <p>
              Through visual narratives, I explore complex topics ranging from climate 
              science and social justice to personal reflections. My work combines 
              rigorous research with artistic expression to create accessible and 
              impactful stories.
            </p>
            <p>
              Feel free to browse the collections above or download individual comics 
              for personal reading. If you'd like to collaborate or feature my work, 
              please get in touch.
            </p>
          </div>
          
          <div className="contact-section">
            <h3>Contact</h3>
            <p>
              <a href="mailto:fien.a.c.de.doncker@gmail.com">
                fien.a.c.de.doncker[at]gmail.com
              </a>
            </p>
            <p className="note">
              Please ask before sharing these comics elsewhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

