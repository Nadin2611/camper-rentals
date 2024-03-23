import {
  FormContainer,
  Form,
  Input,
  TextArea,
  Title,
  Paragraph,
  Label,
} from './BookingForm.styled';
import { Button } from 'components/Button/Button.styled';

const BookingForm = () => {
  const handleChange = event => {};

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <Title>Book your campervan now</Title>
      <Paragraph>Stay connected! We are always ready to help you.</Paragraph>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name" />
        <Input
          type="text"
          name="name"
          placeholder="Name"
          // value={formData.name}
          onChange={handleChange}
          required
        />
        <Label htmlFor="email" />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          // value={formData.email}
          onChange={handleChange}
          required
        />
        <Label htmlFor="bookingDate" />
        <Input
          type="date"
          name="bookingDate"
          placeholder="Booking Date"
          // value={formData.bookingDate}
          onChange={handleChange}
          required
        />
        <Label htmlFor="comment" />
        <TextArea
          type="text"
          name="comment"
          placeholder="Comment"
          // value={formData.comment}
          onChange={handleChange}
        />
        <Button type="submit">Send</Button>
      </Form>
    </FormContainer>
  );
};

export default BookingForm;
