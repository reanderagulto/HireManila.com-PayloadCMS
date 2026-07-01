'use client'

const currentYear = new Date().getFullYear()

const Copyright = () => {
  return (
    <div className="footer__copyright">
      <p>© {currentYear} Hire Manila. All rights reserved.</p>
    </div>
  )
}

export default Copyright
