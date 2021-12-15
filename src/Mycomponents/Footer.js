import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: 'absolute',
        width: '100%',
    }
    return (

        <footer className='footer--pin bg-dark text-light py-1' style={footerstyle}>
            <p className='text-center'>
                Copyright &copy; MyTodoslist.com
            </p>
        </footer>
    )
}
