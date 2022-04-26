import React from "react"

export type SvgIconProps = {
	className?: string
	stroke?: string
	fill?: string
	thickness?: number
}

const Svg: React.FC<{}> = props => (
	<>{props.children}</>
);

interface SvgIconSubComponents {
	Svg: React.FC<{}>
}

export const SvgIcon: React.FC<SvgIconProps> & SvgIconSubComponents = props => {
	var stroke: string | undefined = "none"
	if (props.stroke) {
		stroke = props.stroke
	}

	var fill: string | undefined = "none"
	if (props.fill) {
		fill = props.fill
	}

	var thickness = 2
	if (props.thickness) {
		thickness = props.thickness
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			stroke={stroke}
			strokeWidth={thickness}
			fill={fill}
			height="24"
			width="24"
			enableBackground="new 0 0 24 24"
			viewBox="0 0 24 24">
			{props.children}
		</svg>
	);
}

Svg.displayName = "Svg"
SvgIcon.Svg = Svg;