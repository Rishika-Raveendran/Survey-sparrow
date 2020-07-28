import React, { Component } from "react";
import SendIcon from "@material-ui/icons/Send";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";

import { FormControl, Input } from "@material-ui/core";

class ChatTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      messages: [
        "Hello! I am looking for a couple of life hacks",
        "Is there a simple step to make life better?",
        "Sure there is!",
      ],
    };
    this.message = this.message.bind(this);
  }
  handleStart = () => {
    this.setState({ started: true });
    var footer = document.getElementsByClassName("footer")[0];
    var hed2 = document.getElementById("header2");
    var hed3 = document.getElementById("header3");
    var chatbox = document.getElementsByClassName("chatbox")[0];
    var remove = document.getElementById("start-convo");
    var add = document.getElementsByClassName("send-msg")[0];
    document.getElementById("chat-column").innerHTML = "";
    footer.removeChild(remove);
    footer.appendChild(add);
    add.style.display = "flex";
    chatbox.removeChild(hed2);
    chatbox.removeChild(hed3);
    document.getElementById("chat-column").style.height = "37vh";
  };
  message(index) {
    var new_msg = document.createElement("div");
    if (index < 2) {
      new_msg.classList.add("row", "msg");
    } else {
      new_msg.classList.add("row", "reply");
    }
    new_msg.innerHTML = this.state.messages[index];
    var parent = document.getElementById("msg");
    if (!this.state.started) {
      parent.appendChild(new_msg);
    }
  }

  async componentDidMount() {
    var i = 0;
    var delay = 5000;
    while (i < 2) {
      setTimeout(this.message, delay, i);
      i += 1;
      delay += 2000;
    }

    var response1 = await fetch("https://api.adviceslip.com/advice");
    response1 = await response1.json();
    this.state.messages.push(response1.slip.advice);

    while (i < 4) {
      setTimeout(this.message, delay, i);
      i += 1;
      delay += 2000;
    }
  }

  render() {
    return (
      <div className="col-10 offset-1 col-md-4  offset-md-2 mt-auto chat-container ">
        <div className="container chatbox" style={{ display: "none" }}>
          <div className="row " id="header1">
            <h5 className="col-12 col-md-12 ">Hi there!</h5>
          </div>
          <div className="row  " id="header2">
            <div className="col-12 col-md-12 ">Share your thoughts with us</div>
          </div>
          <div className="row " id="header3">
            <div className="col-12 col-md-12 ">
              Or would you like to ask a question?
            </div>
          </div>
          <div className="row " id="chat-column">
            <div className="container ">
              <div className="col-12 col-md-12 " id="msg"></div>
            </div>
          </div>
          <div className="row ">
            <div className="container " id="chat-footer">
              <div className="col-12 col-md-12 ">
                <img src="assets/images/sparrow favicon.png" />
                We run on surveysparrow
              </div>
            </div>
          </div>
          <div className="row footer ">
            <div className="send-msg " style={{ display: "none" }}>
              <FormControl>
                {" "}
                <Input id="my-input" placeholder="Write a reply" />
              </FormControl>
              <span>
                <SendIcon />
              </span>
            </div>
            <button
              id="start-convo"
              variant="contained"
              onClick={this.handleStart}
            >
              START A NEW CONVERSATION
              <span>
                <MessageSharpIcon />
              </span>
            </button>

            <div className="foot-msg">
              The team typically replies in a few minutes)
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatTab;
