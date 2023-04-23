import { useState,useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import {PeopleAlt} from "@mui/icons-material";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';

import axios from "axios";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);



  useEffect(() => {
    axios.get('http://127.0.0.1:8000/credit/get_banquier')
    .then(response => {
      const banquierList = response.data;
      if (banquierList.length > 0) {
        const banquier = banquierList[1];
        const userName = banquier.name;
        setUser(userName);
      }
    })
      .catch(error => console.log(error));
  });
  const accessToken = localStorage.getItem("accessToken");


  const handleImageUpload =(event)=> {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
  
    // Send the form data to the backend API
    fetch('http://127.0.0.1:8000/credit/upload_image', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Update the user account with the new image URL
      const userAccount = { ...user, image: data.image_url };
      setUser(userAccount);
      document.getElementById("profile-image").src = data.image_url;
      setImage(data.image_url);

    })
    .catch(error => console.error(error));
  }
  

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[100]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
              <label htmlFor="upload-photo">
                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleImageUpload(event)}
                />
                <img
                  alt="taswira ken besh naamlou"
                  id="profile-image"

                  width="100px"
                  height="100px"
                  src={image ? user.image : "../../assets/user.png"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </label>
              </Box>
              <Box textAlign="center">
              {user && (
                <>

                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Banquier
                </Typography>
                </>

                  )}

              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Tableau De Bord"
              to="/Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Données
            </Typography>
            <Item
              title="Demandes"
              to="/Demandes"
              icon={<PriceCheckIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                        <Item
              title="Credits"
              to="/credits"
              icon={<CreditScoreIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Liste Clients"
              to="/Liste_utilisateurs"
              icon={<GroupsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Liste Agents"
              to="/Liste_agents"
              icon={<InterpreterModeIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            Gestion
            </Typography>
            <Item
              title="Ajouter Agent"
              to="/ajout_agent"
              icon={<PersonAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />


          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
