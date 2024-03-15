import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    // addContact(state, { payload }) {
    //   state.contacts = [...state.contacts, payload];
    // },
    // deleteContact(state, { payload }) {
    //   state.contacts = state.contacts.filter(({ id }) => id !== payload);
    // },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, { payload }) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContact.pending, (state, { payload }) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [...state.contacts.items, payload];
        state.contacts.isLoading = false;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.pending, (state, { payload }) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      });
  },
});
export const { setFilter } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
