import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import About from "../components/About";
import Destinations from "../components/Destinations";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ItineraryDisplay from "../components/ItineraryDisplay";
import ItinerarySkeleton from "../components/ItinerarySkeleton";
import TripForm from "../components/TripForm";

const Index = () => {
    const [appState, setAppState] = useState("landing");
    const [tripData, setTripData] = useState(null);

    const pageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
    };

    const navStyle = useMemo(
        () => ({
            backgroundColor: "rgba(253, 252, 250, 0.8)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
        }),
        []
    );

    const mainSectionStyle = useMemo(() => ({ paddingTop: "4rem" }), []);

    const transitionTo = useCallback((nextState, delay = 0) => {
        if (delay) {
            setTimeout(() => setAppState(nextState), delay);
        } else {
            setAppState(nextState);
        }
    }, []);

    const handleGetStarted = useCallback(() => {
        transitionTo("form");
        setTimeout(() => {
            document.getElementById("trip-form")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [transitionTo]);

    const handleFormSubmit = useCallback((data) => {
        setTripData(data);
        transitionTo("loading");
        transitionTo("itinerary", 3000);
    }, [transitionTo]);

    const handleRegenerate = useCallback(() => {
        transitionTo("loading");
        transitionTo("itinerary", 2000);
    }, [transitionTo]);

    const handleNewTrip = useCallback(() => {
        setTripData(null);
        transitionTo("form");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [transitionTo]);

    const handleSeeHowItWorks = () => setAppState("how");
    const handleBackToHero = () => setAppState("landing");

    const handleSeeDestinations = () => setAppState("destinations");
    const handleSeeAbout = () => setAppState("about");

    return (
        <div className="min-vh-100" style={{ backgroundColor: "var(--color-background)" }}>
            <Navbar fixed="top" className="py-2" style={navStyle}>
                <Container>
                    <Navbar.Brand href="#" className="navbar-brand-custom">
                        <div className="brand-icon">W</div>
                        <span className="brand-text">Tech Genie</span>
                    </Navbar.Brand>

                    <Nav className="ms-auto d-none d-md-flex gap-4">
                        <Nav.Link
                            onClick={handleSeeHowItWorks}
                            className={`text-muted-custom ${appState === "how" ? "fw-semibold text-dark" : ""}`}
                            style={{ cursor: "pointer" }}
                        >
                            How it Works
                        </Nav.Link>

                        <Nav.Link
                            onClick={handleSeeDestinations}
                            className={`text-muted-custom ${appState === "destinations" ? "fw-semibold text-dark" : ""}`}
                            style={{ cursor: "pointer" }}
                        >
                            Destinations
                        </Nav.Link>

                        <Nav.Link
                            onClick={handleSeeAbout}
                            className={`text-muted-custom ${appState === "about" ? "fw-semibold text-dark" : ""}`}
                            style={{ cursor: "pointer" }}
                        >
                            About
                        </Nav.Link>
                    </Nav>

                </Container>
            </Navbar>

            <main>
                <AnimatePresence mode="wait">
                    {(appState === "landing" || appState === "form") && (
                        <motion.div
                            key="landing-form"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <HeroSection onGetStarted={handleGetStarted} handleSeeHowItWorks={handleSeeHowItWorks} />
                            {appState === "form" && <TripForm onSubmit={handleFormSubmit} />}
                        </motion.div>
                    )}

                    {appState === "loading" && (
                        <motion.div
                            key="loading"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            style={mainSectionStyle}
                        >
                            <ItinerarySkeleton />
                        </motion.div>
                    )}

                    {appState === "itinerary" && tripData && (
                        <motion.div
                            key="itinerary"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            style={mainSectionStyle}
                        >
                            <ItineraryDisplay
                                tripData={tripData}
                                onRegenerate={handleRegenerate}
                                onNewTrip={handleNewTrip}
                            />
                        </motion.div>
                    )}

                    {appState === "how" && (
                        <motion.div
                            key="how"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <HowItWorks onBackToHero={handleBackToHero} />
                        </motion.div>
                    )}

                    {appState === "destinations" && (
                        <motion.div
                            key="destinations"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Destinations onBackToHero={handleBackToHero} />
                        </motion.div>
                    )}

                    {appState === "about" && (
                        <motion.div
                            key="about"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <About onBackToHero={handleBackToHero} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* <footer className="footer-dark mt-auto">
                <Container>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                        <div className="navbar-brand-custom">
                            <div className="brand-icon">W</div>
                            <span className="brand-text">Tech Genie</span>
                        </div>
                        <p className="small mb-0 opacity-50">
                            © 2026 Tech Genie. Your journey starts here.
                        </p>
                    </div>
                </Container>
            </footer> */}
        </div>
    );
};

export default Index;
