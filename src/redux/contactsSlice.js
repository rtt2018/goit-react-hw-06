import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
    },
    reducers: {
        'addContact': (state, actions) => {
            state.items.push(actions.payload)
        },
        'deleteContact': (state, actions) => {
            return {
                ...state,
                items: state.items.filter((contact) => contact.id !== actions.payload)
            }
        }
    }
})

// export const removeContact = createAction('contactList/remove');
// export const addContact = createAction('contactList/add');

export default contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;