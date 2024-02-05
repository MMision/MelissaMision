import { useLocation } from "react-router-dom";

export default function CurrentPage(props) {
	const location = useLocation();

	// location.search returns a string containing all
	// the query parameters.
	// Suppose the URL is "some-website.com/profile?id=12454812"
	// then location.search contains "?id=12454812"
	// Now you can use the URLSearchParams API so that you can
	// extract the query params and their values
	const searchParams = new URLSearchParams(location.search);

	return (
		<div>
			{
				// Do something depending on the id value
				(searchParams.get("id"), // returns "12454812"
				console.log(props))
			}
		</div>
	);
}
