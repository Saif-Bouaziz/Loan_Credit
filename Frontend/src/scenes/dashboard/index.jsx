import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useState, useEffect } from 'react'
import axios from "axios";
import Chart from "../../components/BarChart";
import CreditChart from "../../components/LineChart";
import {PeopleAlt} from "@mui/icons-material";
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Card from "scenes/cards/Card";
import Mail from "scenes/cards/mail";



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [demandeCounts, setDemandeCounts] = useState(null);
  const [creditCounts, setCreditCounts] = useState({});

  useEffect(() => {
    async function fetchDemandeCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/status_counts");
      const data = await response.json();
      setDemandeCounts(data);
    }

    fetchDemandeCounts();
  });

  useEffect(() => {
    async function fetchCreditCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/update_credit_counts/");
      const data = await response.json();
      setCreditCounts(data);
    }

    fetchCreditCounts();
  });


  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    const fetchLastSixDemande = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/credit/last_six_demande/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`, // include JWT token in the request header
          },
        });
        setDemandes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLastSixDemande();
  });

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Tableau de bord" subtitle="Bienvenue Admin" />
      </Box>
      <Card />
      <Mail />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        

        {/* ROW 2 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[100]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Dernières demandes non traitées
            </Typography>
          </Box>
          {demandes.map((demande,i) => (
            <Box
              key={`${demande.DemandeId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {demande.DemandeId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {[demande.first_name," ",demande.last_name]}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{demande.status}</Box>
              <Box
                backgroundColor={colors.greenAccent[100]}
                p="5px 10px"
                borderRadius="4px"
              >
                {demande.loan_amnt}DT
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[100]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Répartition des demandes
          </Typography>
          <Box height="250px" mt="-20px">
          {demandeCounts && <Chart data={[demandeCounts]} />}
           </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[100]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Evolution des credits
          </Typography>
          <Box height="250px" mt="-20px">
           <CreditChart data={creditCounts} />
           </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
