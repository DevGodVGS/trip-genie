import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { useMemo } from "react";
import { Button } from "react-bootstrap";
import bg from "../assets/bg.jpg";

const HeroSection = ({ onGetStarted, handleSeeHowItWorks }) => {
    const fadeUp = useMemo(
        () => ({
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
        }),
        []
    );

    const floatVariants = useMemo(
        () => ({
            animate: (delay) => ({
                y: [0, -12, 0],
                transition: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay },
            }),
        }),
        []
    );

    const stats = useMemo(
        () => [
            { value: "10K+", label: "Trips Planned" },
            { value: "150+", label: "Destinations" },
            { value: "4.9", label: "User Rating" },
        ],
        []
    );

    const floatingIcons = useMemo(
        () => [
            { Icon: MapPin, color: "text-coral", style: { top: "5rem", left: "5rem" }, delay: 0 },
            { Icon: Calendar, color: "text-ocean", style: { top: "10rem", right: "8rem" }, delay: 0.5 },
            { Icon: Sparkles, color: "text-sunset", style: { bottom: "10rem", left: "8rem" }, delay: 1 },
        ],
        []
    );

    return (
        <section className="hero-section position-relative overflow-hidden">
            <div className="hero-background">
                <img
                    src={bg}
                    alt="Beautiful coastal destination"
                    loading="eager"
                    decoding="async"
                />
                <div className="hero-overlay" />
            </div>

            {floatingIcons.map(({ Icon, color, style, delay }, idx) => (
                <motion.div
                    key={idx}
                    className="floating-icon glass-card d-none d-md-block"
                    style={style}
                    variants={floatVariants}
                    animate="animate"
                    custom={delay}
                >
                    <Icon size={24} className={color} />
                </motion.div>
            ))}

            <div className="hero-content container text-center position-relative">
                <motion.div {...fadeUp}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="hero-badge mb-4"
                    >
                        <Sparkles size={16} className="text-coral" />
                        <span>AI-Powered Travel Planning</span>
                    </motion.div>

                    <h1 className="hero-title fw-bold">
                        Your Dream Journey,{" "}
                        <span className="position-relative d-inline-block">
                            <span className="position-relative" style={{ zIndex: 1 }}>
                                Perfectly Planned
                            </span>
                            <motion.span
                                className="title-underline"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                style={{ transformOrigin: "left" }}
                            />
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="hero-subtitle mx-auto"
                    >
                        Tell us where and when you want to travel. Our AI crafts a
                        personalized day-by-day itinerary with activities, costs, and insider tips.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="d-flex flex-column flex-sm-row gap-3 justify-content-center"
                    >
                        <Button
                            className="btn-hero d-inline-flex align-items-center gap-2"
                            onClick={onGetStarted}
                        >
                            Plan Your Trip <ArrowRight size={20} />
                        </Button>
                        <Button
                            variant="outline-light"
                            className="btn-hero-outline"
                            onClick={handleSeeHowItWorks}
                        >
                            See How It Works
                        </Button>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="mt-5 pt-4"
                    >
                        <div
                            className="row justify-content-center g-4 mx-auto"
                            style={{ maxWidth: "500px" }}
                        >
                            {stats.map(({ value, label }) => (
                                <div key={label} className="col-4 text-center">
                                    <div className="stat-value">{value}</div>
                                    <div className="stat-label">{label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="position-absolute start-50 translate-middle-x"
                style={{ bottom: "2rem" }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="scroll-indicator">
                    <div className="scroll-indicator-dot" />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
