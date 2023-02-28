import {Link} from "react-router-dom";

const JoinNow = ({translator: {t: __}}) => {


    return (
        <div className='join-now'>
            <div className='join-know-text-container title'>
                <h2 className='yellow'>{__('join-now.title')}</h2>
                <div className='join-now-text'>
                    <span>{__('join-now.text')}</span>
                </div>
            </div>
            <div className='join-now-access'>
                <Link className='link' to='/register'>
                    <button className='button button-blue white'>{__('join-now.title')}</button>
                </Link>
                <Link className='link link-orange pt-1 fw-600' to='/login'>{__('join-now.have_account')}</Link>
            </div>
        </div>
    )

}

export default JoinNow