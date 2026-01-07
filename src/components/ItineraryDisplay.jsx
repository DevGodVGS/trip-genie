import { differenceInDays, format, parseISO } from "date-fns";
import {
    Camera,
    Clock,
    Download,
    Lightbulb,
    MapPin,
    RefreshCw,
    Share2,
    Utensils
} from "lucide-react";
import { Button, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const generateMockItinerary = (tripData) => {
    const startDate = parseISO(tripData.startDate);
    const endDate = parseISO(tripData.endDate);
    const days = differenceInDays(endDate, startDate) + 1;

    const themes = [
        "Arrival & First Impressions",
        "Cultural Deep Dive",
        "Local Flavors & Hidden Gems",
        "Nature & Adventure",
        "Shopping & Leisure",
        "Departure Day",
    ];

    const mockActivities = {
        "Arrival & First Impressions": [
            { time: "10:00", title: "Airport Arrival", description: "Clear customs and take express train to city center", location: "International Airport", type: "transport" },
            { time: "13:00", title: "Hotel Check-in & Lunch", description: "Settle in and enjoy local cuisine at a nearby restaurant", location: "City Center", type: "food" },
            { time: "15:00", title: "Neighborhood Walk", description: "Explore the surrounding area and get oriented", location: "Downtown District", type: "leisure" },
            { time: "19:00", title: "Welcome Dinner", description: "Traditional dinner at a highly-rated local restaurant", location: "Old Town", type: "food" },
        ],
        "Cultural Deep Dive": [
            { time: "09:00", title: "Historic Temple Visit", description: "Explore ancient temples and learn about local history", location: "Temple District", type: "attraction" },
            { time: "12:00", title: "Street Food Tour", description: "Sample authentic street food with a local guide", location: "Market Area", type: "food" },
            { time: "14:00", title: "Museum Exploration", description: "Visit the national museum for cultural insights", location: "Museum Quarter", type: "attraction" },
            { time: "18:00", title: "Sunset Viewpoint", description: "Watch sunset from a famous observation deck", location: "City Tower", type: "attraction" },
        ],
        "Local Flavors & Hidden Gems": [
            { time: "08:00", title: "Morning Market", description: "Experience the bustling morning market with locals", location: "Central Market", type: "attraction" },
            { time: "10:30", title: "Cooking Class", description: "Learn to make traditional dishes", location: "Culinary School", type: "food" },
            { time: "14:00", title: "Secret Garden", description: "Discover a hidden garden known only to locals", location: "Hidden Quarter", type: "leisure" },
            { time: "20:00", title: "Night Food Scene", description: "Experience the famous night food stalls", location: "Night Market", type: "food" },
        ],
    };

    return Array.from({ length: Math.min(days, 6) }, (_, i) => {
        const theme = themes[i % themes.length];
        return {
            day: i + 1,
            date: new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000),
            theme,
            activities: mockActivities[theme] || mockActivities["Cultural Deep Dive"],
            estimatedCost: Math.floor(Math.random() * 100) + 80,
            tips: [
                "Book tickets in advance for popular attractions",
                "Carry local currency for street vendors",
                "Download offline maps for this area",
            ].slice(0, Math.floor(Math.random() * 2) + 1),
        };
    });
};

const getActivityIcon = (type) => {
    switch (type) {
        case "attraction": return Camera;
        case "food": return Utensils;
        case "transport": return MapPin;
        case "leisure": return Clock;
        default: return MapPin;
    }
};

const getActivityIconClass = (type) => {
    switch (type) {
        case "attraction": return "activity-icon-attraction";
        case "food": return "activity-icon-food";
        case "transport": return "activity-icon-transport";
        case "leisure": return "activity-icon-leisure";
        default: return "activity-icon-attraction";
    }
};

