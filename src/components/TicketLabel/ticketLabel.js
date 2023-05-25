import "./ticketLabel.css";

const TicketLabel = ({ label }) => {
    return (
        <span className="ticket-label">{label}</span>
    );
}

export default TicketLabel;