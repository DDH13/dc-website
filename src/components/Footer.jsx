import React from 'react';
import {ThemeProvider, Box, CssBaseline, Container} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaEnvelope} from 'react-icons/fa';
import styled from "styled-components";

const defaultTheme = createTheme({});
const StickyFooter = () => {
    return (
        <ThemeProvider theme={defaultTheme}>

                <CssBaseline/>

                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container className="row"
                               style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1em'}}>
                        <div className="col-5">
                            <small>© Copyright 2023. Dineth and Himaya</small>
                        </div>
                        <div className="col-5" >
                            <SocialLinks links={socialLinks}/>
                        </div>
                    </Container>
                </Box>

        </ThemeProvider>
    );
};
const socialLinks = [
    {href: "https://www.youtube.com/@debaterscouncil-srilanka6367", icon: 'FaYoutube', name: 'YouTube', color: 'red'},
    {href: "https://www.facebook.com/DebatersCouncilSriLanka/", icon: 'FaFacebookF', name: 'Facebook', color: 'blue'},
    {href: "https://www.instagram.com/debaterscouncilsl/", icon: 'FaInstagram', name: 'Instagram', color: 'purple'},
    {href: "https://twitter.com/DebatersCouncil", icon: 'FaTwitter', name: 'Twitter', color: 'skyblue'},
    {href: "mailto:debaterscouncil@gmail.com", icon: 'FaEnvelope', name: 'Email', color: 'lightred'},
];

const icons = {
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaEnvelope
};

// Styled components
const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  margin: 0 10px;
`;

const FeedbackLink = styled.a`
  margin-left: 50px;
  margin-bottom: -15px;
  font-size: 20px;
`;

// Component
const SocialLinks = ({links}) => {
    return (
        <List>
            {links.map(({href, icon, name, color}, index) => (
                <ListItem key={index}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {React.createElement(icons[icon], {style: {color: color, height: '20px', width: '20px'}})}
                    </a>
                </ListItem>
            ))}
        </List>
    );
};

export default StickyFooter;
