import {useTranslation} from "react-i18next";
const KnowAbout = () => {
const {t: __} = useTranslation('home');
    return (
        <div className='know-about'>
            <h2 className='title yellow fs-2em'>{__('know-about.title')}</h2>
            <div className='know-about-text'>{__('know-about.text')}<br/>
                <span className='blue fw-500'>{__('know-about.and-more')}</span>
            </div>
        </div>
    )
}

export default KnowAbout