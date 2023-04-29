// import axios from 'axios';
import FilmDetails from 'components/FilmDetails/FilmDetails';
import { Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// const { Link, useParams } = require('react-router-dom');

const FilmDetailsPage = () => {
  return(<>
  <FilmDetails></FilmDetails>
  <Outlet></Outlet>
  </>) 
};

export default FilmDetailsPage;