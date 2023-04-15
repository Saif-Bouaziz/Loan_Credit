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


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [demandeCounts, setDemandeCounts] = useState(null);

  useEffect(() => {
    async function fetchDemandeCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/status_counts");
      const data = await response.json();
      setDemandeCounts(data);
    }

    fetchDemandeCounts();
  }, []);

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

  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/credit/client_count/',{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`, // include JWT token in the request header
          },
        });
        setClientCount(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchClient();
  });

  const [agentCount, setAgentCount] = useState(0);

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/credit/agent_count/',{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`, // include JWT token in the request header
          },
        });
        setAgentCount(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAgent();
  });

  const [demandeCount, setDemandeCount] = useState(0);


  useEffect(() => {
    const fetchDemande = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/credit/demande_count/',{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`, // include JWT token in the request header
          },
        });
        setDemandeCount(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDemande();
  });

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={`${demandeCount}`}
            subtitle="Nombre de demandes"
            progress="0.75"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={`${agentCount}`}
            subtitle="Nombre d'agents"
            progress="0.50"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={`${clientCount}`}
            subtitle="Nombre de clients"
            progress="0.30"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            
            
            }
          />
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
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
                backgroundColor={colors.greenAccent[500]}
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
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
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
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
