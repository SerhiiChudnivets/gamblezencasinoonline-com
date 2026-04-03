import React from 'react'

interface MediaFile {
  id?: number
  name?: string
  url?: string
}

interface ContentSection {
  id?: number
  heading?: string
  text?: string
  image?: MediaFile
  cta_text?: string
  cta_link?: string
  layout?: string
}

interface PageData {
  title: string
  slug: string
  content?: string
  seo_title?: string
  seo_description?: string
  html_head?: string
  hero_title?: string
  hero_subtitle?: string
  hero_badge?: string
  hero_image?: MediaFile
  cta_text?: string
  cta_link?: string
  sections?: ContentSection[]
  template?: string
  faq_title?: string
  FAQ?: { id?: number; question: string; answer: string }[]
}

interface SiteData {
  name: string
  url: string
  site_name?: string
  accent_color?: string
  footer_text?: string
  allow_indexing?: boolean
  logo?: MediaFile
  login_text?: string
  register_text?: string
  redirect_link?: string
  pages?: PageData[]
  header_menu?: any[]
  footer_menu?: any[]
}

const styles = `
  .landing-template {
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    min-height: 100vh;
  }

  .landing-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    background: transparent;
    transition: background 0.3s;
  }

  .landing-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }

  .landing-nav {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .landing-nav a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  .landing-nav a:hover {
    color: #fff;
  }

  .landing-hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .landing-hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.3;
  }

  .landing-hero-content {
    position: relative;
    max-width: 900px;
  }

  .landing-badge {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    color: #fff;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 2rem;
    border: 1px solid rgba(255,255,255,0.3);
  }

  .landing-hero h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 20px rgba(0,0,0,0.2);
  }

  .landing-hero p {
    font-size: 1.5rem;
    opacity: 0.9;
    margin-bottom: 3rem;
    line-height: 1.6;
  }

  .landing-btn {
    display: inline-block;
    background: #fff;
    color: #764ba2;
    padding: 1rem 3rem;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }

  .landing-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  }

  .landing-btn-secondary {
    background: transparent;
    border: 2px solid rgba(255,255,255,0.5);
    color: #fff;
    margin-left: 1rem;
  }

  .landing-btn-secondary:hover {
    background: rgba(255,255,255,0.1);
  }

  .landing-features {
    padding: 6rem 2rem;
    background: #fff;
    color: #333;
  }

  .landing-features-inner {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .landing-features h2 {
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .landing-features > p {
    color: #666;
    font-size: 1.25rem;
    margin-bottom: 4rem;
  }

  .landing-content {
    padding: 4rem 2rem;
    background: #fff;
    color: #333;
    text-align: center;
  }

  .landing-content-inner {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.125rem;
    line-height: 1.8;
  }

  .landing-content h2, .landing-content h3 {
    color: #764ba2;
    margin: 2rem 0 1rem;
  }

  .landing-content a {
    color: #667eea;
  }

  .landing-section {
    padding: 6rem 2rem;
  }

  .landing-section:nth-child(even) {
    background: #f8f9fa;
  }

  .landing-section-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .landing-section:nth-child(odd) .landing-section-inner {
    direction: rtl;
  }

  .landing-section:nth-child(odd) .landing-section-inner > * {
    direction: ltr;
  }

  .landing-section h2 {
    font-size: 2.25rem;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
  }

  .landing-section p, .landing-section div {
    color: #555;
    font-size: 1.125rem;
    line-height: 1.8;
  }

  .landing-section img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }

  .landing-section .landing-btn {
    margin-top: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
  }

  .landing-cta {
    padding: 6rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    text-align: center;
  }

  .landing-cta h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .landing-cta p {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }

  .landing-footer {
    background: #1a1a2e;
    color: rgba(255,255,255,0.6);
    padding: 3rem 2rem;
    text-align: center;
  }

  .landing-faq {
    padding: 6rem 2rem;
    background: #fff;
    color: #333;
  }

  .landing-faq-inner {
    max-width: 800px;
    margin: 0 auto;
  }

  .landing-faq h2 {
    font-size: 2.5rem;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 3rem;
  }

  .landing-faq-item {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 1.5rem 2rem;
    margin-bottom: 1rem;
  }

  .landing-faq-question {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.75rem;
  }

  .landing-faq-answer {
    color: #555;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .landing-hero h1 { font-size: 2.5rem; }
    .landing-hero p { font-size: 1.125rem; }
    .landing-section-inner { grid-template-columns: 1fr; }
    .landing-nav { display: none; }
    .landing-btn-secondary { margin-left: 0; margin-top: 1rem; display: block; }
  }
`

export default function LandingTemplate({ page, site }: { page: PageData; site: SiteData }) {
  const siteName = site.site_name || site.name

  return (
    <div className="landing-template">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <header className="landing-header">
        <a href="/" className="landing-logo">
          {site.logo?.url ? <img src={site.logo.url} alt={siteName} style={{height: '40px'}} /> : siteName}
        </a>
        <nav className="landing-nav">
          <a href="/">Home</a>
          {site.pages?.map((p, i) => (
            <a key={i} href={`/${p.slug}`}>{p.title}</a>
          ))}
          {site.redirect_link && (
            <a href={site.redirect_link} className="landing-btn" style={{padding: '0.5rem 1.5rem', fontSize: '0.9rem'}}>
              {site.register_text || 'Get Started'}
            </a>
          )}
        </nav>
      </header>

      <section className="landing-hero">
        {page.hero_image?.url && (
          <div className="landing-hero-bg" style={{ backgroundImage: `url(${page.hero_image.url})` }} />
        )}
        <div className="landing-hero-content">
          {page.hero_badge && <span className="landing-badge">{page.hero_badge}</span>}
          <h1>{page.hero_title || page.title}</h1>
          {page.hero_subtitle && <p>{page.hero_subtitle}</p>}
          <div>
            {page.cta_text && page.cta_link && (
              <a href={page.cta_link} className="landing-btn">{page.cta_text}</a>
            )}
            {site.login_text && site.redirect_link && (
              <a href={site.redirect_link} className="landing-btn landing-btn-secondary">{site.login_text}</a>
            )}
          </div>
        </div>
      </section>

      {page.content && (
        <div className="landing-content">
          <div className="landing-content-inner" dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      )}

      {page.sections?.map((section, index) => (
        <section key={section.id || index} className="landing-section">
          <div className="landing-section-inner">
            <div>
              {section.heading && <h2>{section.heading}</h2>}
              {section.text && <div dangerouslySetInnerHTML={{ __html: section.text }} />}
              {section.cta_text && section.cta_link && (
                <a href={section.cta_link} className="landing-btn">{section.cta_text}</a>
              )}
            </div>
            {section.image?.url && (
              <div>
                <img src={section.image.url} alt={section.heading || ''} />
              </div>
            )}
          </div>
        </section>
      ))}

      {page.FAQ && page.FAQ.length > 0 && (
        <section className="landing-faq">
          <div className="landing-faq-inner">
            {page.faq_title && <h2>{page.faq_title}</h2>}
            {page.FAQ.map((item, index) => (
              <div key={item.id || index} className="landing-faq-item">
                <div className="landing-faq-question">{item.question}</div>
                <div className="landing-faq-answer">{item.answer}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="landing-cta">
        <h2>{site.register_text || 'Ready to Get Started?'}</h2>
        <p>Join thousands of satisfied customers today</p>
        {site.redirect_link && (
          <a href={site.redirect_link} className="landing-btn">{page.cta_text || 'Start Now'}</a>
        )}
      </section>

      <footer className="landing-footer">
        {site.footer_text || `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`}
      </footer>
    </div>
  )
}
