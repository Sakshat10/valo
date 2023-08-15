import pic from "../assets/hacker1.png";
import "../css/footer.css";

const Footer2 = () => {
  return (
    <div>
      <div className="footer">
        <div className="contact">
          <img src={pic} alt="Hacker" />
          <p className="one">
            Hi, we are always open for cooperation and suggestions,
            Hackoverflow Society is a student-driven technical society recognized
            by Chandigarh University. It was officially inducted as a society by
            the Honble Chancellor of Chandigarh University in 2020
          </p>
        </div>
        <div className="newsletter">
          <h6 style={{ fontSize: "20px",color:"white" }}>NEWSLETTER</h6>
          <p style={{ fontSize: "15px", color: "white" }}>
            enter your email address below to subscribe to our newsletter 
            
          </p>
          <input
            type="email"
            name="email"
            placeholder="user@example.com"
          />
          <button style={{ color: "white", fontSize: "15px" }}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
