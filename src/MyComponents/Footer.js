import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position: 'relative',
    width: '100%',
    top:'35vh'
  }

  return <div>
    <footer className='bg-dark text-light my-5' style={footerStyle}>
      <p className='text-center py-3'>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  </div>;
};
