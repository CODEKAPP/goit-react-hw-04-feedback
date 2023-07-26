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
  Paragraph2,
  Paragraph3,
  Paragraph4,
} from './Styles/ParagraphStyles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <DivContainerStatistics>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <DivContainerStatisticsParagraph>
        <Paragraph2>
          Good
          <Paragraph>{good}</Paragraph>
        </Paragraph2>
        <Paragraph2>
          Neutral <Paragraph>{neutral}</Paragraph>
        </Paragraph2>
        <Paragraph2>
          Bad <Paragraph>{bad}</Paragraph>
        </Paragraph2>
        <Paragraph2>
          Total <Paragraph>{total}</Paragraph>
        </Paragraph2>
      </DivContainerStatisticsParagraph>
      <Paragraph3>
        Positive feedback:<Paragraph4>{positivePercentage}%</Paragraph4>
      </Paragraph3>
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
