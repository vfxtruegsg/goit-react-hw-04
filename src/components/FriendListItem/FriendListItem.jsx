import friStyles from "./FriendListItem.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id}>
      <div className={friStyles["user-container"]}>
        <img src={avatar} alt={name} width="48" />
        <p
          style={{
            fontWeight: 600,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: 12,
          }}
          className={clsx(
            isOnline ? friStyles["status-online"] : friStyles["status-offline"]
          )}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
