import React, { ReactElement } from "react";
import {
	styled,
	AppBar,
	Box,
	Toolbar as MuiToolBar,
	IconButton,
	Badge,
	Menu,
	MenuItem,
	Tabs,
	Tab,
	Chip,
	Avatar
} from "@mui/material";
import SearchBar from "./SearchBar";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import {
	Home, HomeOutlined, GroupOutlined, GroupsOutlined, Group, Groups, LiveTv,
	Settings, LogoutOutlined
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDownOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import { logoutAndDeleteCookies } from "../../store/actions/app/logoutAndDeleteCookies";

const StyledAppBar = styled(AppBar)`
	position: sticky;
	top: 0;
	maxHeight: 64px;
  	background-color: white;
  	color: #15bb66;	
	display: flex;
`;

const useStyles = makeStyles({
	navTab: {
		height: "64px",
		width: "8vw",
		margin: "0px 10px !important",
		color: "#15bb66 !important",
	},
});

const connector = connect(
	(state: ApplicationState) => ({
		isLoggedIn: state.app.isLoggedIn,
		username: state.app.username,
	}),
	{
		logoutAndDeleteCookies,
	}
);

function ToolBar(props: any): ReactElement {
	const { name, username, logoutAndDeleteCookies } = props;
	const styles = useStyles();
	const [tab, setTab] = React.useState(0);
	const [options, setOptions] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const routes = ["/home", "/friends"];
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleChangeTab = (event: any, newTab: any) => {
		setTab(newTab);
	};

	const handleOptions = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: any) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleLogout = () => {
		console.log("Clicked Log out");
		logoutAndDeleteCookies();
		handleMenuClose;
	};

	const OptsId = "options-menu";
	const renderOptions = (
		<Menu
			sx={{ top: "48px", right: 0 }}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={OptsId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>
				<Settings sx={{ mr: "0.5rem" }} /> Cài đặt
			</MenuItem>
			<MenuItem onClick={handleLogout}>
				<LogoutOutlined sx={{ mr: "0.5rem" }} /> Đăng xuất
			</MenuItem>
		</Menu>
	);

	const mobileMenuId = "mobile-menu";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" color="inherit">
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton size="large" color="inherit">
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
		</Menu>
	);

	return (
		<StyledAppBar>
			<MuiToolBar>
				<IconButton size="large" edge="start" color="inherit">
					<MenuIcon />
				</IconButton>
				<SearchBar></SearchBar>
				<Box sx={{
					width: "100%",
					height: "64px",
				}}>
					<Tabs value={tab} onChange={handleChangeTab} centered>
						<Tab className={styles.navTab}
							icon={tab == 0 ? (<Home fontSize="large" />)
								: <HomeOutlined fontSize="large" />}
							component={Link} to={routes[0]} />
						<Tab className={styles.navTab}
							icon={tab == 1 ? (<Group fontSize="large" />)
								: <GroupOutlined fontSize="large" />}
							component={Link} to={routes[1]} />
						<Tab className={styles.navTab}
							icon={tab == 2 ? (<Groups fontSize="large" />)
								: <GroupsOutlined fontSize="large" />} />
						<Tab className={styles.navTab} icon={<LiveTv fontSize="large" />} />
					</Tabs>
				</Box>
				<Box sx={{
					display: { xs: "none", md: "flex" },
					ml: "auto",
					mr: { md: "auto", lg: "0" },
					justifyContent: "flex-end"
				}}>
					<Link to={`/profile/${username}`} style={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none"
					}} onClick={() => { setTab(4); }}>
						<Chip
							sx={{
								height: "38px",
								borderRadius: "20px",
								mr: "1rem",
								fontSize: "1rem",
								fontWeight: "bold",
							}}
							avatar={<Avatar
								sx={{
									width: "40px !important",
									height: "40px !important",
									margin: "0 !important"
								}}>
							</Avatar>}
							label={name} />
					</Link>
					<IconButton size="large" color="inherit">
						<Badge badgeContent={0} color="error">
							<MailIcon />
						</Badge>
					</IconButton>
					<IconButton size="large" color="inherit">
						<Badge badgeContent={0} color="error">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton
						onClick={handleOptions}
						size="large"
						color="inherit">
						<ArrowDropDownIcon />
					</IconButton>
				</Box>
				<Box sx={{ height: "auto", display: { xs: "flex", md: "none" } }}>
					<IconButton size="large" onClick={handleMobileMenuOpen}>
						<MoreIcon />
					</IconButton>
				</Box>
			</MuiToolBar>
			{renderMobileMenu}
			{renderOptions}
		</StyledAppBar >
	);
}

export default connector(ToolBar);
