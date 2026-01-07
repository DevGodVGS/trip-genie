import { format } from "date-fns";
import { motion } from "framer-motion";
import { Calendar, Compass, Loader2, MapPin, Plane, Wallet } from "lucide-react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const travelStyles = [
    { value: "adventure", label: "Adventure" },
    { value: "relaxation", label: "Relaxation" },
    { value: "cultural", label: "Cultural" },
    { value: "budget", label: "Budget-Friendly" },
];

const TripForm = ({ onSubmit, isLoading }) => {
    const [formData, setFormData] = useState({
        destination: "",
        startDate: "",
        endDate: "",
        budget: "",
        travelStyle: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.destination && formData.startDate && formData.endDate) {
            onSubmit(formData);
        }
    };

    const isValid = formData.destination && formData.startDate && formData.endDate;

    const today = format(new Date(), "yyyy-MM-dd");

    return (
        <section id="trip-form" className="py-5 bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5"
                >
                    <h2 className="display-5 fw-bold mb-3">
                        Where Will Your Journey Take You?
                    </h2>
                    <p className="text-muted-custom fs-5 mx-auto" style={{ maxWidth: "600px" }}>
                        Fill in your travel details and let our AI create the perfect itinerary for you.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto"
                    style={{ maxWidth: "700px" }}
                >
                    <Form onSubmit={handleSubmit} className="trip-form-card">
                        <Form.Group className="mb-4">
                            <Form.Label className="form-label-icon">
                                <MapPin size={16} className="text-coral" />
                                Destination
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g., Tokyo, Japan"
                                value={formData.destination}
                                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                className="form-control-lg"
                            />
                        </Form.Group>

                        <Row className="mb-4">
                            <Col md={6} className="mb-3 mb-md-0">
                                <Form.Group>
                                    <Form.Label className="form-label-icon">
                                        <Calendar size={16} className="text-ocean" />
                                        Start Date
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={formData.startDate}
                                        min={today}
                                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                        className="form-control-lg"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="form-label-icon">
                                        <Calendar size={16} className="text-ocean" />
                                        End Date
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={formData.endDate}
                                        min={formData.startDate || today}
                                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                        className="form-control-lg"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col md={6} className="mb-3 mb-md-0">
                                <Form.Group>
                                    <Form.Label className="form-label-icon">
                                        <Wallet size={16} className="text-sunset" />
                                        Budget (Optional)
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g., $2,000"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="form-control-lg"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="form-label-icon">
                                        <Compass size={16} className="text-ocean-light" />
                                        Travel Style (Optional)
                                    </Form.Label>
                                    <Form.Select
                                        value={formData.travelStyle}
                                        onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                                        className="form-control-lg"
                                    >
                                        <option value="">Select style</option>
                                        {travelStyles.map((style) => (
                                            <option key={style.value} value={style.value}>
                                                {style.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button
                            type="submit"
                            className="btn-hero w-100 d-flex align-items-center justify-content-center gap-2"
                            disabled={!isValid || isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 size={20} className="spinner-border spinner-border-sm" />
                                    Generating Your Itinerary...
                                </>
                            ) : (
                                <>
                                    <Plane size={20} />
                                    Generate AI Itinerary
                                </>
                            )}
                        </Button>
                    </Form>
                </motion.div>
            </div>
        </section>
    );
};

export default TripForm;
