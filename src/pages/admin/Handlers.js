export const HandleDeleteCareer = (rowValues, setDeletedOrUpdated, deletedOrUpdated) => {
  fetch(`https://localhost:7172/api/Careers/${rowValues.id}`, {
    method: 'DELETE',
    headers: { "Content-type": "application/json" },
  })
    .then((r) => {
      if (r.ok) {
        setDeletedOrUpdated(!deletedOrUpdated);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const HandleUpdateCareer = (rowValues, setDeletedOrUpdated, deletedOrUpdated) => {
  const { id } = rowValues;
  const { col2, col3, col4, col5 } = rowValues.row;
  const updatedCareer = {
    name: col4,
    type: col2,
    abbreviation: col3,
    totalSubjets: col5,
  };
  fetch(`https://localhost:7172/api/Careers?careerId=${id}`, {
    method: 'PUT',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updatedCareer),
  })
    .then((r) => {
      if (r.ok) {
        setDeletedOrUpdated(!deletedOrUpdated);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const ActivateDeactivateUser = (userId, activate, userRole, setDeletedOrUpdated, deletedOrUpdated, jwt) => {
  const updateRequest = {
    userId: userId,
    activate: activate,
    isStudent: userRole === "alumnos" ? true : false,
  };
  if (userRole === "alumnos") {
    fetch("https://localhost:7172/api/UsersInfo/ActivateDeactivateAccount", {
      method: 'PUT',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(updateRequest),
    })
      .then((r) => {
        if (r.ok) {
          setDeletedOrUpdated(!deletedOrUpdated);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else if (userRole === "empresas") {
    fetch("https://localhost:7172/api/UsersInfo/ActivateDeactivateAccount", {
      method: 'PUT',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(updateRequest),
    })
      .then((r) => {
        if (r.ok) {
          setDeletedOrUpdated(!deletedOrUpdated);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
