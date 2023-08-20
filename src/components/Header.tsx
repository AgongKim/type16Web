import React from "react";
import { PropsWithChildren } from "react";
import {Link, useLocation} from "react-router-dom";
import {Grid} from "@mui/material";
import img from "../assets/img";


export function Header(props:PropsWithChildren):React.ReactElement {
    /**
     * 논쟁 댓글 리스트
     */

    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <div style={{alignItems: 'center', paddingBottom: 30, borderBottom: 1, borderBottomStyle: "solid", borderBottomColor: '#d4d4d4'}}>
            <div style={{width:1140, marginTop: 50,  borderBottomWidth: 1}} className="Header horizontal">
                <Grid container spacing={1} justifyContent={'flex-start'} alignItems={'flex-end'}>
                    <Grid item xs={2}>
                        <Link to='/'>
                            <img src={img.logo} style={{width:'100%'}} alt="mainLogo"/>
                        </Link>
                    </Grid>
                    <Grid item xs={1} justifyContent={'center'}>
                        <Link style={headerTitle} to='/'>
                            <span style={{fontWeight: currentPage === '/' ? 800 : 400}}>홈</span>
                        </Link>
                    </Grid>
                    <Grid item xs={1} justifyContent={'center'}>
                        <Link style={headerTitle} to='/'>
                            <span style={{fontWeight: currentPage === '/COLOSSEUM' ? 800 : 400}}>콜로세움</span>
                        </Link>
                    </Grid>
                    <Grid item xs={1} justifyContent={'center'}>
                        <Link style={headerTitle} to='/'>
                            <span style={{fontWeight: currentPage === '/BOARD' ? 800 : 400}}>게시판</span>
                        </Link>
                    </Grid>
                    <Grid item xs={1} justifyContent={'center'}>
                        <Link style={headerTitle} to='/'>
                            <span style={{fontWeight: currentPage === '/EVALUATION' ? 800 : 400}}>평가</span>
                        </Link>
                    </Grid>
                    <Grid item xs={6} style={{justifyContent: 'flex-end'}}>
                        <Link style={headerTitle} to='/SignIn'>
                            <span style={{ padding:10, background: '#1976d2', color: '#fff', fontWeight: 700, fontSize: 14}}>로그인</span>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const headerTitle = {
    textDecoration: 'none',
    fontSize: 20,
    color: '#222',
}

export default Header
