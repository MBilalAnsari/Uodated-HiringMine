import React, { useEffect, useState } from 'react';
import './Job.css';
import jobcardlogo from "../../../public/jobcardlogo.png";

// Sample data array
function Job() {
  const [jobPageApi, settJobPageApi] = useState([])

  useEffect(() => {
    callJobApi()
  }, [])

  const callJobApi = () => {
    return (
      fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=&pageNo=1&keyWord=&category=`)
        .then((res) => (res.json()))
        .then((res) => {
          settJobPageApi(res.data)
          // console.log("res se api ka data aya hai")
          // console.log(jobPageApi , "==> job page api data agya")
        })
    )
  }
  // console.log(jobPageApi, "==> job page api data agya")

  return (
    <div className="border-t">
      <div className="card-main-">
        {jobPageApi.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ card }) => {
  // Function to calculate days since updatedAt
  const calculateTimeAgo = (createdAt) => {
    const updatedDate = new Date(createdAt);
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - updatedDate;
  
    const seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    if (seconds < 60) return `${seconds} seconds ago`;
    else if (minutes < 60) return `${minutes} minutes ago`;
    else if (hours < 24) return `${hours} hours ago`;
    else return `${days} days ago`;
  };

  const timeAgo = card.createdAt ? calculateTimeAgo(card.createdAt) : 'N/A'

  return (
    <div className="card- _jobCardWrapper_1vyd3_5">
      <div className="card-header- _jobCardHeader_1vyd3_30">
        <div className="text-content-">
          <p className="MuiTypography-root MuiTypography-body1">{card.companyName ? card.companyName : `Anonymous`}</p>
          <p className="MuiTypography-root MuiTypography-body1 job-title-">{card.designation}</p>
          <p className="MuiTypography-root MuiTypography-body1 job-salary- ">{card.payRangeStart && card.payRangeEnd ? `$${card.payRangeStart} - $${card.payRangeEnd}` : 'Salary not specified'}</p>
        </div>
        <img src={jobcardlogo} alt="Company Logo" className="job-logo-" />
      </div>
      <div className="card-footer- _jobCardFooter_1vyd3_43">
        <p className="MuiTypography-root MuiTypography-body1">{timeAgo}</p>
        <p className="MuiTypography-root MuiTypography-body1">{card.views} views</p>
      </div>
    </div>
  );
}

export default Job;
