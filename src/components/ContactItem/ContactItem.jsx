import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/reducers';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <li className={s.contactItem}>
      <p>{name}</p>
      <p>{number}</p>

      <button type="button" onClick={() => dispatch(deleteContact(id))}>
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
