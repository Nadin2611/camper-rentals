import { Toaster } from 'react-hot-toast';

const CustomToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          margin: '40px',
          background: '#333',
          color: '#fff',
          fontSize: '16px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        },
        duration: 4000,
      }}
    />
  );
};

export default CustomToaster;
