
const init={
        persons:[]
};

export function personReducer(state=init,action){

    switch(action.type){

        case 'ADD_PERSON':

        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
            }
            console.log(state.persons);
            return { ...state,persons: state.persons.concat(newPerson)}

        case 'DELETE_PERSON':
            console.log('deleted',action.personID);
        return {...state, persons: state.persons.filter(person => person.id !== action.personID)}
        
        default : return {...state}
    }

}

 