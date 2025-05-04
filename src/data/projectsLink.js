

const projectsLink = [
  {
    title: "Pickup Soccer App",
    image: "/screenshots/pickup_soccer.png",
    description: "A full-stack web app for finding and joining local pickup soccer games. Users can create games with a valid address, see them on a map, and RSVP in real-time.",
    liveLink: "https://pickup-soccer-app.vercel.app",
    frontendRepo: "https://github.com/your-username/pickup-soccer-app-frontend",
    backendRepo: "https://github.com/your-username/pickup-soccer-app-backend",
    tools: ["React", "Node.js", "Express", "PostgreSQL", "Mapbox API", "JWT Auth", "Render", ],
    features: [
      "User signup/login with JWT authentication",
      "Mapbox integration for address validation and map display",
      "Create and RSVP to games",
      "RESTful API backend with PostgreSQL",
      "Frontend hosted backend and frontend on Render"
    ]
  },
  {
    title: "Road Side Buddy",
    image: "/screenshots/roadsidebuddy.png",
    description: "A roadside assistance platform that lets users request services like tire change, battery jump, or emergency SOS. Admin can monitor requests in real-time.",
    liveLink: "https://roadsidebuddy.vercel.app",
    repo: "https://github.com/your-username/road-side-buddy",
    tools: ["Flask", "Firebase", "ClickSend SMS API", "Mapbox", "PostgreSQL", "Bootstrap"],
    features: [
      "Firebase authentication",
      "Admin dashboard to monitor requests",
      "Interactive map to track request location",
      "Fully responsive UI",
    ]
  },
  {
    title: "Jobly",
    image: "/screenshots/jobly.png",
    description: "A job board web app where users can search and apply for jobs. Features user authentication, company and job listings, and application tracking.",
    liveLink: "https://jobly-frontend-l38l.onrender.com", 
    frontendRepo: "https://github.com/imranNBZ/Jobly-frontend/tree/main",
    backendRepo: "https://github.com/imranNBZ/jobly-backend/tree/main",
    tools: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Axios", "Bootstrap"],
    features: [
      "User signup, login, and profile editing with JWT authentication",
      "Search and filter job listings",
      "View company details and job openings",
      "Apply to jobs with one click",
      "Responsive UI built with React and Bootstrap",
      "RESTful backend API using Express and PostgreSQL"
    ]
  },
  {
    title: "Warbler (Twitter Clone)",
    image: "/screenshots/warbler.png",
    description: "A microblogging app modeled after Twitter. Users can post messages, follow/unfollow others, and like messages. Built with Flask and SQLAlchemy.",
    liveLink: "https://warbler-lgo3.onrender.com", 
    repo: "https://github.com/nbzImran/Warbler/tree/main",
    tools: ["Flask", "SQLAlchemy", "Jinja2", "WTForms", "Render", "PostgreSQL"],
    features: [
      "User registration and authentication",
      "Post messages (tweets) and view others' posts",
      "Follow and unfollow users",
      "Like and unlike messages",
      "Bootstrap-based clean UI",
      "Deployed to Render"
    ]
  }
  
];

export default projectsLink;
