import React from "react";
import FAQs from "@/components/course-overview/faqs";

interface FAQItem {
    question: string;
    answer: string;
}

interface WallQAProps {
    faqs: FAQItem[];
}

const WallQA: React.FC<WallQAProps> = ({ faqs }) => {
    return (
        <>
            {/* Community Q&A Section */}
            <section className="py-16 bg-black relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit text-white">
                            Community Q&A
                        </h2>
                        <p className="text-lg text-gray-400">
                            Common technical questions discussed by our community
                        </p>
                    </div>

                    <div className="bg-[#18181B] rounded-2xl p-8 border border-[#27272A] shadow-lg">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold text-xl">
                                    Q
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    How does Redis help JWT authentication?
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Why is Redis used with JWT tokens?
                                </p>

                                <div className="bg-black/40 rounded-xl p-6 border border-gray-800">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                                                A
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-300">
                                                Redis helps by storing token blacklists and session metadata.
                                                <span className="block mt-2 text-sm text-blue-400 font-medium">
                                                    ✓ Accepted Answer
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400">
                            <span>Asked by Community Member</span>
                            <span>1 Answer</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative z-10 bg-black pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <FAQs faqs={faqs} />
                </div>
            </div>
        </>
    );
};

export default WallQA;
