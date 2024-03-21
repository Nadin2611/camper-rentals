// import React, { useState } from 'react';
// import {
//   ModalBackdrop,
//   ModalContent,
//   CloseButton,
//   Form,
//   Input,
//   TextArea,
// } from './Modal.styled';
// import { Button } from 'components/Button/Button.styled';

// const Modal = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     bookingDate: '',
//     comment: '',
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // Ваша логіка для обробки відправки форми
//     // Наприклад, валідація та відправка даних
//     // Після успішної відправки можна викликати onClose для закриття модального вікна
//   };

//   return (
//     <ModalBackdrop>
//       <ModalContent>
//         <CloseButton onClick={onClose}>&times;</CloseButton>
//         <h2>Book your campervan now</h2>
//         <p>Stay connected! We are always ready to help you.</p>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <Input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <Input
//             type="date"
//             name="bookingDate"
//             placeholder="Booking Date"
//             value={formData.bookingDate}
//             onChange={handleChange}
//             required
//           />
//           <TextArea
//             type="text"
//             name="comment"
//             placeholder="Comment"
//             value={formData.comment}
//             onChange={handleChange}
//           />
//           <Button type="submit">Send</Button>
//         </Form>
//       </ModalContent>
//     </ModalBackdrop>
//   );
// };

// export default Modal;
