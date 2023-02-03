import {useContext} from "react";
import {TranslatorProvider} from "../../../context/TranslatorProvider";

const JoinNow = () => {

    const {t :__} = useContext(TranslatorProvider)

    return (
        <div className='text-join'>
            <span className='h2 title blue'>{__('join-now.title')}</span>
        </div>
    )

}

export default JoinNow