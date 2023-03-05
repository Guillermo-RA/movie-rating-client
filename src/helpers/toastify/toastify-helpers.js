import {toast} from "react-toastify";

const createToastifySuccess = ({text}) => {
    return toast.success(text, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    })
}
const createToastifyError = ({text}) => {
    return toast.error(text, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    })
}
const createToastifyInfo = ({text}) => {
    return toast.info(text, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    })
}
const createToastifyWarn = ({text}) => {
    return toast.warn(text, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    })
}
const createToastifyLoading = ({text}) => {
    return toast.loading(text, {
        position: "top-right",
        closeOnClick: true,
        draggable: true,
        theme: "light",
    })
}
const updateToastify = ({initialToast, type, text}) => {
    toast.update(initialToast, {
        render: text,
        type,
        isLoading: false,
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
    })
}

export {
    createToastifySuccess,
    createToastifyError,
    createToastifyInfo,
    createToastifyWarn,
    createToastifyLoading,
    updateToastify
}