import React, { useState } from 'react';

import {
	Outlet
} from "react-router";

import AppBar from './AppBar';
import Navigation from './Navigation';


export default function Layout() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<>
			<AppBar
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
			/>
			<Navigation
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
			/>
			<Outlet />
		</>
	);
};
