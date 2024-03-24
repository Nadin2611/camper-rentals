import { useState } from 'react';
import { toast } from 'react-hot-toast';
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

const BookingForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = event => {
    const selectedDate = event.target.value;
    const today = new Date().toISOString().split('T')[0];

    if (selectedDate < today) {
      toast.error('Please select a date from today onwards!');
      return;
    }

    setFormData(prevState => ({
      ...prevState,
      bookingDate: selectedDate,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    toast.success('Form submitted successfully!');

    closeModal();
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
          value={formData.name}
          onChange={handleChange}
          required
          autoFocus
        />
        <Label htmlFor="email" />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Label htmlFor="bookingDate" />
        <Input
          type="date"
          name="bookingDate"
          placeholder="Booking Date"
          value={formData.bookingDate}
          onChange={handleDateChange}
          required
        />
        <Label htmlFor="comment" />
        <TextArea
          type="text"
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.bookingDate ||
            !formData.comment
          }
        >
          Send
        </Button>
      </Form>
    </FormContainer>
  );
};

export default BookingForm;
