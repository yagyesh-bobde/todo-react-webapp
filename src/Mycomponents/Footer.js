import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: 'relative',
        width: '100%',
        top:'26vh'
    }
    return (

        <footer className='footer--pin bg-dark text-light py-1' style={footerstyle}>
            <p className='text-center'>
                Copyright &copy; MyTodoslist.com
            </p>
        </footer>
    )
}
