import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Development = lazy(() => import("./pages/Development"));
const PixelArt = lazy(() => import("./pages/PixelArt"));
const FineArts = lazy(() => import("./pages/FineArts"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<SpinnerFullPage />}>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="About" element={<About />} />
					<Route path="Work" element={<Work />} />
					<Route path="Development" element={<Development />} />
					<Route path="PixelArt" element={<PixelArt />} />
					<Route path="FineArts" element={<FineArts />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
