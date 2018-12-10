import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
	    <div className="content-grid">
		    <h1 style={{ color: colorPrimary }}>About</h1>
		    <div className="about-wrapper">
			    <div className="about-content" style={{ color: textPrimary }}>
				    <p>
					    <span className="highlight">Front-End Development | Product Management</span> .
				    </p>
				    <p>
					    Enthusiastic self-starter.
					    Addicted to usability, mobile and user centered designs.
					    I care about details as well as on the big picture and try to create something exceptional.
				    </p>
				    <p>
					    I am 25 year old Front-End Developer, based in Poland, Wroclaw.
					    I will do my best to turn your Idea into successful, scalable product.
				    </p>
				    <p>
					    <span className="highlight">My technology stack: JS | React.js/Native | HTML5 & CSS3/SASS</span>
				    </p>

			    </div>
		    </div>
	    </div>
	    <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
	theme: PropTypes.any
};

export default AboutPage;
