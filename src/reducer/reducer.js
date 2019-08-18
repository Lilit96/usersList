export const actions = {
    DELETE_USER : "DELETE_USER",
    EDIT_USER_INFO: "EDIT_USER_INFO",
    ADD_USER: "ADD_USER"
}

const initialState=[
    {
        id: 1,
        name:'Thom',
        surname: 'Jones',
        mail:'jones91@example.com',
        phone: '1-770-736-8031',
        address: 'Gwenborough',
        date: '11/12/1999'
    },
    {
        id: 2,
        name:'Ervin Howell',
        surname: 'Antonette',
        mail:'Shanna@melissa.tv',
        phone: '010-692-6593',
        address: 'Victor Plains',
        date: '12/01/1996'
    },
    {
        id: 3 ,
        name:'lementine Bauch',
        surname: 'Samantha',
        mail:'Nathan@yesenia.net',
        phone: '1-463-123-4447',
        address: 'Douglas Extension',
        date: '11/02/1999'
    },
]

export default(state=initialState, {type, payload}) => {
        switch(type){
            case actions.DELETE_USER: 
                return [ 
                    ...state.filter(i => i.id !== payload)
                ]
            case actions.EDIT_USER_INFO:
                    state.map(item =>{
                        if(item.id === payload.id){
                           return payload
                        }
                        return item
                    })   
                    return [
                        ...state
                    ] 
            case actions.ADD_USER: 
                payload.newUser.id = payload.id    
                return [ 
                    ...state, payload.newUser
                ]        
            default:
            return state   
       } 
}