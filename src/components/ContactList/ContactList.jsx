import { PropTypes } from "prop-types";
import { Component } from "react";
import css from "./ContactList.module.css";

export class ContactList extends Component {
  render() {
    const { filtered, deleteContact } = this.props;
    return (
      <>
        <ul className={css.ContactList}>
          {filtered.map(contact => (
            <li className={css.ItemList} key={contact.id}>
              <div>
                {contact.name} : {contact.number}
              </div>
              <button className={css.Btn} onClick={() => deleteContact(contact.id)}>
                Delate
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
