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

const logout = function() {
    return {
        type: 'LOGOUT'
    };
};

export { toggleModal, setUsername, logout };
