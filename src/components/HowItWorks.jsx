import { motion } from "framer-motion";
import { Brain, CalendarDays, Map, Plane, Sparkles } from "lucide-react";
import { Button, Col, Container, Row } from "react-bootstrap";

const steps = [
    {
        icon: <Map className="text-ocean" size={28} />,
        title: "Enter Your Destination & Dates",
        desc: "Tell us where you’re headed and when you’re traveling. Our AI takes care of the rest.",
    },
    {
        icon: <Brain className="text-coral" size={28} />,
        title: "AI Curates Your Itinerary",
        desc: "Behind the scenes, Wanderlust AI analyzes millions of data points to craft your perfect trip plan.",
    },
    {
        icon: <CalendarDays className="text-sunset" size={28} />,
        title: "Day-by-Day Breakdown",
        desc: "View a detailed schedule with activities, travel times, and local insights — beautifully organized.",
    },
    {
        icon: <Plane className="text-sky" size={28} />,
        title: "Get Costs & Recommendations",
        desc: "See estimated costs, hidden gems, and travel hacks to make the most of your journey.",
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
};

const HowItWorks = ({ onBackToHero }) => {
    return (
        <section className="how-it-works-section py-5 position-relative overflow-hidden mt-3">
            <Container className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4"
                >
                    <div className="hero-badge mb-3">
                        <Sparkles size={16} className="text-coral" />
                        <span>How It Works</span>
                    </div>

                    <h2 className="fw-bold mb-3">Plan Smarter, Travel Better ✈️</h2>
                    <p className="text-muted-custom mx-auto" style={{ maxWidth: "600px" }}>
                        Our AI-powered system turns your dream destinations into perfectly organized travel plans — effortlessly.
                    </p>
                </motion.div>

                <Row className="g-4 mt-4">
                    {steps.map((step, index) => (
                        <Col md={6} lg={3} key={index}>
                            <motion.div
                                {...fadeUp}
                                transition={{ delay: index * 0.2, duration: 0.7 }}
                                className="how-step glass-card h-100 p-4 d-flex flex-column align-items-center"
                            >
                                <div className="step-icon mb-3">{step.icon}</div>
                                <h5 className="fw-semibold mb-2">{step.title}</h5>
                                <p className="text-muted small">{step.desc}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-5"
                >
                    <Button
                        className="btn-hero d-inline-flex align-items-center gap-2"
                        onClick={onBackToHero}
                    >
                        Back to Home
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
};

export default HowItWorks;
