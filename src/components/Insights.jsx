import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag, TrendingUp, Search, BookOpen, Lightbulb, BarChart3, Mail, Globe } from 'lucide-react'
import './Insights.css'

const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Web Design', 'Email', 'Strategy']

const posts = [
  {
    category: 'SEO',
    icon: <Search size={16} />,
    color: '#ff4d3d',
    bg: '#fff1f0',
    title: 'How We Grew Organic Traffic by 847% in 6 Months (Without Paid Ads)',
    excerpt: 'A behind-the-scenes breakdown of the exact SEO strategy we used for a B2B SaaS client — keyword clustering, internal linking, and technical fixes that moved the needle.',
    readTime: '8 min read',
    date: 'Mar 14, 2025',
    featured: true,
    tag: 'Case Study',
  },
  {
    category: 'PPC',
    icon: <TrendingUp size={16} />,
    color: '#ff4d3d',
    bg: '#fff1f0',
    title: '5 Google Ads Mistakes That Are Burning Your Budget Right Now',
    excerpt: 'Most businesses waste 40–60% of their ad spend on avoidable mistakes. Here\'s what we see most often — and exactly how to fix each one.',
    readTime: '6 min read',
    date: 'Feb 28, 2025',
    featured: false,
    tag: 'Tips',
  },
  {
    category: 'Social Media',
    icon: <Globe size={16} />,
    color: '#c47f00',
    bg: '#fdf6e8',
    title: 'The LinkedIn Content Formula That Gets 10x More Reach',
    excerpt: 'We tested 200+ LinkedIn posts across 12 B2B accounts. Here\'s the exact formula — hook structure, format, timing — that consistently outperforms.',
    readTime: '5 min read',
    date: 'Feb 12, 2025',
    featured: false,
    tag: 'Strategy',
  },
  {
    category: 'Web Design',
    icon: <BookOpen size={16} />,
    color: '#0f1b35',
    bg: '#eef0f8',
    title: 'Why Your Landing Page Converts at 1% (And How to Fix It)',
    excerpt: 'We audited 50 landing pages and found the same 7 conversion killers every time. Here\'s the checklist we use to diagnose and fix low-converting pages.',
    readTime: '7 min read',
    date: 'Jan 30, 2025',
    featured: false,
    tag: 'Guide',
  },
  {
    category: 'Email',
    icon: <Mail size={16} />,
    color: '#c47f00',
    bg: '#fdf6e8',
    title: 'The 5-Email Welcome Sequence That Converts Cold Leads to Buyers',
    excerpt: 'Your welcome sequence is your highest-leverage email automation. We share the exact copy framework and timing we use to achieve 42%+ open rates.',
    readTime: '9 min read',
    date: 'Jan 18, 2025',
    featured: false,
    tag: 'Template',
  },
  {
    category: 'Strategy',
    icon: <Lightbulb size={16} />,
    color: '#ff4d3d',
    bg: '#fff1f0',
    title: 'Full-Funnel Marketing: How to Stop Losing Customers at Every Stage',
    excerpt: 'Most brands focus on top-of-funnel traffic and ignore the leaky middle. Here\'s how to build a funnel that captures, nurtures, and converts at every stage.',
    readTime: '10 min read',
    date: 'Jan 5, 2025',
    featured: false,
    tag: 'Deep Dive',
  },
  {
    category: 'SEO',
    icon: <BarChart3 size={16} />,
    color: '#0f1b35',
    bg: '#eef0f8',
    title: 'Local SEO in 2025: The Complete Playbook for Service Businesses',
    excerpt: 'Google Maps, GBP optimization, local citations, review strategy — everything a local business needs to dominate their area search results.',
    readTime: '12 min read',
    date: 'Dec 20, 2024',
    featured: false,
    tag: 'Playbook',
  },
  {
    category: 'PPC',
    icon: <TrendingUp size={16} />,
    color: '#c47f00',
    bg: '#fdf6e8',
    title: 'Meta Ads in 2025: What\'s Working Now (Backed by $2M in Ad Spend)',
    excerpt: 'Creative formats, audience strategies, and bidding approaches that are delivering results right now across e-commerce and lead gen campaigns.',
    readTime: '8 min read',
    date: 'Dec 8, 2024',
    featured: false,
    tag: 'Research',
  },
]

const tagColors = {
  'Case Study': { color: '#ff4d3d', bg: '#fff1f0' },
  'Tips':       { color: '#c47f00', bg: '#fdf6e8' },
  'Strategy':   { color: '#0f1b35', bg: '#eef0f8' },
  'Guide':      { color: '#ff4d3d', bg: '#fff1f0' },
  'Template':   { color: '#c47f00', bg: '#fdf6e8' },
  'Deep Dive':  { color: '#0f1b35', bg: '#eef0f8' },
  'Playbook':   { color: '#ff4d3d', bg: '#fff1f0' },
  'Research':   { color: '#c47f00', bg: '#fdf6e8' },
}

