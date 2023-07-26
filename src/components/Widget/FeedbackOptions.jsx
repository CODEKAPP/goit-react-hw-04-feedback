//FeedbackOptions.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  GoodButton,
  NeutralButton,
  BadButton,
} from './Styles/ButtonStyles';
import { DivContainerButtons } from './Styles/DivStyles';
import { StyledH2 } from './Styles/TitleStyles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionComponents = {
    good: GoodButton,
    neutral: NeutralButton,
    bad: BadButton,
    default: Button,
  };

  return (
    <>
      <StyledH2>Please Leave Feedback</StyledH2>

      <DivContainerButtons>
        {options.map(option => {
          const OptionComponent =
            optionComponents[option] || optionComponents.default;
          return (
            <React.Fragment key={option}>
              <OptionComponent onClick={() => onLeaveFeedback(option)}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </OptionComponent>
            </React.Fragment>
          );
        })}
      </DivContainerButtons>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
