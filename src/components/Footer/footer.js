import {Twitter, Github} from 'feather-icons-react';
const Footer = () => {
    return (
        <footer className='footer bg-dark-blue'>
            <h3 className='title light-orange'>Movie Rating</h3>
            <ul className='title footer-items'>
                <li className='footer-item'><a className='link link-white' href='https://github.com/GuilleFive' target='_blank' rel="noreferrer"><Github/></a></li>
                <li className='footer-item'><a className='link link-white' href='https://twitter.com/guille_five' target='_blank' rel="noreferrer"><Twitter/></a></li>
            </ul>
        </footer>
    )
}

export default Footer