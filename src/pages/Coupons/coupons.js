import CouponCard from "../../components/CouponCard/couponCard";
import "./coupons.css";

const Coupons = () => {
    return (
        <div className="coupon-page">
            <h1>My Coupons</h1>
            <div className="coupon-list">
                <CouponCard />
                <CouponCard />
                <CouponCard />
                <CouponCard />
                <CouponCard />
                <CouponCard />
                <CouponCard />
                <CouponCard />
                <CouponCard />
                <CouponCard />
            </div>
        </div>
    );
}

export default Coupons;