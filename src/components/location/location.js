import React, { useEffect, useState } from "react";
import "./location.scss";
import { getCurrentLocation, hasLocation } from "./helpers";

const Location = ({ placement }) => {
	const [location, setlocation] = useState({});
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		getCurrentLocation(placement, setlocation, setErrorMessage);
	}, [placement]);

	if (errorMessage && errorMessage.length != 0) {
		return <></>;
	}

	if (!hasLocation(location)) {
		return <></>;
	}

	return (
		<div id="location" className="card">
			<div className="card-body">
				<h2 className="card-title">Location</h2>
				<p className="card-text">
					<span className="card-title text-muted">Location: </span>
					{location.name}
				</p>
				<p className="card-text">
					<span className="card-title text-muted">Dimension: </span>
					{location.dimension}
				</p>
				<p className="card-text">
					<span className="card-title text-muted">Name: </span>
					{location.name}
				</p>
				<p className="card-text">
					<span className="card-title text-muted">Type: </span>
					{location.type}
				</p>
				<p className="card-text">
					<span className="card-title text-muted">Residents: </span>
					{location.residents ? location.residents.length : 0}
				</p>
			</div>
		</div>
	);
};

export default Location;
