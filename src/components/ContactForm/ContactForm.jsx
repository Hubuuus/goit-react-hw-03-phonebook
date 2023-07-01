import { PropTypes } from "prop-types";
import { Component } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = evt => {
    //przypisuje dane odpowiednio do state
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addContact = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    const { updateContact } = this.props;

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    updateContact(contact);

    //reset fomularza
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.Form} onSubmit={this.addContact}>
        <h3 className={css.Form_h3}>Name</h3>
        <input
          className={css.Form_input}
          onChange={this.handleChange}
          type='text'
          value={name}
          name='name'
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder='e.g. John Smith'
        />
        <h3 className={css.Form_h3}>Number</h3>
        <input
          className={css.Form_input}
          onChange={this.handleChange}
          type='tel'
          value={number}
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          placeholder='e.g. 488-88-88'
        />
        <button className={css.Form_button} type='submit'>
          Add contakt
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  updateContact: PropTypes.func,
};
