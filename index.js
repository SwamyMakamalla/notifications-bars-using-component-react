const Notification = (props) => {
  //  Write your code here.
  const { name, className, imgUrl } = props;
  return (
    <div className="sub-container">
      <img className="logo" src={imgUrl} />
      <p className={`button ${className}`}>{name}</p>
    </div>
  );
};

const element = (
  <div className="notification-container">
    <div className="card-container">
      <h1 className="heading">Notifications</h1>
      <div className="button-container">
        <Notification
          name="Information Massage"
          className="blue-button"
          imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification
          name="Success Message"
          className="green-button"
          imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification
          name="Warning Message"
          className="yellow-button"
          imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification
          name="Error Message"
          className="red-button"
          imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
