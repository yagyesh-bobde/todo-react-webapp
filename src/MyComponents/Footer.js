import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position: 'absolute',
    width: '100%',
  }

  return <div>
    <footer className='bg-dark text-light my-5' style={footerStyle}>
      <p className='text-center py-3'>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  </div>;
};
