import pic from "../assets/Form.jpg";
import "./valorant.css";
const Form=()=>{
    const backgroundImageStyle = {
        backgroundImage: `url(${pic})`, // Convert the imported image to a URL
        backgroundSize: "cover", // Set the background size to cover
        width: "100%", // Set the width to 100%
        height: "100vh",
        backgroundPosition: "center",
        margin: 0, // Remove margin
        padding: 0, // Remove padding
        display: "flex",
        flexDirection: "row",
      };
    return(
    <div>
    <div className="valorant" style={backgroundImageStyle}>
    <div></div>
    <div  id="container">
      <header>Register for the Event</header>
      <form method="post">
        <fieldset>
          <br />
          <input
            type="text"
            name="Name of the participant "
            id="username"
            placeholder="Name of the participant"
            required
            autoFocus
          />
          <br />
          <br />
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="E-mail"
            required
          />
          <br />
          <br />
          <input
            type="number"
            name="Contact Number"
            id="password"
            placeholder="Conatact Number"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="Organisation/ University"
            id="confirm-password"
            placeholder="Organisation/ University"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="Organisation/ University"
            id="confirm-password"
            placeholder="Designation/ Field"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="Organisation/ University"
            id="confirm-password"
            placeholder="Country"
            required
          />
          <br /> <br /> <br />
          <label htmlFor="submit"></label>
          <input type="submit" name="submit" id="submit" value="REGISTER" />
        </fieldset>
      </form>
    </div>
  </div>
    </div>
    );
}

export default Form;