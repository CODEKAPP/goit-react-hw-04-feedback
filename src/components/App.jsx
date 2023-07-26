// app.jsx
import { DivContainer } from './Widget/Styles/DivStyles';
import FeedbackWidget from './Widget/FeedbackWidget';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <section>
      <DivContainer>
        <FeedbackWidget  />
      </DivContainer>
      <Toaster /> {/* Agrega el componente Toaster */}
    </section>
  );
};
