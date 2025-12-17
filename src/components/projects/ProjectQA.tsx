import React from "react";
import FAQs from "@/components/course-overview/faqs";

interface FAQItem {
    question: string;
    answer: string;
}

interface ProjectQAProps {
    faqs: FAQItem[];
}

const ProjectQA: React.FC<ProjectQAProps> = ({ faqs }) => {
    return (
        <>
            {/* Community Q&A Section */}
            <div className="max-w-4xl mx-auto my-16 px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit text-black dark:text-white">
                        Community Q&A
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Common technical questions discussed by our community
                    </p>
                </div>

                <div className="bg-white dark:bg-[#18181B] rounded-2xl p-8 border border-[#E4E4E7] dark:border-[#27272A] shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-xl">
                                Q
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                                How does Redis help JWT authentication?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Why is Redis used with JWT tokens?
                            </p>

                            <div className="bg-gray-50 dark:bg-black/40 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-sm">
                                            A
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Redis helps by storing token blacklists and session metadata.
                                            <span className="block mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
                                                ✓ Accepted Answer
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>Asked by Community Member</span>
                        <span>1 Answer</span>
                    </div>
                </div>
            </div>

            <FAQs faqs={faqs} />
        </>
    );
};

export default ProjectQA;
