import React, { useState } from "react";

function Profile() {
//   const [login, setLogin] = useState(4);

  var login = 4;

  return (
    <div>
      {login === 1 ? (
        <h1>Welcome User 1</h1>
      ) : login === 2 ? (
        <h1>Welcome User 2</h1>
      ) : (
        <h1>Welcome Guest</h1>
      )}
    </div>
  );
}

export default Profile;
