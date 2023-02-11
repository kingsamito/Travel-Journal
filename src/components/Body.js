import React from "react"
import LocationOnIcon from "@mui/icons-material/LocationOn"

export default function Body(props) {
  return (
    <section className="body">
      <div className="img-container">
        <img src={props.imageUrl} className="img" alt="" />
      </div>
      <div className="details">
        <div className="details-location">
          <span className="location-icon"><LocationOnIcon /></span>
          <span>{props.location}</span>
          <a href={props.LocationUrl}
            className="location-link">View on Google Maps</a>
        </div>
        <div className="details-about">
          <h1>{props.title}</h1>
          <p className="date">{props.date}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  )
}