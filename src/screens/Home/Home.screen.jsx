import { useState } from 'react';
// import ReactGridLayout, { useContainerWidth } from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-grid-resizable/css/styles.css';
import { Grid, Button, Typography } from "@mui/material";
import './Home.screen.css';

import styles from './Button.module.css';

import { Home, Admin, Trainee } from './navigation/AppRoutes.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import fire from '../../assets/images/fire_example';

function Home() {
    // const navigate = useNavigate()
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 3 }}>
        <div>
            <h1>S.I.R.E.</h1>
            <Button onClick={() => Navigate("/login")}>
                Admin Login
            </Button>
            <Button onClick={() => Navigate("/login")}>
                Trainee Login
            </Button>
        </div>

        {/* <Typography variant="h5" gutterBottom>
          SIRE
        </Typography> */}
        <BrowserRouter>
          {/* <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/admin">Admin</Link> |{" "}
            <Link to="/trainee">Trainee</Link> |{" "}
          </nav> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/trainee" element={<Trainee />} />
          </Routes>
        </BrowserRouter>
      </Grid>
      <Grid size={{ xs: 12, sm: 9 }}>
        <div
          style={{
            width: "100%",
            height: "400px",
            display: "flex"
            // justifyContent: "center",
            // alignItems: "center"
          }}
        >
          {/* <Typography variant="h6">Video or Image</Typography> */}
          <img 
            src={fire}
            alt="Fire Example"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default Home