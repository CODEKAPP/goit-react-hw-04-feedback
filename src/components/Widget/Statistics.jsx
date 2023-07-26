//Statistics.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {
  DivContainerStatistics,
  DivContainerStatisticsParagraph,
} from './Styles/DivStyles';
import { StatisticsTitle } from './Styles/TitleStyles';
import {
  Paragraph,
  DivStyleParagraph,
  SpanStyle,
  SpanStyle2,
} from './Styles/ParagraphStyles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <DivContainerStatistics>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <DivContainerStatisticsParagraph>
        <DivStyleParagraph>
          Good
          <Paragraph>{good}</Paragraph>
        </DivStyleParagraph>
        <DivStyleParagraph>
          Neutral <Paragraph>{neutral}</Paragraph>
        </DivStyleParagraph>
        <DivStyleParagraph>
          Bad <Paragraph>{bad}</Paragraph>
        </DivStyleParagraph>
        <DivStyleParagraph>
          Total <Paragraph>{total}</Paragraph>
        </DivStyleParagraph>
      </DivContainerStatisticsParagraph>
      <SpanStyle>
        Positive feedback:<SpanStyle2>{positivePercentage}%</SpanStyle2>
      </SpanStyle>
    </DivContainerStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
