
import ScrollToTopButton from 'react-scroll-to-top-button';
import 'react-scroll-to-top-button/dist/index.css';
import './BackToTopButton.css';

const BackToTopButton = () => {
  return (
    <ScrollToTopButton
      smooth
      text="↑"
      className="back-to-top"
      style={{ backgroundColor: '#333', color: '#fff' }}
      containerClassName="scroll-progress-bar"
      progressClassName="progress"
    />
  );
};

export default BackToTopButton;