const ItineraryDisplay = ({ tripData, onRegenerate, onNewTrip }) => {
    const itinerary = generateMockItinerary(tripData);
    const totalCost = itinerary.reduce((sum, day) => sum + day.estimatedCost, 0);

    return (
        <section className="itinerary-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-5"
                >
                    <h2 className="display-5 fw-bold mb-3">
                        Your {tripData.destination} Adventure
                    </h2>
                    <p className="text-muted-custom fs-5">
                        {format(parseISO(tripData.startDate), "MMM d")} - {format(parseISO(tripData.endDate), "MMM d, yyyy")} · {itinerary.length} days
                    </p>

                    <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                        <Button className="btn-ocean d-inline-flex align-items-center gap-2" onClick={onRegenerate}>
                            <RefreshCw size={16} />
                            Regenerate
                        </Button>
                        <Button variant="outline-secondary" className="d-inline-flex align-items-center gap-2">
                            <Download size={16} />
                            Export PDF
                        </Button>
                        <Button variant="outline-secondary" className="d-inline-flex align-items-center gap-2">
                            <Share2 size={16} />
                            Share
                        </Button>
                        <Button variant="secondary" onClick={onNewTrip}>
                            Plan New Trip
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto mb-5"
                    style={{ maxWidth: "800px" }}
                >
                    <div className="summary-card">
                        <Row className="text-center g-4">
                            <Col xs={6} md={3}>
                                <div className="fs-2 fw-bold text-ocean">{itinerary.length}</div>
                                <div className="small text-muted-custom">Days</div>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className="fs-2 fw-bold text-coral">
                                    {itinerary.reduce((sum, day) => sum + day.activities.length, 0)}
                                </div>
                                <div className="small text-muted-custom">Activities</div>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className="fs-2 fw-bold text-sunset">${totalCost}</div>
                                <div className="small text-muted-custom">Est. Cost</div>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className="fs-2 fw-bold text-ocean-light text-capitalize">
                                    {tripData.travelStyle || "Mixed"}
                                </div>
                                <div className="small text-muted-custom">Style</div>
                            </Col>
                        </Row>
                    </div>
                </motion.div>

                <div className="mx-auto" style={{ maxWidth: "800px" }}>
                    {itinerary.map((day, dayIndex) => (
                        <motion.div
                            key={day.day}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + dayIndex * 0.1 }}
                            className="mb-4"
                        >
                            {/* Day Header */}
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="day-marker">
                                    <span className="day-marker-label">Day</span>
                                    <span className="day-marker-number">{day.day}</span>
                                </div>
                                <div>
                                    <h3 className="h5 mb-1 fw-semibold">{day.theme}</h3>
                                    <p className="small text-muted-custom mb-0">
                                        {format(day.date, "EEEE, MMMM d")} · Est. ${day.estimatedCost}
                                    </p>
                                </div>
                            </div>

                            {/* Activities Card */}
                            <div className="activity-card ms-0 ms-md-5">
                                {day.activities.map((activity, actIndex) => {
                                    const Icon = getActivityIcon(activity.type);
                                    return (
                                        <div key={actIndex} className="activity-item">
                                            <div className="d-flex gap-3">
                                                <div className={`activity-icon ${getActivityIconClass(activity.type)}`}>
                                                    <Icon size={20} />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div className="d-flex justify-content-between align-items-start gap-2">
                                                        <div>
                                                            <h4 className="h6 mb-1 fw-medium">{activity.title}</h4>
                                                            <p className="small text-muted-custom mb-2">
                                                                {activity.description}
                                                            </p>
                                                        </div>
                                                        <span className="small fw-medium text-muted-custom text-nowrap">
                                                            {activity.time}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-1 small text-muted-custom">
                                                        <MapPin size={12} />
                                                        {activity.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {day.tips.length > 0 && (
                                    <div className="tip-box">
                                        <div className="d-flex align-items-start gap-2">
                                            <Lightbulb size={16} className="text-sunset flex-shrink-0 mt-1" />
                                            <div className="small">
                                                <span className="fw-medium">Tip:</span> {day.tips[0]}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItineraryDisplay;
