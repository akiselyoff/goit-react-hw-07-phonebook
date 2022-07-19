import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../API/contactsApi';

const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { id, name, phone } = contact;
  return (
    <li className={s.contactItem}>
      <div className={s.contactContainer}>
        <p className={s.contactName}>{name}</p>
        <p className={s.contactPhone}>{phone}</p>
      </div>

      <button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
