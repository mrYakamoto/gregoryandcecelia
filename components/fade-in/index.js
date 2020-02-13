import React from 'react'
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer'

const FadeIn = ({
  className,
  children,
  options
}) => {

  const [ref, refInView] = useInView({
    ...options,
    threshold: .1,
    triggerOnce: true
  });

  return (
      <div
        ref={ref}
        className={[
            `${refInView ? 'active' : ''}`,
            `${className ? className : ''}`
        ].join(' ')}
      >
        {children}
      </div>
  )
}

FadeIn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  options: PropTypes.object
}

export default FadeIn
