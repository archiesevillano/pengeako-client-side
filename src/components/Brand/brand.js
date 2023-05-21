import "./brand.css";

const Brand = ({ name }) => {
    return (
        <div className="brand">
            <h1 className="cssanimation leRotateIn sequence brand-text">{name}</h1>
            <hr className="animate__bounceInLeft animate__delay_1s" />
            <p className="cssanimation sequence leFadeInLeft">Food and Drinks</p>
        </div>
    );
}

export default Brand;