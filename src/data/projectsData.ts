export type RawProject = {
  id: string;
  name: string;
  description: string;
  tools: string[];
  skills: string[];
  outcomes: string[];
  stack: string[];
  resources: string[];
  status: string;
};

export const PROJECTS: RawProject[] = [
  {
    id: "CV-P01",
    name: "Video Shopping Mobile Application",
    description:
      "Develop a mobile-first app enabling users to shop by watching short-form product videos, integrating e-commerce capabilities.",
    tools: ["Figma", "Postman", "GitHub", "VS Code"],
    skills: [
      "Mobile development",
      "API integration",
      "Video embedding",
      "UX design",
    ],
    outcomes: [
      "Functional prototype for video-based shopping",
      "Product tagging",
      "Cart features",
    ],
    stack: ["React Native", "Node.js", "MongoDB"],
    resources: [
      "Sample product videos",
      "E-commerce API access",
      "User personas",
    ],
    status: "Empty",
  },
  {
    id: "CV-P02",
    name: "Crowd Shipping Application",
    description:
      "Build a platform to connect individuals needing to ship items with travelers headed in the same direction.",
    tools: ["Trello", "Figma", "Firebase Console"],
    skills: ["Mobile development", "Real-time database handling", "UX mapping"],
    outcomes: [
      "Minimum Viable Product (MVP) for peer-to-peer shipping coordination",
    ],
    stack: ["Flutter", "Firebase", "Firestore"],
    resources: ["Travel route datasets", "User journey flows"],
    status: "Empty",
  },
  {
    id: "CV-P03",
    name: "On-demand Location-based Gig Matching Application for Creators",
    description:
      "A creator-focused gig platform connecting talent with short-term local opportunities using real-time location.",
    tools: ["Figma", "Google Maps API", "GitHub"],
    skills: ["Frontend/backend dev", "Geolocation", "Auth system integration"],
    outcomes: [
      "Functional prototype with real-time gig suggestions based on location",
    ],
    stack: ["React Native", "Express.js", "PostgreSQL"],
    resources: ["Gig provider profiles", "Geolocation APIs", "Market analysis"],
    status: "Empty",
  },
  {
    id: "CV-P04",
    name: "Digital Product Passport Application for Sustainability",
    description:
      "Develop a blockchain-enabled app to track product sustainability parameters like carbon footprint and material sourcing.",
    tools: ["MetaMask", "Hardhat", "Figma", "Ethers.js"],
    skills: ["Smart contract dev", "dApp frontend", "Decentralized file storage"],
    outcomes: [
      "Web app showing sustainable product credentials through immutable passports",
    ],
    stack: ["React", "Solidity", "Ethereum", "IPFS"],
    resources: ["Sample product lifecycle data", "Smart contract templates"],
    status: "Empty",
  },
  {
    id: "CV-P05",
    name:
      "Algorithmic ICD Code Assignment of Diseases and Diagnosis for Health Insurance Claims",
    description:
      "Create a machine learning model that maps diagnosis text to ICD codes for insurance claim automation.",
    tools: ["Jupyter Notebook", "HuggingFace", "VS Code"],
    skills: ["NLP", "Classification models", "REST APIs"],
    outcomes: [
      "API-based service that predicts ICD codes for clinical diagnoses",
    ],
    stack: ["Python", "Scikit-learn", "SpaCy", "Flask"],
    resources: ["ICD dataset", "Annotated medical records", "Domain glossary"],
    status: "Empty",
  },
  {
    id: "CV-P06",
    name:
      "Vehicle Network Tracking in Low-network Zones using Meshatastic",
    description:
      "Develop a communication and tracking system for vehicles in remote areas using the Meshatastic LoRa mesh network.",
    tools: ["VS Code", "GPS modules", "Mesh devices", "Serial Monitor"],
    skills: ["Embedded systems", "Network protocols", "GPS data parsing"],
    outcomes: [
      "Mesh-based tracker prototype with real-time location sharing in no-network zones",
    ],
    stack: ["Python", "Arduino", "Meshatastic API"],
    resources: ["LoRa-compatible devices", "Sample GPS data", "Routing algorithms"],
    status: "Empty",
  },
  {
    id: "CV-P07",
    name:
      "Real-time Forecasting of Electricity Load using Smart Meter Data",
    description:
      "Build a time-series model to predict electricity demand using granular smart meter readings.",
    tools: ["Jupyter", "Excel", "PowerBI"],
    skills: ["Time series forecasting", "Data cleaning", "Dashboarding"],
    outcomes: [
      "Accurate electricity load forecasting tool with interactive visualizations",
    ],
    stack: ["Python", "Pandas", "Prophet", "TensorFlow"],
    resources: [
      "Smart meter datasets",
      "Load profiles",
      "Weather correlation data",
    ],
    status: "Empty",
  },
  {
    id: "CV-P08",
    name:
      "Wearable Pendant for Emergency-response Ambulance Staff for Triage",
    description:
      "Design a pendant device that helps staff scan and transmit basic triage data during emergencies.",
    tools: ["Arduino IDE", "ESP32 boards", "Bluetooth sensors"],
    skills: ["Hardware prototyping", "BLE communication", "Microcontroller programming"],
    outcomes: [
      "Wearable prototype that sends triage signals wirelessly to a base station",
    ],
    stack: ["Arduino", "BLE", "C++", "Firebase"],
    resources: ["Triage protocol templates", "Emergency workflow samples"],
    status: "Empty",
  },
  {
    id: "CV-P09",
    name: "On-demand Waste Collection App for Restaurant Waste",
    description:
      "Mobile platform that connects restaurants with waste recyclers or composters on demand.",
    tools: ["Figma", "Firebase", "Google Maps API"],
    skills: ["App development", "Geo-matching logic", "UI design"],
    outcomes: [
      "Working app prototype with waste pickup scheduling and notifications",
    ],
    stack: ["Flutter", "Node.js", "MongoDB"],
    resources: ["Partner listings", "Waste categories", "Location samples"],
    status: "Empty",
  },
  {
    id: "CV-P10",
    name: "AR Accessory Try-on",
    description:
      "Build an AR app that lets users try on eyewear or accessories virtually using their phone camera.",
    tools: ["Unity Hub", "Blender (for 3D models)", "Android Studio/Xcode"],
    skills: ["AR development", "3D modeling", "Camera overlays"],
    outcomes: [
      "AR-enabled try-on feature for real-time virtual accessory fitting",
    ],
    stack: ["Unity", "ARCore/ARKit", "C#"],
    resources: ["Accessory 3D models", "Phone camera APIs"],
    status: "Empty",
  },
  {
    id: "CV-P11",
    name: "Quality Monitoring System for Bulk Agricultural Procurement",
    description:
      "Create a system using sensors or ML vision models to assess the quality of grains during procurement.",
    tools: ["Raspberry Pi", "USB Cameras", "Scikit-image"],
    skills: ["Computer vision", "Embedded ML", "Edge deployment"],
    outcomes: [
      "Field-ready tool that gives digital quality score during procurement",
    ],
    stack: ["Python", "OpenCV", "TensorFlow Lite"],
    resources: ["Grain quality datasets", "Inspection hardware"],
    status: "Empty",
  },
  {
    id: "CV-P12",
    name: "RFID Based Product Tracking on Assembly Line",
    description:
      "Design a real-time tracking system using RFID to monitor production stages on a manufacturing line.",
    tools: ["RFID Readers", "VS Code", "Flask"],
    skills: ["Hardware integration", "IoT protocols", "Dashboarding"],
    outcomes: [
      "Live dashboard showing product movement and bottlenecks in assembly line",
    ],
    stack: ["Python", "Raspberry Pi", "RFID libraries"],
    resources: ["RFID tags/readers", "Assembly line flow chart"],
    status: "Empty",
  },
  {
    id: "CV-P13",
    name: "Shoot-in-a-box: Product Photography and Styling",
    description:
      "Set up an automated studio kit that assists with fast, styled product photography with AI composition suggestions.",
    tools: ["Camera kit", "Lighting setup", "AI image tools"],
    skills: ["Computer vision", "Image segmentation", "Creative styling"],
    outcomes: [
      "AI-assisted studio box that captures styled images and suggests composition tweaks",
    ],
    stack: ["Python", "OpenCV", "TensorFlow"],
    resources: ["Sample products", "Photography backdrops", "Styling templates"],
    status: "Empty",
  },
  {
    id: "CV-P14",
    name: "Student Proof-of-Work Portfolio Generator",
    description:
      "Develop a tool that allows students to auto-generate an online portfolio using LinkedIn, GitHub, and project uploads, showcasing their skills and proof of work.",
    tools: ["Figma", "GitHub", "Firebase Console", "Resume Parser"],
    skills: ["Web development", "API integration", "Data parsing"],
    outcomes: [
      "A working web app that generates hosted portfolios based on student data, useful for placements and freelancing.",
    ],
    stack: ["React.js", "Node.js", "Firebase", "Puppeteer"],
    resources: ["LinkedIn/GitHub APIs", "UI templates", "Student sample resumes"],
    status: "Empty",
  },
  {
    id: "CV-P15",
    name: "AR Menu Visualizer for Restaurants",
    description:
      "Create a mobile app that lets users visualize food items on their table using AR before placing an order.",
    tools: ["Blender/3D asset library", "Unity Hub", "Android Studio/Xcode"],
    skills: ["AR development", "3D modeling basics", "Mobile app development"],
    outcomes: [
      "A prototype app showcasing real-time 3D food items on a user's table through their smartphone.",
    ],
    stack: ["Unity 3D", "ARCore/ARKit", "Firebase"],
    resources: ["Sample 3D food models", "Restaurant menus"],
    status: "Empty",
  },
  {
    id: "CV-P16",
    name: "Book Your Nearest Photographer/Videographer",
    description:
      "Build a hyperlocal content creator booking app that allows users to discover and book nearby photographers and videographers in real time.",
    tools: ["Figma", "Google Maps API", "Firebase Console"],
    skills: ["Mobile development", "Geolocation APIs", "Backend services"],
    outcomes: [
      "A functional MVP for real-time content creator booking with user ratings, location-based filtering, and booking history.",
    ],
    stack: ["Flutter", "Node.js", "MongoDB"],
    resources: ["Creator profiles", "Location datasets", "Booking workflows"],
    status: "Empty",
  },
  {
    id: "CV-P17",
    name: "Parking Slot Availability App",
    description:
      "Design an app that allows users to check real-time availability of parking slots in nearby areas using sensor or crowd-sourced data.",
    tools: ["Firebase Console", "Google Maps API", "Figma"],
    skills: ["Mobile development", "Real-time data handling", "Map integration"],
    outcomes: [
      "A working prototype that shows users live parking slot availability on a map interface.",
    ],
    stack: ["React Native", "Node.js", "Firebase"],
    resources: ["Real-time parking data (open API or dummy)", "GPS logs"],
    status: "Empty",
  },
  {
    id: "CV-P18",
    name: "Video Analytics Tool",
    description:
      "Create a platform that analyzes uploaded videos and provides metrics such as viewer attention span, object detection, and frame-level activity tagging.",
    tools: ["Jupyter Notebook", "VS Code", "HuggingFace Models"],
    skills: ["Computer vision", "ML", "Backend APIs"],
    outcomes: [
      "An AI-powered analytics engine that gives performance and engagement insights for reels and video content.",
    ],
    stack: ["Python", "OpenCV", "Flask", "TensorFlow"],
    resources: ["Video datasets", "Pre-trained ML models", "Analytics framework"],
    status: "Empty",
  },
  {
    id: "CV-P19",
    name: "Job Sender & Resume Skills Parser",
    description:
      "Build a system that parses resumes and matches them with relevant jobs by extracting key skills, past experience, and job requirements.",
    tools: ["VS Code", "Postman", "GitHub"],
    skills: ["NLP", "REST API development", "Classification"],
    outcomes: [
      "API-based resume-to-job matching engine that can serve as a backend for hiring platforms.",
    ],
    stack: ["Python", "Flask", "SpaCy", "Scikit-learn"],
    resources: ["Resume samples", "Job descriptions", "Skills database"],
    status: "Empty",
  },
  {
    id: "CV-P20",
    name: "Smart Form Autofill Using OCR",
    description:
      "Build a mobile/web tool that scans physical forms or uploaded documents and automatically extracts text to pre-fill digital application forms using OCR. Useful for government, academic, and job application forms.",
    tools: ["VS Code", "Tesseract", "Postman", "GitHub"],
    skills: ["Python programming", "Working with OCR libraries", "Frontend-backend integration"],
    outcomes: [
      "A working prototype where users can upload or scan forms and receive pre-filled digital versions with editable fields.",
    ],
    stack: ["Python", "Tesseract OCR", "Flask", "React"],
    resources: [
      "Sample physical forms (Aadhaar, PAN, application forms)",
      "Scanned document datasets",
      "OCR testing templates",
    ],
    status: "Empty",
  },
  {
    id: "CV-P21",
    name: "Auto Feedback Generator for Teachers/Trainers",
    description:
      "Design an AI-powered tool where educators can input student performance rubrics and generate personalized written feedback using NLP. Saves time and ensures consistency in evaluations.",
    tools: ["Jupyter Notebook", "OpenAI Playground", "VS Code", "React"],
    skills: ["Natural Language Processing", "Prompt engineering", "API integration", "Basic frontend skills"],
    outcomes: [
      "A web app that converts rubric inputs into tailored student feedback messages using AI",
    ],
    stack: ["Python", "OpenAI API", "Streamlit/Flask"],
    resources: [
      "Sample rubrics",
      "Student performance datasets",
      "NLP templates for feedback",
    ],
    status: "Empty",
  },
  {
    id: "CV-P22",
    name: "LRS Master Templates",
    description:
      "Create standardized Learning Record Store (LRS) templates using XAPI to capture and structure learning/activity data across all Vita ecosystem products.",
    tools: ["feturnvita 2.0 Projects", "XAPI", "JSON", "Postman", "LRS (Learning Locker)"],
    skills: ["Instructional design", "xAPI", "Data modeling"],
    outcomes: [
      "Design and document actor-verb-learning object (AVO) structures for all core activities (e.g., 'learner completed quiz').",
      "Link each AVO with Vitacoin triggers (e.g., completion +5 coins) and map them to user progression.",
      "Build the skill-mapping layer: for every learning object, assign skill tags with level identifiers (Skill ID → Level 1, 2, 3).",
      "Implement sample LRS events and simulate them via sandbox tools for validation.",
      "Final output: a comprehensive AVO + skill mapping schema and Vitacoin trigger table.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P23",
    name: "Activity Tracking System (Event + LRS)",
    description:
      "Develop a tracking infrastructure that logs user interactions across platforms using LRS. Enables analytics and reward automation.",
    tools: ["Node.js/Python", "XAPI", "MongoDB", "Webhooks"],
    skills: ["Backend development", "Data logging", "Event-driven design"],
    outcomes: [
      "Implement tracking for all platforms: quizzes, events, mentorships, projects, study groups, etc.",
      "Map each user action to an xAPI statement with an associated skill and reward trigger.",
      "Integrate event emitters into each product's frontend/backend.",
      "Build APIs to receive and process activity logs in a consistent LRS schema.",
      "Perform unit and integration tests to ensure accuracy and completeness of logging.",
      "Final output: a working cross-platform activity tracking and testing framework.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P24",
    name: "Vitacoin Engine (Rewards + Recharges)",
    description:
      "Design a virtual coin system tied to learning activity. Includes logic for earning, redeeming, and recharging.",
    tools: ["Node.js", "MongoDB/Redis", "JWT", "Event bus"],
    skills: ["System design", "Gamification", "Logic programming"],
    outcomes: [
      "Design a complete game economy: coin inflow/outflow rules, value stability strategy, and inflation control.",
      "Define credit/debit logic per activity (e.g., posting a project = -10 coins, completing a quiz = +5 coins).",
      "Create redeem rules (e.g., swap coins for events, certificates, mentorships).",
      "Build a dashboard that tracks: coin inflow/outflow per user and globally, inflation metrics, and velocity of coins.",
      "Add gamified metrics like streaks, leaderboard boosts, and coin multipliers.",
      "Final output: a testable coin economy engine and gamification dashboard.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P25",
    name: "Coachvita (Panel + Payments)",
    description: "Build a mentor panel with session tracking and integrated payment workflow.",
    tools: ["React", "Stripe/Razorpay", "Firebase/Auth", "Chakra UI"],
    skills: ["UI/UX design", "Auth", "Payment integration"],
    outcomes: [
      "Build a mentor dashboard to assign tasks to mentees, track mentee progress, and view payouts/earnings.",
      "Create a rate card system for mentors (hourly, per session, per program).",
      "Implement a smart recommendation system that suggests tasks to mentors based on mentee profile or progress.",
      "Add the ability for mentors to upload quizzes, create/manage structured programs, and evaluate mentees.",
      "Integrate payment workflows (Vitacoin and/or real currency).",
      "Final output: an operational CoachVita portal ready for onboarding mentors.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P26",
    name: "Project (Internvitas) on CV Panel",
    description:
      "Add project creation and tracking within CourseVita. Support portfolios and team collaboration.",
    tools: ["React", "MongoDB REST API", "Tailwind CSS"],
    skills: ["Project management logic", "Frontend integration"],
    outcomes: [
      "Implement task and milestone management with progress updates.",
      "Design a reward mechanism for task completion and milestone achievements.",
      "Introduce skill badges automatically based on role and task contributions.",
      "Create a system where users pay an entry fee in Vitacoins to join a project.",
      "Ensure integration with CV portfolio to reflect live project performance.",
      "Final output: a fully interactive project management system linked to incentives and skill badges.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P27",
    name: "Skill Taxonomy and Automated Mapping",
    description:
      "Construct a skill framework and develop an AI-based mapper for tagging roles, tasks, and content.",
    tools: ["Python", "OpenAI API", "Spacy", "Excel/CSV", "GSheet API"],
    skills: ["Taxonomy design", "NLP/AI basics"],
    outcomes: [
      "Build a pipeline to extract skills from job descriptions using NLP.",
      "Create a multi-level skill ID structure (Primary skill → Sub-skill → Level indicator).",
      "Tag learning objects, tasks, and simulations with appropriate skill IDs.",
      "Store mappings in a queryable database with export options.",
      "Final output: an API skill mapping engine that tags any input (JD, quiz, task) with hierarchical skills.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P28",
    name: "Project Management Discord Agent",
    description:
      "Create a bot to manage tasks and reminders within Discord channels for project teams.",
    tools: ["Discord.js", "Node.js", "MongoDB", "Cronjobs"],
    skills: ["Bot development", "Webhooks", "Scheduling"],
    outcomes: [
      "Develop a Discord bot with task assignment and daily/weekly reminders.",
      "Add attendance logging for booked sessions.",
      "Implement form reminders (e.g., feedback, progress reports) with validation on completion.",
      "Enable session booking directly via Discord with confirmation responses.",
      "Link user IDs in Discord to platform profiles to sync activity and progress.",
      "Final output: an intelligent project assistant for Discord that manages task flow and accountability.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P29",
    name: "Simulation Generation from JD",
    description:
      "Parse job descriptions to generate skill-based simulation tasks. Automate for scale.",
    tools: ["Python", "OpenAI/Gemini API", "LangChain", "PDF parsers"],
    skills: ["NLP", "Prompt engineering", "JD analysis"],
    outcomes: [
      "Build an automated pipeline that parses JD into role, skills, and responsibilities.",
      "Generate task simulations and realistic scenarios based on JD content.",
      "Create quizzes to assess extracted skills.",
      "Deploy in SimVita: a platform module for learners to experience and solve generated job simulations.",
      "Include evaluation logic for simulations and track Vitacoin skill outcomes.",
      "Final output: JD-to-simulation generator integrated with SimVita.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P30",
    name: "Social Network - Feed & Friends",
    description:
      "Build a feed for sharing updates, liking/commenting, and following peers.",
    tools: ["React", "Firebase/Hasura", "GraphQL", "Tailwind"],
    skills: ["Social UX", "Feed algorithms"],
    outcomes: [
      "Build a social layer with an activity feed linked to LRS events.",
      "Enable 1-on-1 friend messaging with screener (e.g. match skill/study domain).",
      "Implement friend suggestions based on shared learning objects and group overlaps.",
      "Support Apaar ID integration for identity management (if available).",
      "Create study buddy recommendations based on performance and interest overlap.",
      "Define user group identity linkages for feed filtering and segmentation.",
      "Final output: a personalized social feed and recommendation engine for peer engagement.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P31",
    name: "Study Groups & Discussion Forum",
    description:
      "Build threaded discussions and real-time group chats for students and teams.",
    tools: ["Firebase/Socket.io", "React", "Markdown support"],
    skills: ["Real-time systems", "Community design"],
    outcomes: [
      "Final output: a high-functionality forum module enabling collaborative, focused study.",
      "Allow tagging of users, upvoting, and discussion moderation.",
      "Build a hybrid discussion system with Reddit-like threading and highlighted replies similar to Google Docs comments.",
      "Launch live study rooms (topic/project wise) that enable synchronous collaboration, threaded discussions, and scheduled group sessions.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P32",
    name: "Event Management System (Vitameet)",
    description:
      "Tool to manage workshops, hackathons, and talks with RSVP, reminders, and feedback.",
    tools: ["React", "Google Calendar API", "Email/SMS APIs"],
    skills: ["Event system logic", "Scheduling"],
    outcomes: [
      "Add registration and onboarding via Vitacoins or payments.",
      "Implement student profiles for event check-in/check-out.",
      "Enable bulk email invites and WhatsApp notification sender.",
      "Support group matching/finder (e.g., random team generator).",
      "Provide polls and live feedback forms.",
      "Final output: a complete event lifecycle system from creation to feedback with multi-channel outreach.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
  {
    id: "CV-P33",
    name: "Data for College Vita, FYC, TTC",
    description:
      "Collect and structure data for College Vita, Find Your Career, and Technology Transfer Compendium.",
    tools: ["Python (pandas, requests)", "GSheets API", "CSV", "Excel"],
    skills: ["Data scraping", "Cleaning", "Structuring"],
    outcomes: [
      "Create data pipelines that pull college info from AISHE/NAAC portals.",
      "Collect non-degree courses from central/state websites.",
      "Compile technology transfer assets from government R&D bodies.",
      "Build refresh automation scripts to scrape, parse, and update structured datasets monthly.",
      "Maintain curated dataset views for different use cases.",
    ],
    stack: ["Empty"],
    resources: ["Empty"],
    status: "Empty",
  },
];

