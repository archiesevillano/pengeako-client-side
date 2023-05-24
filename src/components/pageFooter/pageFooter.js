import "./pageFooter.css";
import Brand from "./../Brand/brand";
import SocialLinks from "../SocialLinks/socialLinks";

const PageFooter = () => {
    return (
        <footer className="page-footer">
            <div className="upper">
                <div className="left">
                    <div className="brand-content">
                        <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/logo.png?alt=media&token=70c25072-3774-4cb3-b5de-4796741a8358"} />
                        <Brand name="pengeako" />
                    </div>
                    <p className="welcome-p">
                        Welcome to our Pengeako Food and Drinks! We're passionate about food, bringing you a delightful culinary journey. Discover diverse recipes, cooking tips, and inspiration for all tastes. With high-quality ingredients and sustainable practices, our expert team creates delicious recipes that tantalize your taste buds. Join us on this gastronomic adventure and let's celebrate the joy of cooking and sharing meals with loved ones.
                    </p>
                </div>
                <div className="right">
                    <div className="contact-details">
                        <p>XV6R+494 Pengeako Food N' Drinks Inc, SM City Baliwag, Doña Remedios Trinidad Highway, Pagala, Baliwag Bulacan, 2006</p>
                        <p>(004) 761 0732</p>
                    </div>
                </div>
            </div>
            <div className="lower">
                <p>Copyright &copy; 2023 - Developed by Joules - Archie - Marc </p>
                <SocialLinks />
            </div>
        </footer>
    );
}

export default PageFooter;