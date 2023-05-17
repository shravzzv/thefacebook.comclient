import '../styles/pages/footer_pages.scss'
import AuthBox from '../components/authBox'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='about'>
            <div className='wrapper'>
                <AuthBox />

                <div className='content'>
                    <h1>[ Contact ]</h1>
                    <div className='card'>
                        <p className='title'>Social</p>
                        <div className='info'>
                            <li>Instagram: <a href="https://www.instagram.com/shravzzv" target='_blank' rel="noreferrer">@shravzzv</a></li>
                            <li>Twitter: <a href="https://www.twitter.com/shravzzv" target='_blank' rel="noreferrer">@shravzzv</a></li>
                            <li>GitHub: <a href="https://www.github.com/shravzzv" target='_blank' rel="noreferrer">@shravzzv</a></li>
                        </div>
                    </div>
                    <button><Link to="/">Home</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Contact
