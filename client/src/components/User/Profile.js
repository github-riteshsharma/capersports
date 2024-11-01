import {Avatar, Box, Card, Container, createTheme, styled, Tab, Tabs, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import {useNavigate } from 'react-router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import Wishlist from './Wishlist';
import UpdatePassword from './UpdatePassword';
import MyOrders from '../Order/MyOrders';
import UpdateProfile from './UpdateProfile';
import { capitalCase } from 'change-case';
import cssStyles from '../../utils/cssStyles';
import HeaderBreadcrumbs from '../../helper/HeaderBreadcrumbs';
import LoadingScreen from '../../helper/LoadingScreen';
import Account from './Account';
import useTabs from '../../hooks/useTabs';



const RootStyle = styled('div')(({ theme }) => ({
  '&:before': {
    ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));

export default function Profile() {
    const navigate = useNavigate()
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    const [value, setValue] = React.useState(0);
    const { currentTab, onChangeTab } = useTabs('profile');


    const handleChange = (event, newValue) => {
      setValue(newValue);
  };
   

    useEffect(() => {

      if(user.role === 'admin'){
        document.title = 'Admin: Profile | Caper Sports'
      }else{
        document.title = 'User: Profile | Caper Sports'
        
      }
        if (isAuthenticated === false) {
            navigate("/login");
        }
      }, [isAuthenticated]);


      const PROFILE_TABS = [
        {
          value: 'profile',
          icon: <AccountBoxIcon style={{width:20, height:20}}/>,
          component: <Account/>,
        },
        {
          value: 'favorite',
          icon: <FavoriteIcon style={{width:20, height:20}}/>,
          component: <Wishlist/>,
        },
        {
          value: 'orders',
          icon: <ShoppingBagIcon style={{width:20, height:20}}/>,
          component: <MyOrders/>,
        },
        {
          value: 'change_password',
          icon: <KeyIcon style={{width:20, height:20}}/>,
          component: <UpdatePassword/>,
        },

        {
          value: 'update_profile',
          icon: <PersonIcon style={{width:20, height:20}}/>,
          component: <UpdateProfile/>,
        },
      ];

  return (
    <>
    {loading ? (<LoadingScreen/>):(
            <Container maxWidth='lg' sx={{mt:15}}>
               <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: 'Dashboard', href: '/admin/dashboard' },
            { name: 'User', href: '/user' },
            { name: user?.name || '' },
          ]}
        />
               <Card sx={{ mb: 3, height: 280, position: 'relative'}}>
                <RootStyle>
                  <InfoStyle>
                    <Avatar src={user?.avatar?.url} sx={{ mx: 'auto', borderWidth: 2, borderStyle: 'solid', borderColor: 'common.white', width: { xs: 80, md: 128 }, height: { xs: 80, md: 128 }}}/>
                    <Box sx={{ ml: { md: 3 }, mt: { xs: 1, md: 0 }, color: 'common.white', textAlign: { xs: 'center', md: 'left' }}}>
                      <Typography variant="h4">{user?.name}</Typography>
                      <Typography sx={{ opacity: 0.72 }}>Caper Sports Member Since {String(user.CreatedAt).substr(0, 10)}</Typography>
                    </Box>
                  </InfoStyle>
                </RootStyle>
                
                <TabsWrapperStyle>
                  <Tabs
                  allowScrollButtonsMobile
                  value={currentTab}
                  onChange={onChangeTab}
                  variant="scrollable"
                  scrollButtons="auto"
                  >
                    {PROFILE_TABS.map((tab) => (
                    <Tab disableRipple key={tab.value} value={tab.value} icon={tab.icon} label={capitalCase(tab.value)} />
                    ))}
                </Tabs>
              </TabsWrapperStyle>
            </Card>
   
          {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
</Container>
        )}
       </>
  )
}
