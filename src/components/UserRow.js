import React from "react";

const UserRow = ({ user }) => {
  return (
    <tr>
      <td className="user-profile">
        <img src={user.picture.thumbnail} alt={user.name.first} className="user-image" />
      </td>

      <td className="user-info">
        <div>
          <p className="user-name">{`${user.name.first} ${user.name.last}`}</p>
          <p className="user-email">{user.email}</p>
        </div>
      </td>

      <td className="user-age">{user.dob.age}</td>

      <td>
        <span className={`user-gender ${user.gender}`}>
          {user.gender}
        </span>
      </td>

      <td>
        <img
          src={`https://flagcdn.com/w40/${user.nat.toLowerCase()}.png`}
          alt={user.nat}
          className="user-flag"
        />
      </td>

      <td className="user-address">
        {`${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}`}
      </td>
    </tr>
  );
};

export default UserRow;
