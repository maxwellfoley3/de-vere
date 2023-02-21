import * as React from "react"
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import flower from '../images/flower-li.gif';

console.log('flower', flower);
export const PageLinks = ({ data }) => {
	return (
		<div className="links">
			<ul>
				{data.nodes.map(node => (
					<li key={node.id}>
						<img src={flower} style={{ width:'15px', position: 'relative', top:'3px', marginRight:'7px'}}/>
						<Link to={node.pagePath}>{node.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};