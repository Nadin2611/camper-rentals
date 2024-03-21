import { Button } from 'components/Button/Button.styled';
import {
  Paragraph,
  Title,
  WelcomeContainer,
  TextContainer,
} from './Welcome.styled';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <WelcomeContainer>
      <TextContainer>
        {' '}
        <Title>Welcome to CamperDreamUA!</Title>
        <Paragraph>
          Your gateway to exploring the most enchanting corners of Ukraine. If
          your dream is to immerse yourself in the beauty of Ukraine's
          landscapes, cultural heritage, and hidden gems, then you're in the
          right place.
        </Paragraph>
        <Paragraph>
          Our mission is to provide you with unforgettable experiences, whether
          you're craving the tranquility of the Carpathian Mountains, the
          vibrant atmosphere of Kyiv, or the serenity of the Black Sea coast.
        </Paragraph>
        <Paragraph>
          At CamperDreamUA, we understand the importance of flexibility and
          freedom in your travel plans. That's why we offer camper rentals that
          give you the independence to explore Ukraine at your own pace.
        </Paragraph>
        <Paragraph>
          Let's create memories that will last a lifetime as we explore the
          diverse beauty of our country. Start your adventure today!
        </Paragraph>
      </TextContainer>
      <Link to="/catalog">
        <Button>Start</Button>
      </Link>
    </WelcomeContainer>
  );
};

export default Welcome;