export default function Insights() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? posts
    : posts.filter(p => p.category === active)

  const featured = posts.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)
  const showFeatured = active === 'All'

  return (
    <main className="insights-page">

      {/* ── HERO ── */}
      <section className="ins-hero">
        <div className="ins-hero__pattern" />
        <div className="container ins-hero__inner">
          <div className="ins-hero__pill">
            <BookOpen size={12} /> Insights & Resources
          </div>
          <h1 className="ins-hero__title">
            Marketing Knowledge That
            <br /><span className="ins-hero__highlight">Actually Moves the Needle</span>
          </h1>
          <p className="ins-hero__sub">
            Real strategies, honest breakdowns, and proven frameworks from the team
            that manages $2M+ in ad spend and grows 500+ brands.
          </p>
          <div className="ins-hero__stats">
            <div className="ins-hero__stat">
              <strong>50+</strong>
              <span>In-depth guides</span>
            </div>
            <div className="ins-hero__stat-div" />
            <div className="ins-hero__stat">
              <strong>12K+</strong>
              <span>Monthly readers</span>
            </div>
            <div className="ins-hero__stat-div" />
            <div className="ins-hero__stat">
              <strong>Free</strong>
              <span>Always & forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <div className="ins-cats-wrap">
        <div className="container ins-cats">
          {categories.map(c => (
            <button
              key={c}
              className={`ins-cat ${active === c ? 'ins-cat--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="ins-main">
        <div className="container">

          {/* ── FEATURED POST ── */}
          {showFeatured && featured && (
            <div className="ins-featured">
              <div className="ins-featured__left">
                <div className="ins-featured__meta">
                  <span className="ins-featured__category" style={{ color: featured.color, background: featured.bg }}>
                    {featured.icon} {featured.category}
                  </span>
                  <span className="ins-featured__tag" style={{ color: tagColors[featured.tag]?.color, background: tagColors[featured.tag]?.bg }}>
                    {featured.tag}
                  </span>
                </div>
                <h2 className="ins-featured__title">{featured.title}</h2>
                <p className="ins-featured__excerpt">{featured.excerpt}</p>
                <div className="ins-featured__foot">
                  <div className="ins-featured__info">
                    <Clock size={14} />
                    <span>{featured.readTime}</span>
                    <span className="ins-dot">·</span>
                    <span>{featured.date}</span>
                  </div>
                  <a href="#" className="ins-featured__cta">
                    Read Article <ArrowRight size={15} />
                  </a>
                </div>
              </div>
              <div className="ins-featured__right">
                <div className="ins-featured__visual">
                  <div className="ins-chart-mock">
                    <div className="ins-chart-mock__label">Organic Traffic Growth</div>
                    <div className="ins-chart-mock__bars">
                      {[20, 28, 35, 42, 58, 75, 90].map((h, i) => (
                        <div
                          key={i}
                          className={`ins-chart-mock__bar ${i === 6 ? 'ins-chart-mock__bar--accent' : ''}`}
                          style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                        />
                      ))}
                    </div>
                    <div className="ins-chart-mock__result">
                      <TrendingUp size={14} color="#22c55e" />
                      <span>+847% in 6 months</span>
                    </div>
                  </div>
                  <div className="ins-featured__badge">
                    ⭐ Most Popular
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── POSTS GRID ── */}
          <div className="ins-grid">
            {rest.map((p, i) => {
              const tc = tagColors[p.tag] || { color: '#ff4d3d', bg: '#fff1f0' }
              return (
                <article key={i} className="ins-card">
                  <div className="ins-card__top" style={{ background: p.bg }}>
                    <div className="ins-card__cat" style={{ color: p.color }}>
                      {p.icon} {p.category}
                    </div>
                    <div className="ins-card__icon-big">{p.icon}</div>
                  </div>
                  <div className="ins-card__body">
                    <div className="ins-card__tags">
                      <span className="ins-card__tag" style={{ color: tc.color, background: tc.bg }}>
                        {p.tag}
                      </span>
                    </div>
                    <h3 className="ins-card__title">{p.title}</h3>
                    <p className="ins-card__excerpt">{p.excerpt}</p>
                    <div className="ins-card__foot">
                      <div className="ins-card__info">
                        <Clock size={13} />
                        <span>{p.readTime}</span>
                        <span className="ins-dot">·</span>
                        <span>{p.date}</span>
                      </div>
                      <a href="#" className="ins-card__link">
                        Read <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="ins-empty">
              <p>No articles in this category yet.</p>
              <button onClick={() => setActive('All')} className="ins-empty__btn">
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="ins-newsletter">
        <div className="container ins-newsletter__inner">
          <div className="ins-newsletter__left">
            <div className="ins-newsletter__icon">📬</div>
            <div>
              <h3 className="ins-newsletter__title">Get Insights in Your Inbox</h3>
              <p className="ins-newsletter__sub">
                One email per week. Real strategies, no fluff. Join 12,000+ marketers.
              </p>
            </div>
          </div>
          <div className="ins-newsletter__form">
            <input
              type="email"
              placeholder="your@email.com"
              className="ins-newsletter__input"
            />
            <button className="ins-newsletter__btn">
              Subscribe <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="ins-cta">
        <div className="container ins-cta__inner">
          <h2 className="ins-cta__title">
            Want Us to Implement These Strategies for You?
          </h2>
          <p className="ins-cta__sub">
            Reading is great. Results are better. Let's apply these strategies to your business.
          </p>
          <Link to="/contact" className="ins-cta__btn">
            Get a Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  )
}