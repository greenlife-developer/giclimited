import "./messages.css";

const LeaveAMessage = () => {
  return (
    <div className="leave_a_message_component">
      <h1>Leave us a message</h1>
      <div className="line"></div>

      <div className="message_container">
        <form action="">
          <div className="form_field">
            <div className="">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="form_field">
            <div className="">
              <input type="email" placeholder="Email" />
            </div>
            <div className="">
              <input type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="form_field">
            <div className="">
              <textarea placeholder="Type your messge..." name="" id=""></textarea>
            </div>
          </div>
          <div className="form_field">
            <div className="">
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveAMessage;
