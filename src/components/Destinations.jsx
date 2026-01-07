import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { MapPin } from "lucide-react";

const Destinations = ({ onBackToHero }) => {
    return (
        <section className="destinations-section py-5 text-center">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-badge mb-3">
                        <MapPin size={16} className="text-ocean" />
                        <span>Top Destinations</span>
                    </div>

                    <h2 className="fw-bold mb-3">Explore the World with Tech Genie 🌍</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        Discover trending destinations curated by our AI — from tropical beaches to mountain adventures.
                    </p>

                    <div className="mt-5">
                        <button className="btn-hero" onClick={onBackToHero}>
                            Back to Home
                        </button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Destinations;
