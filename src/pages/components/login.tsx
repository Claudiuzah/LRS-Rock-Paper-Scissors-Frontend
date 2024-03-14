// async function postUser(username:any, password:any) {
//     const body = {
//       name: username,
//       password: password
//     }
//     const response = await window.fetch(${API_SELF}${AUTHENTICATE}, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     })
//     const data = await response.json()
//     return data
//   }