import React from 'react'
import "./homescreen.css"
import Nav from "./Nav"
import Banner from './Banner'
import Row from './Row'
import requests from './Requests'

export default function HomeScreen() {
  return (
    <div className='homescreen'>
    <Nav />
   <Banner />
   <Row 
   title= "NETFLIX ORIGINALS"
   fetchurl = {requests.fetchNetflixOriginals}
   islargeRow
   />
   <Row
   title= "Trending Now"
   fetchurl = {requests.fetchTrending}
   
   />
   <Row 
   title= "Top Rated"
   fetchurl = {requests.fetchTopRated}
   
   />
   <Row 
   title= "Comedy Movies"
   fetchurl = {requests.fetchComedyMovies}
   
   />
   <Row 
   title= "Horror Movies"
   fetchurl = {requests.fetchHorrorMovies}
   
   />
   <Row 
   title= "Romance Movies"
   fetchurl = {requests.fetchRomanceMovies}
   
   />
   <Row 
   title= "Documentation"
   fetchurl = {requests.fetchDocumentaries}
   
   />
    </div>
  )
}
