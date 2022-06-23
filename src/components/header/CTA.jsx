import React from 'react'

const CTA = () => {
  return (
    <div className='cta'>
<a href={process.env.PUBLIC_URL + '/MY-CV.pdf'}  target="_blank" rel="noopener noreferrer" className='btn'>Download CV</a>
<a href='/contact/#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA