import Link from 'next/link'
import './style.css'

export default function IndexPage() {
  return (
    <div className="hero-container">
      {/* Background grid and circles */}
      <div className="background">
        <div className="grid-background">
          <div className="circle circle-top-left"></div>
          <div className="circle circle-bottom-right"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <h1 className="hero-title">捞杨的文档</h1>

        <p className="hero-subtitle">
          旨在记录乱七八糟的学习内容
        </p>

        <div className="button-group">
          <Link href="/docs" className="button button-primary">
            浏览文档
          </Link>
        </div>

        <div className="command-line">
          <span className="arrow">▲</span>
          <span className="command">npx create-next-app@latest</span>
        </div>
      </div>
    </div>
  )
}
