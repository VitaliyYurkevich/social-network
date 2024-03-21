import {
    addPostAC,
    deletePostAC,
    profileReducer
} from "../redux/profile-reducer";


it('new post should be added ', () => {
    let action = addPostAC('hello')
    let state = {
        posts: [
            {id: 1, message: 'milk', likeCount: 1},
            {id: 2, message: 'hello', likeCount: 4},
            {id: 3, message: 'nike', likeCount: 10},
        ]
    }
    // @ts-ignore
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});


it('message of new post should be correct', () => {
    let action = addPostAC('hello')
    let state = {
        posts: [
            {id: 1, message: 'milk', likeCount: 1},
            {id: 2, message: 'hello', likeCount: 4},
            {id: 3, message: 'nike', likeCount: 10},
        ]
    }
    // @ts-ignore
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('hello')
});

it('after deleting length of messages should be decrement', () => {

    let action = deletePostAC(3)
    let state = {
        posts: [
            {id: 1, message: 'milk', likeCount: 1},
            {id: 2, message: 'hello', likeCount: 4},
            {id: 3, message: 'nike', likeCount: 10},
        ]
    }
    // @ts-ignore
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});
