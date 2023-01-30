

const setErrorMessages = (status) => {
    const contactAdministrator = 'Try again later and if the problem persists, please contact this site administrator';
    const errorCodes = {
        ERR_FR_TOO_MANY_REDIRECTS: `There has been too many redirections. ${contactAdministrator}`,
        ERR_BAD_OPTION_VALUE: `There has been an error in the request options values. ${contactAdministrator}.`,
        ERR_BAD_OPTION: `There has been an error in the request options. ${contactAdministrator}.`,
        ERR_NETWORK: `The connection to the server has failed. ${contactAdministrator}.`,
        ERR_DEPRECATED: `Something has gone wrong in the request. ${contactAdministrator}.`,
        ERR_BAD_RESPONSE: `There has been an error in the server response. ${contactAdministrator}.`,
        ERR_BAD_REQUEST: `There has been an error in the request or the record you are trying to access doesn't exist. ${contactAdministrator}.`,
        ERR_NOT_SUPPORT: `The request seem to not be supported right now. ${contactAdministrator}.`,
        ERR_INVALID_URL: `The url of the request is invalid. ${contactAdministrator}.`,
        ERR_CANCELED: `The request has been canceled. ${contactAdministrator}.`,
        ECONNABORTED: `The connection has been aborted. ${contactAdministrator}.`,
        ETIMEDOUT: `The request has received a timed out. ${contactAdministrator}.`,
        DEFAULT: `There has been an error in the server. ${contactAdministrator}.`
    }

    return errorCodes[status || 'DEFAULT']
}

export default setErrorMessages
