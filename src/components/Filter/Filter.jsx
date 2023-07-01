import PropTypes from "prop-types";
import { Component } from "react";
import css from "./Filter.module.css";

export class Filter extends Component {
  render() {
    const { searchChange } = this.props;
    return (
      <>
        <h4 className={css.Filter_h4}>Find contacts by name</h4>
        <input
          className={css.Filter_input}
          onChange={searchChange}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="e.g. John Smith"
        />
      </>
    );
  }
}

Filter.propTypes = {
  searchChange: PropTypes.func,
};
