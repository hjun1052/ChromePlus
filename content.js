//this file is for scrollbar customization
const scrollbarStyle = document.createElement("style");
scrollbarStyle.type = "text/css";
scrollbarStyle.innerText = `
	::-webkit-scrollbar {
		width: 12px;
	}
	::-webkit-scrollbar-thumb {
		background-color: #666666;
		border-radius: 10px;
		background-clip: padding-box;
		border: 2px solid transparent;
		box-shadow: inset 0px 0px 5px white;
	}
	::-webkit-scrollbar-thumb:vertical:hover {
		background-color: #888888;
		box-shadow: inset 0px 0px 5px white;
	}
	::-webkit-scrollbar-track {
		background-color: #cccccc;
		border-radius: 10px;
		box-shadow: inset 0px 0px 5px white;
	}
`;

document.head.appendChild(scrollbarStyle);
/* width: scrollbar width(px)
::-webkit-scrollbar-thumb: scrollbar handle
::-webkit-scrollbar-thumb:vertical:hover: scrollbar handle when mouse hover
::-webkit-scrollbar-track: scrollbar track*/


