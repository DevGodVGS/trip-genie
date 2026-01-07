import { motion } from "framer-motion";

const ItinerarySkeleton = () => {
    return (
        <section className="itinerary-section fade-in">
            <div className="container">
                {/* Header Skeleton */}
                <div className="text-center mb-5">
                    <div
                        className="skeleton-shimmer mx-auto mb-3"
                        style={{ height: "3rem", width: "20rem" }}
                    />
                    <div
                        className="skeleton-shimmer mx-auto mb-4"
                        style={{ height: "1.5rem", width: "12rem" }}
                    />

                    <div className="d-flex justify-content-center gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="skeleton-shimmer"
                                style={{ height: "2.5rem", width: "7rem" }}
                            />
                        ))}
                    </div>
                </div>

                {/* Summary Skeleton */}
                <div className="mx-auto mb-5" style={{ maxWidth: "800px" }}>
                    <div className="summary-card">
                        <div className="row g-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="col-6 col-md-3 text-center">
                                    <div
                                        className="skeleton-shimmer mx-auto mb-2"
                                        style={{ height: "2rem", width: "4rem" }}
                                    />
                                    <div
                                        className="skeleton-shimmer mx-auto"
                                        style={{ height: "1rem", width: "3rem" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Daily Itinerary Skeletons */}
                <div className="mx-auto" style={{ maxWidth: "800px" }}>
                    {[1, 2, 3].map((day) => (
                        <motion.div
                            key={day}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: day * 0.1 }}
                            className="mb-4 fade-in"
                        >
                            {/* Day Header */}
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div
                                    className="skeleton-shimmer"
                                    style={{
                                        width: "4rem",
                                        height: "4rem",
                                        borderRadius: "0.75rem",
                                    }}
                                />
                                <div>
                                    <div
                                        className="skeleton-shimmer mb-2"
                                        style={{ height: "1.5rem", width: "12rem" }}
                                    />
                                    <div
                                        className="skeleton-shimmer"
                                        style={{ height: "1rem", width: "8rem" }}
                                    />
                                </div>
                            </div>

                            {/* Activity List */}
                            <div className="activity-card ms-0 ms-md-5">
                                {[1, 2, 3, 4].map((activity) => (
                                    <div key={activity} className="p-3 border-bottom">
                                        <div className="d-flex gap-3">
                                            <div
                                                className="skeleton-shimmer"
                                                style={{
                                                    width: "2.5rem",
                                                    height: "2.5rem",
                                                    borderRadius: "0.5rem",
                                                }}
                                            />
                                            <div className="flex-grow-1">
                                                <div
                                                    className="skeleton-shimmer mb-2"
                                                    style={{ height: "1.25rem", width: "10rem" }}
                                                />
                                                <div
                                                    className="skeleton-shimmer mb-2"
                                                    style={{ height: "1rem", width: "100%" }}
                                                />
                                                <div
                                                    className="skeleton-shimmer"
                                                    style={{ height: "0.75rem", width: "6rem" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Overlay Spinner */}
                <motion.div
                    className="loading-overlay fade-in"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="text-center">
                        <div className="loading-spinner mx-auto mb-4">
                            <div className="spinner-ring spinner-ring-outer" />
                            <div className="spinner-ring spinner-ring-inner" />
                        </div>
                        <h3 className="h4 fw-semibold mb-2">
                            Crafting Your Perfect Itinerary
                        </h3>
                        <p className="text-muted-custom">
                            Our AI is planning amazing experiences for you...
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ItinerarySkeleton;
