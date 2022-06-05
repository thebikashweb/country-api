import React from "react"
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom"

import {v4 as uuidv4} from "uuid"

import {CountryState} from "../../types"

import "./countrycard.scss"

interface CountryCardProps extends Partial<CountryState> {
	onClick: Function
	disabled: boolean
}

const CountryCard = ({
	flags,
	name,
	onClick,
	region,
	disabled,
}: CountryCardProps) => {
	return (
		<div className="country-card" key={uuidv4()}>
			<div className="country-card__wrapper">
				<Link to={`/country/${name?.common}`}>
					<img src={flags?.png} alt={name?.common} />

					<h2 className="country-card__name">{name?.common}</h2>
				</Link>
				<div className="country-card__action">
					<Button
						disabled={disabled}
						className="btn btn__primary"
						onClick={() => onClick()}>
						{" "}
						Add to cart{" "}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CountryCard
