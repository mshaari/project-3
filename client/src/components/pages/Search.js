import React, { useState } from 'react';
import axios from 'axios';
import JobResults from '../jobs/JobResults';
import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../../utils/queries'; //Imports the query we made in client/src/utils/queries.js
import '../../styles/pages.css';

// An onChange event was added to each input field to update the corresponding state variable whenever the user selects a new value

// An onClick event is added to the Search button, which calls the handleSearch function.
function Search() {
 const [country, setCountry] = useState('');
 const [role, setRole] = useState('');
 const [location, setLocation] = useState('');

 const [findJobs, { loading, data }] = useQuery(QUERY_JOBS);

// This should make an API call with the country, role, and location values using Axios and passing them to the findJobs query.

const handleSearch = async (event) => {
    event.preventDefault();
    try {
        const queryResponse = await findJobs({
            variables: { country: country, role: role, location: location },
        });
        console.log(queryResponse);
    } catch (e) {
        console.log(e);
    }
}
 return (
  <div className='page-content'>
   <div className='search-container search-active'>
    <h3 className='search'>Job Search:</h3>
    <div className='search-box'>
     <label>Country:</label>
     <select id='country-select' onChange={(e) => setCountry(e.target.value)}>
      <option disabled selected>Please select one</option>
      <option value='us'>US</option>
      <option value='gb'>UK</option>
      <option value='at'>Austria</option>
      <option value='au'>Australia</option>
      <option value='be'>Belgium</option>
      <option value='ca'>Canada</option>
      <option value='ch'>China</option>
      <option value='de'>Germany</option>
      <option value='es'>Spain</option>
      <option value='fr'>France</option>
      <option value='in'>India</option>
      <option value='it'>Italy</option>
      <option value='mx'>Mexico</option>
      <option value='nl'>The Netherlands</option>
      <option value='nz'>New Zealand</option>
      <option value='pl'>Poland</option>
      <option value='ru'>Russia</option>
      <option value='sg'>Singapore</option>
      <option value='za'>South Africa</option>
     </select>
    </div>
    <div className='search-box'>
     <label>Job Title:</label>
     <select id='job-select' onChange={(e) => setRole(e.target.value)}>
      <option disabled selected>Please select one</option>
     	<option value='software-engineer'>Software Engineer</option>
        <option value='web-developer'>Web Developer</option>
        <option value='mobile-app-developer'>Mobile App Developer</option>
        <option value='data-analyst'>Data Analyst</option>
        <option value='data-scientist'>Data Scientist</option>
        <option value='machine-learning-engineer'>Machine Learning Engineer</option>
        <option value='artificial-intelligence-researcher'>Artificial Intelligence Researcher</option>
        <option value='cybersecurity-analyst'>Cybersecurity Analyst</option>
        <option value='network-administrator'>Network Administrator</option>
        <option value='cloud-architect'>Cloud Architect</option>
        <option value='devops-engineer'>DevOps Engineer</option>
        <option value='project-manager'>Project Manager</option>
        <option value='product-manager'>Product Manager</option>
        <option value='user-experience-designer'>User Experience Designer</option>
        <option value='user-interface-designer'>User Interface Designer</option>
        <option value='quality-assurance-engineer'>Quality Assurance Engineer</option>
        <option value='technical-writer'>Technical Writer</option>
        <option value='technical-support-specialist'>Technical Support Specialist</option>
        <option value='sales-engineer'>Sales Engineer</option>
        <option value='business-analyst'>Business Analyst</option>
     </select>
    </div>
    <div className='search-box'>
     <label>Location:</label>
     <input id='location' placeholder='city or postal code' onChange={(e) => setLocation(e.target.value)}></input>
    </div>
    <button id='search-btn' onClick={handleSearch}>Search</button>
    <div>
     <h3 className='results'>Results:</h3>
     <JobResults />
    </div>
   </div>
  </div>
 );
}
export default Search;