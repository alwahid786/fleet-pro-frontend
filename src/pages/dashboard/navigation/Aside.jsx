import { Box, Button, Stack, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '../../../assets/svgs/HomeIcon'
import DashboardIcon from '../../../assets/svgs/DashboardIcon'
import ChevronIcon from '../../../assets/svgs/ChevronIcon'
import ChevronIconUp from '../../../assets/svgs/ChevronIconUp'
import ChevronRightIcon from '../../../assets/svgs/ChevronRightIcon'
import Collapse from '@mui/material/Collapse'
import RealTimeMapIcon from '../../../assets/svgs/RealTimeMapIcon'
import ReportsIcon from '../../../assets/svgs/ReportsIcon'
import ReportNestedIcon from '../../../assets/svgs/ReportNestedIcon'
import LogoIcon from '../../../assets/svgs/LogoIcon'
import SettingIcon from '../../../assets/svgs/SettingIcon'
import SettingNestedIcon from '../../../assets/svgs/SettingNestedIcon'
import AsideTruckIcon from '../../../assets/svgs/AsideTruckIcon'
import AsideTruckBgImg from '../../../assets/images/asidetrucksec.png'

const Aside = ({ toggleNav }) => {
  const [openPage, setOpenPage] = useState(null)
  const [isActivePage, setIsActivePage] = useState('home')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlePages = (page) => {
    setOpenPage(openPage === page ? null : page)
    setIsActivePage(page)
  }
  const handleLogout = () => {
    navigate('/login')
  }
  const pages = [
    {
      icon: <HomeIcon isActivePage={isActivePage} />,
      title: 'Home',
      route: '/dashboard/home',
      page: 'home',
    },
    {
      icon: <DashboardIcon isActivePage={isActivePage} />,
      title: 'Dashboard',
      // route: '/dashboard/map',
      page: 'dashboard',
      subPages: [
        {
          icon: <RealTimeMapIcon isActivePage={isActivePage} />,
          title: 'Real Time Map',
          route: '/dashboard/map',
          page: 'real-time-map',
        },
      ],
    },
    {
      icon: <ReportsIcon isActivePage={isActivePage} />,
      title: 'Reports',
      // route: '/dashboard/reports/truckreport',
      page: 'reports',
      subPages: [
        {
          icon: <ReportNestedIcon />,
          title: 'Truck Report',
          route: '/dashboard/reports/truckreport',
          page: 'truck-report',
        },
        {
          icon: <ReportNestedIcon />,
          title: 'Daily Operation',
          route: '/dashboard/reports/operations',
          page: 'daily-operation',
        },
        {
          icon: <ReportNestedIcon />,
          title: 'Video Evidence',
          route: '/dashboard/reports/video',
          page: 'video-evidence',
        },
        {
          icon: <ReportNestedIcon />,
          title: 'SOS',
          route: '/dashboard/reports/sos',
          page: 'sos',
        },
      ],
    },
    {
      icon: <SettingIcon isActivePage={isActivePage} />,
      title: 'Settings',
      route: '/dashboard/setting/alert',
      page: 'settings',
      subPages: [
        {
          icon: <SettingNestedIcon />,
          title: 'Alerts Type',
          route: '/dashboard/setting/alert',
          page: 'alerts-type',
        },
        {
          icon: <SettingNestedIcon />,
          title: 'Drivers',
          route: '/dashboard/setting/driver',
          page: 'drivers',
        },
        {
          icon: <SettingNestedIcon />,
          title: 'Trucks',
          route: '/dashboard/setting/truck',
          page: 'trucks',
        },
        {
          icon: <SettingNestedIcon />,
          title: 'Devices',
          route: '/dashboard/setting/devices',
          page: 'devices',
        },
        {
          icon: <SettingNestedIcon />,
          title: 'Users',
          route: '/dashboard/setting/users',
          page: 'users',
        },
      ],
    },
  ]

  return (
    <>
      <Asidemain>
        <Stack
          justifyContent="space-between"
          sx={{
            gap: {
              sm: '1rem',
              md: '4rem',
            },
            width: '100%',
          }}
        >
          <ImageContainer>
            <LogoIcon />
          </ImageContainer>
          {/* Links  */}
          <Box
            sx={{
              marginTop: {
                xs: '30px',
                md: '40px',
                lg: '50px',
              },
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {pages.map((page, i) => (
              <React.Fragment key={i}>
                <Box
                  component={Link}
                  to={page.route}
                  onClick={() => {
                    handlePages(page.page)
                    setIsActivePage(page.page)
                    page.page === 'home' &&
                      window.innerWidth <= 1199 &&
                      toggleNav(false)
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    padding: '9px 16px',
                    backgroundColor:
                      isActivePage === page.page ? '#fff' : 'transparent',
                  }}
                >
                  {page.icon}
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '20px',
                      fontWeight: '400',
                      lineHeight: '30px',
                      color: isActivePage === page.page ? '#000' : '#fff',
                    }}
                  >
                    {page.title}
                  </Typography>
                  {page.subPages &&
                    (openPage === page.page ? (
                      <ChevronIconUp />
                    ) : (
                      <ChevronIcon isActivePage={isActivePage === page.page} />
                    ))}
                </Box>
                {page.subPages &&
                  page.subPages.map((subpage) => (
                    <Collapse
                      key={subpage.title}
                      in={openPage === page.page}
                      timeout="auto"
                      unmountOnExit
                      sx={{
                        paddingLeft: '15px',
                      }}
                    >
                      <Box
                        component={Link}
                        to={subpage.route}
                        onClick={() => {
                          setIsActivePage(subpage.page)
                          window.innerWidth <= 1199 && toggleNav(false)
                        }}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          borderRadius: '8px',
                          padding: '9px 16px',
                          width: '100%',
                          backgroundColor:
                            isActivePage === subpage.page
                              ? '#fff'
                              : 'transparent',
                        }}
                      >
                        {isActivePage === subpage.page && subpage.icon}
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '20px',
                            fontWeight: '400',
                            lineHeight: '30px',
                            color:
                              isActivePage === subpage.page ? '#000' : '#fff',
                          }}
                        >
                          {subpage.title}
                        </Typography>
                      </Box>
                    </Collapse>
                  ))}
              </React.Fragment>
            ))}
          </Box>
        </Stack>
        <AsideTruckSec>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#ffffff',
              }}
            >
              Fleet Management
            </Typography>
            <ChevronRightIcon />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '-24%',
            }}
          >
            <AsideTruckIcon />
          </Box>
          <Button
            sx={{
              color: '#fff',
            }}
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </AsideTruckSec>
      </Asidemain>
    </>
  )
}

export default Aside

const Asidemain = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '16px 8px',
  gap: '3rem',
  background: 'linear-gradient(180deg, #006BCB 0%, #004A8B 100%)',
  '@media (min-width:991px)': {
    padding: '28px 14px 40px',
  },
  '@media (min-height:800px)': {
    height: '100%',
  },
})

const ImageContainer = styled(Box)({
  maxWidth: '100%',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const AsideTruckSec = styled(Box)({
  background: `url(${AsideTruckBgImg}) no-repeat center / cover`,
  position: 'relative',
  width: '100%',
  // flexGrow: '1',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: '141px',
  padding: '16px',
  borderRadius: '10px',
  marginTop: '6rem',
})
