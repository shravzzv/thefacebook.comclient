import '../styles/pages/footer_pages.scss'
import AuthBox from '../components/authBox'

const Faq = () => {
    return (
        <div className='about'>
            <div className='wrapper'>
                <AuthBox />

                <div className='content'>
                    <h1>[ FAQ ]</h1>
                    <ul>
                        <li>
                            <a href="#1">What is the facebook?</a>
                        </li>
                        <li>
                            <a href="#2">How do you get our information? Does the school give it to you?</a>
                        </li>
                        <li>
                            <a href="#3">How can I protect my privacy?</a>
                        </li>
                        <li>
                            <a href="#4">What is the social net?</a>
                        </li>
                        <li>
                            <a href="#5">When I try to log in, the page just refreshes. What's going on?</a>
                        </li>
                    </ul>
                    <div className='card'>
                        <p className='title' id='1'>What is the facebook?</p>
                        <div className='info'>
                            <p>Thefacebook is an online directory that connects people through social networks at colleges and universities.</p>
                        </div>
                    </div>
                    <div className="card">
                        <p className="title" id='2'>How do you get our information? Does the school give it to you?</p>
                        <div className="info">
                            <p>Your school is not providing us with any information about you. All information and pictures are provided voluntarily by users.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <p className="title" id='3'>How can I protect my privacy?</p>
                        <div className="info">
                            <p>You can adjust your privacy settings to allow only people within certain divisions of certain schools to see it. You can also set it so that only people who share something in common with you (eg. house, year, a course, friends) can see your information. And further, you can create different privacy settings for the four different parts of your profile: contact information, personal information, courses and friends.</p>
                        </div>
                    </div>
                    <div className="card">
                        <p className="title" id='4'>What is the social net?</p>
                        <div className="info">
                            <p>Your social net is the group of all users whose privacy settings allow you to view their information. To make things more interesting, we also limit it to only users who have submitted pictures. When you click on "social net", ten random users from your social net are displayed.</p>
                        </div>
                    </div>
                    <div className="card">
                        <p className="title" id='5'>When I try to log in, the page just refreshes. What's going on?</p>
                        <div className="info">
                            <p>You need to enable cookies on your browser. In order to do this in Internet Explorer, go to tools: options from the menu at the top. Then click on the privacy tab and alter your privacy settings to allow cookies. Finally, close and restart your browser and try logging in again.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
