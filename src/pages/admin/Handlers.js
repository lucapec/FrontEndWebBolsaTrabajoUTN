export const handleDeleteCareer = (rowValues, setDeletedOrUpdated, deletedOrUpdated) => {
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

export const handleUpdateCareer = (rowValues, setDeletedOrUpdated, deletedOrUpdated) => {
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

export const handleUpdateStudent = (rowValues, setDeletedOrUpdated, deletedOrUpdated) => {
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

export const handleUpdateCompany = (rowValues, setDeletedOrUpdated, deletedOrUpdated) => {
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