import styled from "styled-components";
import {Box} from '@mui/material';
import MenuList from '@mui/material/MenuList';

export const HeaderWrapper =styled(Box)`
    background-color: #050023;
    color: white;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 20px 0px 20px 0px;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    align-items:center;
    width: 100%;
    .actions {
        margin-left: auto;
        .btn_buy_now {
           background-color: #EFF0FC;
            border-radius: 8px 8px 8px 8px;
            color: #283445;
            font-family: "Poppins";
            font-size: 14px;
            font-weight: 600;
            // text-transform: capitalize;
        }
    }
`

export const BoxNavbarWrapper = styled(Box)`
    .navbar_item {
        padding: 0px 38px 0px 0px;
        color: #FFFFFF;
        display: block;
        font-size: 14px;
        font-weight: 600;
    }
`

export const MenuListWrapper = styled(MenuList)`
    box-shadow:none;
    background-color: #222;
    color:white;
    font-weight: 700;
`