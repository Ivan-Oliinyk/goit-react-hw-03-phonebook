import PropTypes from "prop-types";
import Button from "../Button/Button";

const ContactListItem = ({ name, number, onClick }) => (
  <li>
    {name}: {number}
    <Button type="button" onClick={onClick}>
      Delete
    </Button>
  </li>
);
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
