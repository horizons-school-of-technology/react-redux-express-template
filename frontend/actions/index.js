const toggleModal = function() {
    return {
        type: 'TOGGLE_MODAL'
    };
};

const setUsername = function(username) {
    return {
        type: 'SET_USERNAME',
        data: username
    };
};

export { toggleModal, setUsername };
