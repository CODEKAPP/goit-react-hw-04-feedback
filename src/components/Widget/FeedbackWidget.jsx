import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

// const FeedbackWidget = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleFeedback = type => {
//     switch (type) {
//       case 'good':
//         setGood(good + 1);
//         break;
//       case 'neutral':
//         setNeutral(neutral + 1);
//         break;
//       case 'bad':
//         setBad(bad + 1);
//         break;
//       default:
//         break;
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  // const countPositiveFeedbackPercentage = () => {
  //   const total = countTotalFeedback();
  //   return total === 0 ? 0 : Math.round((good / total) * 100);
  // };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = feedback;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <Section title="Feedback">
      <FeedbackOptions
        options={feedbackOptions}
        onLeaveFeedback={handleFeedback}
      />
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          // post={feedback.post}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
};

FeedbackWidget.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // post: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default FeedbackWidget;
