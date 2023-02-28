const KnowAbout = ({translator: {t: __}}) => {
    return (
        <div className='know-about'>
            <h2 className='title yellow fs-2em'>{__('know-about.title')}</h2>
            <div className='know-about-text'>{__('know-about.text')}<br/>
                <p className='blue mb-0'>{__('know-about.and-more')}</p>
            </div>
        </div>
    )
}

export default KnowAbout