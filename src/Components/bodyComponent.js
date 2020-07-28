import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ChatTab from "./conversationComponent";

function Body() {
  const handleOpen = (event) => {
    var button = document.getElementById("fab");
    var close = document.getElementById("close-fab");
    var chatbox = document.getElementsByClassName("chatbox")[0];
    document.scrollTop = "40vh";
    chatbox.style.display = "block";
    close.style.display = "block";
    button.style.transition = "0.5s";
    button.style.backgroundColor = "#0c003a";
  };
  const handleClose = (event) => {
    var button = document.getElementById("fab");
    var close = document.getElementById("close-fab");
    var chatbox = document.getElementsByClassName("chatbox")[0];
    button.style.backgroundColor = "#ecf1fb";
    chatbox.style.display = "none";
    close.style.display = "none ";
    button.style.transition = "0.5s";
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row body-row ">
          <div className=" col-md-5 offset-1">
            <div className="row text-content ">Where</div>
            <div className="row text-content ">words</div>
            <div className="row text-content ">fail,</div>
            <div className="row text-content ">Music</div>
            <div className="row text-content ">speaks</div>
          </div>

          <ChatTab />
        </div>
        <div className="row d-flex mt-3">
          <div className="col-1 col-md-1 offset-7 offset-md-10">
            <button
              id="close-fab"
              style={{ display: "none" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="col-1 offset-1 col-md-1 offset-md-0  ">
            <button id="fab" onClick={handleOpen}>
              <img
                src="
              /assets/images/Sparrow Bird.png"
                height="40px"
                width="35px"
              />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;
