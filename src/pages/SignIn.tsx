import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from "react";
import api from "../apis/api";
import {produce} from "immer";


const theme = createTheme();

interface iForm {
    email: string;
    password: string;
}

export function SignIn(props:any) {

    const [token, setToken] = useState<string>('');
    const [form, setForm] = useState<iForm>({
        email: '',
        password: '',
    });

    const handleLogin = () => {
        // 로그인 API 호출 등 로그인 처리 로직

        // 로그인 성공 시 토큰을 받아온다고 가정하고, 해당 토큰을 쿠키에 저장합니다.
        const token = '로그인 토큰 값';
        // eslint-disable-next-line no-undef
       // Cookies.set('token', token, { expires: 7 }); // 쿠키의 유효기간을 설정하여 토큰을 저장합니다.
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        try{
            const { data } = await api.post('api/v1/token/', {
                    username: form.email,
                    password: form.password,
            });
            //쿠키에 토큰 저장
            document.cookie = data.access;
            await setToken(document.cookie);
            //document.cookie = `refreshToken=${data.refresh}; expires=${new Date(Date.now() + 3600000).toUTCString()}; path=/`;
            window.location.href = '/';
        }catch (e:any) {
            alert(e.message);
        }
        const token = '로그인 토큰 값';
        // eslint-disable-next-line no-undef
       // Cookies.set('token', token, { expires: 7 }); // 쿠키의 유효기간을 설정하여 토큰을 저장합니다.
    };
    const handleEmailChange = (event:any) => {
        setForm(produce((draft) => {
            draft.email = event.target.value;
        }))
    };
    const handlePasswordChange = (event:any) => {
        setForm(produce((draft) => {
            draft.password = event.target.value;
        }))
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, backgroundColor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="이메일"
                            name="email"
                            onChange={handleEmailChange}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type="password"
                            onChange={handlePasswordChange}
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="기억하기"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleLogin}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            로그인
                        </Button>
                        <Link to='/SignUp'>
                            회원가입
                        </Link>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignIn
