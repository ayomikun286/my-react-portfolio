import React from 'react'

const AlertCard = ({ errorMessage, showError, showSuccess }) => {
    const showAlert = showError || showSuccess;

    return (
        <div
            className={`fixed top-6 z-50  min-w-80 md:min-w-100 bg-[#030B1E] p-3 rounded border font-bold tracking-wider text-sm transition-all duration-300 ease-in-out
            ${showAlert ? 'right-0' : '-right-100'}
            ${showError
                    ? 'border-red-400 text-red-400'
                    : showSuccess
                        ? 'border-green-400 text-green-400'
                        : 'border-gray-400 text-white'
                }`}
        >
            {errorMessage}
        </div>
    )
}

export default AlertCard