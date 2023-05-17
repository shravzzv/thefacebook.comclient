import '../styles/pages/footer_pages.scss'
import AuthBox from '../components/authBox'

const Media = () => {
    return (
        <div className='about'>
            <div className='wrapper'>
                <AuthBox />

                <div className='content'>
                    <div className='card'>
                        <p className='title'>Media login</p>
                        <div className='info'>
                            <form>
                                <div className='form-group'>
                                    <label>Username:</label>
                                    <input type='email' />
                                </div>
                                <div className='form-group'>
                                    <label>Password:</label>
                                    <input type='password' />
                                </div>
                                <div className="buttons">
                                    <button type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media
