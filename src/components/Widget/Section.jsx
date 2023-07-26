import React from 'react';
import PropTypes from 'prop-types';
import { DivContainerSection } from './Styles/DivStyles';
import { StyledH1 } from './Styles/TitleStyles';

const Section = ({ title, children }) => {
  return (
    <DivContainerSection>
      <StyledH1>{title}</StyledH1>
      {children}
    </DivContainerSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
