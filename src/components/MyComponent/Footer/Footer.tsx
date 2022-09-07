/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { Box, Container } from "@mui/system";
import { Grid, Typography, FormHelperText, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import floKiFooter from "assets/images/floki-footer.png";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TwitterIcon from '@mui/icons-material/Twitter';
import CampaignIcon from '@mui/icons-material/Campaign';
import TelegramIcon from '@mui/icons-material/Telegram';

const FooterWrapper = styled(Box)`
  padding-top:15px;
  padding-bottom: 20px;
  background-color: white;
`
const FooterIcon = styled(Box)`
    text-align: center;
    margin-bottom: 8px;
    a{
      margin: 4px;
      background-color: #292A47;
      padding: 8px;
      border-radius: 2px;
      justify-content: center;
      justify-items: center;
      &:hover {
        cursor: pointer;
        background-color: #3772FF;
      }
      svg {
        padding-top: 8px;
        color: white;
      }
    }
`
const HeaderTitle = styled(Box)`
  text-align: center;
  color: #000;
`

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = () => {console.log("Footer")};

  return (
    <FooterWrapper   >
        <Container>
          <FooterIcon>
            <a href="https://twitter.com/PITI_PitbullInu" target="_blank" rel="noreferrer"><TwitterIcon/></a>
            <a href="https://t.me/PITIGlobal" target="_blank" rel="noreferrer"><TelegramIcon /></a>
            <a href="https://t.me/PITIAnnoucement" target="_blank" rel="noreferrer"><CampaignIcon /></a>
          </FooterIcon>
          <HeaderTitle  mt={4}> Copyright © 2022. All rights reserved by Pitbull Team</HeaderTitle>
        </Container>
    </FooterWrapper>
  );
};

export default Footer;
