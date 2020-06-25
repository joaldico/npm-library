import React from "react";
import logo from "./logo.png";
import "./App.css";
import {
	Button,
	Notification,
	Paragraph,
	Link,
	Checkbox,
	Input,
	Select
} from "plugbox-ui";

class App extends React.Component {
	state = {
		open: false,
		checked: true,
    input: "BUCARES",
    select: ""
	};

	handleClick = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleClickCheckbox = () => {
		this.setState(prevstate => ({ checked: !prevstate.checked }));
	};
  
	handleClickInput = item => {
		const { value } = item.target;
		this.setState({ input: value });
  };
  
  handleClickSelect = item => {
		const { value } = item.target;
		this.setState({ select: value });
	};

	render() {
		return (
			<div className="App">
				{/*HEADER */}
				<div>
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1>Plugbox-ui utility library</h1>
						<span className="App-link">BUCARES TEAM</span>
					</header>
				</div>
				{/*HEADER */}
				<div className="Container-buttons Container">
					<h1>Component: Button</h1>
					<div className="Container-buttons">
						<Button
							text={"Click here to go to: plugbox-ui LIBRARY"}
							size={"small"}
							disabled={false}
							onClick={() => {
								console.log("go to: plugbox-ui LIBRARY");
							}}
							variant={"red"}
						/>
					</div>
					<div className="Container-buttons">
						<Button
							text={"Click here to go to: plugbox-ui LIBRARY"}
							size={"large"}
							disabled={true}
							onClick={() => {
								console.log("go to: plugbox-ui LIBRARY");
							}}
						/>
					</div>
				</div>
				<div className="Container-buttons Container">
					<h1>Component: Notification</h1>
					<Button
						text={"Click here to see the notification"}
						size={"small"}
						disabled={false}
						onClick={this.handleClick}
					/>
					<Notification
						type={"info"}
						message={"This is a info message!"}
						open={this.state.open}
						handleClose={this.handleClose}
						anchor={{ vertical: "bottom", horizontal: "right" }}
						hideDuration={600}
					/>
				</div>
				<div className="Container-buttons Container">
					<h1>Component: Paragraph</h1>
					<div className="Container-buttons">
						<Paragraph
							text={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							}
							align={"center"}
							color={"default"}
							variant={"h6"}
							textFormat={"underlined"}
							noWrap={false}
						/>
					</div>
				</div>
				<div className="Container-buttons Container">
					<h1>Component: Link</h1>
					<Link
						text={"This is a link"}
						color={"secondary"}
						underline={"always"}
						variant={"h4"}
						href={"#"}
						onClick={() => {
							alert("I'm a button.");
						}}
					/>
				</div>
				<div className="Container-buttons Container">
					<h1>Component: Checkbox</h1>
					<div className="Container-buttons">
						<Checkbox
							checked={this.state.checked}
							onChange={this.handleClickCheckbox}
							disabled={false}
							label={"This is a checkbox"}
							color={"green"}
							labelPlacement={"end"}
						/>
					</div>
				</div>
				<div className="Container-buttons Container">
					<h1>Component: Input</h1>
					<div className="Container-buttons">
						<Input
							label={"This is a input"}
							value={this.state.input}
							onChange={this.handleClickInput}
							color={"amber"}
              endAdornment={"$"}
              required={true}
						/>
					</div>
				</div>
				<div className="Container-buttons Container">
					<h1>Component: Select</h1>
					<div className="Container-buttons">
						<Select
							id={"id"}
							name={"select"}
							label={"This is a select!"}
              required={true}
              color={"red"}
              value={this.state.select}
              onChange={this.handleClickSelect}
						>
							<option value="">Select an element</option>
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</div>
				</div>
				{/*FOOTER */}
				<div>
					<header className="App-footer">
						<span className="App-link">BUCARES TEAM</span>
					</header>
				</div>
				{/*FOOTER */}
			</div>
		);
	}
}

export default App;
