import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { Sparkles } from "lucide-react";

const About = ({ onBackToHero }) => {
    return (
        <section className="about-section py-5 text-center">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-badge mb-3">
                        <Sparkles size={16} className="text-coral" />
                        <span>About Us</span>
                    </div>

                    <h2 className="fw-bold mb-3">Your AI Travel Companion 🧭</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        Tech Genie was built to simplify travel planning with AI. We combine data, creativity, and machine learning to give you unforgettable itineraries.
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

export default About;
