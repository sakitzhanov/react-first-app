const initialState = {
    friends: [
        { id: 10, name: 'Mira', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' },
        { id: 11, name: 'Altynai', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' },
        { id: 12, name: 'Gaziz', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' }
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;