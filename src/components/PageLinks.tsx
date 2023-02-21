import * as React from "react"
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

export const PageLinks = ({ data }) => {
	return (
		<ul>
			{data.nodes.map(node => (
				<li key={node.id}>
					<Link to={node.pagePath}>{node.title}</Link>
				</li>
			))}
		</ul>
	);
};