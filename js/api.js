export async function getApi(url, token) {
  const result = await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res);

  return result.data;
}

export async function deleteApi(url, token) {
  const result = await axios
    .delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res);

  return result;
}

export async function postApi(url, token, data) {
  const result = await axios
    .post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res);

  return result;
}

export async function loginApi(url, data) {
  const result = await axios.post(url, data).then((res) => res);

  return result;
}

// Data Get Function Fetch

/* export async function getApi(url, token) {
  const result = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });

  return result;
}

export async function postApi(url, email, password) {
  let result = {};
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    result = res.json();
  });

  return result;
}

export async function deleteApi(url, token) {
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
} */
