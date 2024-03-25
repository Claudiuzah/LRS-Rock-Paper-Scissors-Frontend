// import React, { useState } from 'react';
// import { Container, TextInput, Button } from '@mantine/core';
// import { AUTHENTICATE, API_SELF } from '../constants';
// import { useLogin } from '../login-provider';

// async function postUser(username:any, password:any) {
//     const body = {
//       name: username,
//       password: password
//     }
//     const response = await window.fetch(`${API_SELF}${AUTHENTICATE}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     })
//     const data = await response.json()
//     return data
//   }

// export function AuthenticationForm({hidelogin, setUser, setusername}) {
//     const [username, setUsername] = useState('TEEEST');
//     const [password, setPassword] = useState('password');
//     const { isLoggedIn, login, logout } = useLogin();
//     async function logging() {
//         const data = await postUser(username, password);
//         setUser(data.id);
//         setusername(data.name);
//         setTimeout(() => {
//           hidelogin();
//           login();
//         }, 200);
//     }

//     return (
//         <Container size="sm" className='text-center'>
//             <h2>Login</h2>

//             <TextInput
//                 label="Username"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(event) => setUsername(event.target.value)}
//                 className='mt-[15px]'
//             />
//             <TextInput
//                 label="Password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 className='mt-[15px]'
//             />
//             <Button
//                 onClick={logging}
//                 variant='outline'
//                 className='mt-[50px]'>
//                 Login
//             </Button>
//         </Container>
//     )
// }
