import profileReducer, { addPostActionCreator } from "./profile-reducer";

it('new post should be added', () => {
    const action = addPostActionCreator('F*ck');
    const state = {
        posts: [
            { id: 1, message: 'Welcome!', likesCount: 20, dislikesCount: 2 },
            { id: 2, message: 'How are you?', likesCount: 100, dislikesCount: 5 },
            { id: 3, message: 'Call me ASAP', likesCount: 13, dislikesCount: 47 }
        ]
    };
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});