import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { closeToast } from "../Slices/toast_slice";
import PropTypes from "prop-types";
import './ToastProvider.css';

const ToastProvider = ({ children }) => {
    const dispatch = useDispatch()
    const toaststate = useSelector((state) => state.toast);

    useEffect(() => {
        if (toaststate.message && toaststate.type) {
            toast[toaststate.type](toaststate.message, {
                position: 'bottom-center',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                onClose: () => {
                    dispatch(closeToast())
                }
            })
        }

    }, [toaststate, dispatch])

    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
};

ToastProvider.propTypes = {
    children: PropTypes.node.isRequired, // This validates `children`
};

export default ToastProvider;