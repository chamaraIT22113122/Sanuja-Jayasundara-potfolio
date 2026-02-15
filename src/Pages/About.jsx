import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Chip,
  Button,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Close as CloseIcon, ChevronLeft, ChevronRight, ExpandMore, ExpandLess } from "@mui/icons-material";
import {
  School as SchoolIcon,
  EmojiEvents as TrophyIcon,
  VolunteerActivism as VolunteerIcon,
  Public as GlobalIcon,
  SportsBasketball as SportsIcon,
} from "@mui/icons-material";
import { FaSwimmer, FaFutbol } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FadeIn, StaggerChildren } from "../Components/ScrollAnimations";
import ImageGallery from "../Components/ImageGallery";

// Graduation Images
import grad1 from "../Images/About me - Time line/Graduation/gradu-01.png";
import grad2 from "../Images/About me - Time line/Graduation/gradu-02.png";
import grad3 from "../Images/About me - Time line/Graduation/gradu-03.png";
import grad4 from "../Images/About me - Time line/Graduation/gradu-04.png";

// Family Moments
import family1 from "../Images/About me - Time line/Family pics/CHE_6882 (2).jpg";
import family2 from "../Images/About me - Time line/Family pics/CHE_6878 (2).jpg";
import family3 from "../Images/About me - Time line/Family pics/CHE_6874 (2).jpg";
import family4 from "../Images/About me - Time line/Family pics/CHE_6871 (2).jpg";
import family5 from "../Images/About me - Time line/Family pics/CHE_6860 (2).jpg";
import family6 from "../Images/About me - Time line/Family pics/CHE_6849 (2).jpg";
import family7 from "../Images/About me - Time line/Family pics/CHE_6846 (2).jpg";
import family8 from "../Images/About me - Time line/Family pics/CHE_6840 (2).jpg";
import family9 from "../Images/About me - Time line/Family pics/WhatsApp Image 2025-12-29 at 19.00.58.jpeg";
import family10 from "../Images/About me - Time line/Family pics/WhatsApp Image 2025-12-29 at 19.08.01.jpeg";
import family11 from "../Images/About me - Time line/Family pics/WhatsApp Image 2025-12-29 at 19.09.32.jpeg";

// Hiking Adventures - Pidurangala
import pidurangala1 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.42 (1).jpeg";
import pidurangala2 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.42.jpeg";
import pidurangala3 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.43.jpeg";
import pidurangala4 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.43 (1).jpeg";
import pidurangala5 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.43 (2).jpeg";
import pidurangala6 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.44.jpeg";
import pidurangala7 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.14.03.jpeg";
import pidurangala8 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.14.04.jpeg";
import pidurangala9 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.14.05.jpeg";

// Hiking Adventures - Pekoe Trail
import peco1 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.18.jpeg";
import peco2 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.21.jpeg";
import peco3 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.21 (1).jpeg";
import peco4 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.22.jpeg";
import peco5 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.22 (1).jpeg";
import peco6 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.23.jpeg";
import peco7 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.23 (1).jpeg";
import peco8 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.23 (2).jpeg";
import peco9 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.23 (3).jpeg";
import peco10 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.24.jpeg";
import peco11 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.24 (1).jpeg";
import peco12 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.24 (2).jpeg";
import peco13 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.25.jpeg";
import peco14 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.25 (1).jpeg";

// Swimming
import swimming1 from "../Images/Swiming/81922529_10157097459567903_5093151856603955200_n.jpg";

// Community Service Videos
import communityVideo1 from "../Images/Community service/WhatsApp Video 2025-11-28 at 13.09.49.mp4";

// Dance Video
import danceVideo from "../Images/APICTA/WhatsApp Video 2025-11-28 at 13.28.24.mp4";

// Donation - Puhudiula School, Medawachchiya, Anuradhapura
import donation1 from "../Images/donation/WhatsApp Image 2025-12-28 at 17.57.26 (1).jpeg";
import donation2 from "../Images/donation/WhatsApp Image 2025-12-28 at 17.57.26.jpeg";
import donation3 from "../Images/donation/WhatsApp Image 2025-12-28 at 17.57.27 (1).jpeg";

// Travel
import travel1 from "../Images/travel/India.jpg";
import travel2 from "../Images/travel/Maldives.jpg";
import travel3 from "../Images/travel/Dubai.png";
import travel4 from "../Images/travel/Malaysia.png";
import travel5 from "../Images/travel/Singapore.png";
import travel6 from "../Images/travel/Australia.png";
import australiaPopup1 from "../Images/travel/Australia/WhatsApp Image 2025-12-29 at 19.02.17.jpeg";
import dubaiPopup1 from "../Images/travel/Dubai/WhatsApp Image 2025-12-29 at 19.11.30.jpeg";

const graduationImages = [grad1, grad2, grad3, grad4];
const familyImages = [family4, family8, family9, family10, family11];
const pidurangalaImages = [pidurangala1, pidurangala2, pidurangala3, pidurangala4, pidurangala5, pidurangala6, pidurangala7, pidurangala8, pidurangala9];
const pecoImages = [peco1, peco2, peco3, peco4, peco5, peco6, peco7, peco8, peco9, peco10, peco11, peco12, peco13, peco14];
const donationImages = [donation1, donation2, donation3];

/* ---------- Personal Info ---------- */
const personalInfo = {
  name: "Sineth Jayasundera",
  title: "Electrical Engineering Student",
  location: "University Park, PA 16802",
  email: "sineth.jayasundera@gmail.com",
  phone: "518-243-9892",
  bio: "Driven to integrate electrical engineering, IoT, and software development, I bring leadership experience in Model UN operations, community service, and international competitions, complemented by technical work in IoT development, game design, and competitive programming.",
};

/* ---------- Timeline Data ---------- */
const timelineData = [
  {
    year: "2010 - 2016",
    title: "Travilah Elementary School",
    subtitle: "Elementary Education",
    location: "Potomac, MD, USA",
    details: "Established core academic skills and an early interest in problem-solving, technology, and structured learning.",
    icon: "📚",
    color: "#22d3ee",
  },
  {
    year: "2016 - 2019",
    title: "Gateway College Colombo",
    subtitle: "Secondary Education (O/L)",
    location: "Colombo, Sri Lanka",
    details: "Completed O/L examinations with excellent grades. Participated in academic competitions and community service activities.",
    icon: "🎓",
    color: "#22d3ee",
  },
  {
    year: "2019 - 2025",
    title: "Gateway College Colombo",
    subtitle: "Advanced Level (A/L)",
    location: "Colombo, Sri Lanka",
    details: "Completed A/L with distinction in Physical Sciences stream. President of the Interpol General Assembly at Colombo Model United Nations (100+ delegates). Unweighted GPA: 4.0",
    icon: "🏆",
    color: "#22d3ee",
  },
  {
    year: "2025 - Present",
    title: "Pennsylvania State University",
    subtitle: "Bachelor of Science in Electrical Engineering",
    location: "University Park, PA, USA",
    details: "Currently pursuing degree with focus on IoT development and embedded systems. Class of 2029. Active in research and innovation projects.",
    icon: "⚡",
    color: "#22d3ee",
  },
];

/* ---------- Travel Data ---------- */
const travelData = [
  {
    country: "Singapore",
    flag: "🇸🇬",
    image: travel5,
    // No images array = no popup (card not clickable)
    description: "Explored the cutting-edge Smart Nation, experiencing advanced urban technology and innovation hubs.",
  },
  {
    country: "Maldives",
    flag: "🏝️",
    image: travel2,
    // No images array = no popup (card not clickable)
    description: "Enjoyed pristine beaches and crystal-clear waters in this tropical paradise.",
  },
  {
    country: "India",
    flag: "🇮🇳",
    image: travel1,
    // No images array = no popup (card not clickable)
    description: "Discovered rich cultural heritage and diverse technological landscapes.",
  },
  {
    country: "Dubai, UAE",
    flag: "🇦🇪",
    image: travel3,
    images: [dubaiPopup1], // Only popup images (not including main image)
    description: "Witnessed futuristic architecture and world-class innovation in this global hub.",
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    image: travel4,
    // No images array = no popup (card not clickable)
    description: "Experienced the perfect blend of traditional culture and modern development.",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    image: travel6,
    images: [australiaPopup1], // Only popup images (not including main image)
    description: "Explored diverse landscapes, vibrant cities, and unique wildlife in the Land Down Under.",
  },
];

/* ---------- Extracurricular Data ---------- */
const extracurricularData = [
  {
    title: "TEDxYouth Speaker",
    organization: "TEDxYouth@GCNegombo",
    year: "Oct 2023",
    icon: "🎤",
    color: "#22d3ee",
    button: { text: "🎬 Watch TEDx Talk", link: "https://www.youtube.com/watch?v=CyrafePiUFs" },
  },
  {
    title: "MUN Secretary General",
    organization: "Gateway College Colombo",
    year: "2024",
    icon: "🎤",
    color: "#22d3ee",
  },
  {
    title: "ICT Society President",
    organization: "Gateway College Colombo",
    year: "2024",
    icon: "💻",
    color: "#22d3ee",
  },
  {
    title: "Robotics President",
    organization: "Gateway College Colombo",
    year: "2023",
    icon: "🤖",
    color: "#22d3ee",
  },
  {
    title: "House Captain",
    organization: "Gateway College Colombo",
    year: "2023",
    icon: "🏛️",
    color: "#22d3ee",
  },
  {
    title: "Swim Team Captain",
    organization: "Gateway College Colombo",
    year: "2021/2022, 2022/2023",
    icon: "🏊",
    color: "#22d3ee",
  },
];

/* ---------- Community Service Data ---------- */
const communityServiceData = {
  title: "Tech for Community",
  organization: "Community Technology Initiative",
  location: "Colombo & University Park",
  duration: "2020 - Present",
  description: "Led a digital literacy programs for underprivileged communities. Organized both donations and fundraisers for ICT equipment like computers and peripherals. Donated said equipment to multiple schools along with helping students bridge the digital divide via training programs. I also aided directly within these training programs, ensuring students were aware of the basic in computer operation and literacy.",
  achievements: [
    "Trained 30+ students in basic programming and IoT",
    "Established computer lab with donated equipment",
    "Created sustainable mentorship program",
    "Conducted 5+ community workshops",
  ],
};

/* ---------- Hobbies Data ---------- */
const hobbiesData = [
  {
    title: "Game Design & Development",
    description: "Creating interactive games using Unity and Unreal Engine. Passionate about storytelling through gaming mechanics.",
    icon: <IoGameController />,
    color: "#22d3ee",
    tools: ["Unity", "C#", "Blender", "UI/UX Design"],
    achievements: ["Published 2 indie games", "Game Jam Winner 2022"],
  },
  {
    title: "Basketball",
    description: "Avid basketball player. Enjoy the competitive spirit and teamwork involved in the sport.",
    icon: <FaFutbol />,
    color: "#22d3ee",
    tools: ["Team Play", "Strategy", "Fitness"],
    achievements: ["College Team Member", "Inter-college Champion"],
  },
  {
    title: "Competitive Soccer",
    description: "Playing professional-level soccer. Love the passion and energy the game brings.",
    icon: <FaFutbol />,
    color: "#22d3ee",
    tools: ["Field Strategy", "Team Leadership"],
    achievements: ["Division Champions", "MVP Award"],
  },
  {
    title: "Swimming",
    description: "Competitive swimmer with focus on distance swimming. Enjoy the meditation and discipline it requires.",
    icon: <FaSwimmer />,
    color: "#22d3ee",
    tools: ["Endurance Training", "Technique"],
    achievements: ["Varsity Swimmer", "Regional Qualifier"],
  },
];

/* ---------- Section Header Component ---------- */
function SectionHeader({ title, subtitle, icon }) {
  return (
    <Stack alignItems="center" spacing={1} sx={{ textAlign: "center", mb: 5 }}>
      {icon && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "14px",
            background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
            color: "#fff",
            fontSize: 28,
            mb: 1,
          }}
        >
          {icon}
        </Box>
      )}
      <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: 0.5, color: "#22d3ee", fontSize: { xs: "1.75rem", md: "2.2rem" } }}>
        {title}
      </Typography>
      {subtitle && <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 600, fontSize: { xs: "0.9rem", md: "1rem" } }}>{subtitle}</Typography>}
      <Divider sx={{ width: 70, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1 }} />
    </Stack>
  );
}

/* ---------- Travel Card Component ---------- */
function TravelCard({ item }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Only use popup images array (doesn't include main image)
  const popupImages = item.images && item.images.length > 0 ? item.images : null;
  const hasPopup = popupImages !== null;

  const handleOpen = () => {
    if (hasPopup) {
      setOpen(true);
      setCurrentIndex(0);
      // Add a state to history so back button closes modal
      window.history.pushState({ modalOpen: true }, '');
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Replace the current state to remove modal state without navigating
    if (window.history.state?.modalOpen) {
      window.history.replaceState({}, '', window.location.pathname + window.location.search + window.location.hash);
    }
  };

  React.useEffect(() => {
    const handlePopState = (e) => {
      if (open) {
        // If modal is open and user presses back, just close the modal
        setOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [open]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? popupImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === popupImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev(e);
    if (e.key === "ArrowRight") handleNext(e);
    if (e.key === "Escape") handleClose();
  };

  return (
    <>
      <Card
        onClick={handleOpen}
        sx={{
          height: "100%",
          background: "linear-gradient(135deg, #121212 0%, #202020 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#fff",
          borderRadius: 3,
          boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
          overflow: "hidden",
          transition: "transform .25s ease, box-shadow .25s ease",
          cursor: hasPopup ? "pointer" : "default",
          "&:hover": { transform: hasPopup ? "translateY(-6px)" : "none", boxShadow: hasPopup ? "0 18px 40px rgba(34,211,238,0.25)" : "0 10px 28px rgba(0,0,0,0.25)" },
        }}
      >
        <Box sx={{ position: "relative", height: 180 }}>
          <Box component="img" src={item.image} alt={`${item.country} landscape`} sx={{ height: "100%", width: "100%", objectFit: "cover", filter: "brightness(0.85) contrast(1.1)" }} />
          <Box sx={{ position: "absolute", top: 12, left: 12, fontSize: 36 }}>{item.flag}</Box>
        </Box>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff", mb: 1 }}>
            {item.country}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            {item.description}
          </Typography>
        </CardContent>
      </Card>

      {hasPopup && (
        <Modal
          open={open}
          onClose={handleClose}
          onKeyDown={handleKeyDown}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(0,0,0,0.95)",
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              outline: "none",
            }}
            onClick={handleClose}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: { xs: 10, md: -50 },
                right: { xs: 10, md: 0 },
                color: "#fff",
                bgcolor: "rgba(0,0,0,0.7)",
                zIndex: 10,
                "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              component="img"
              src={popupImages[currentIndex]}
              alt={`${item.country} - Image ${currentIndex + 1}`}
              decoding="async"
              onClick={(e) => e.stopPropagation()}
              sx={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
            {popupImages.length > 1 && (
              <>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: "absolute",
                    left: { xs: 10, md: -60 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#fff",
                    bgcolor: "rgba(0,0,0,0.7)",
                    "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
                  }}
                >
                  <ChevronLeft />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: "absolute",
                    right: { xs: 10, md: -60 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#fff",
                    bgcolor: "rgba(0,0,0,0.7)",
                    "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
                  }}
                >
                  <ChevronRight />
                </IconButton>
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: { xs: 10, md: -40 },
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#fff",
                    bgcolor: "rgba(0,0,0,0.7)",
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.9rem",
                  }}
                >
                  {currentIndex + 1} / {popupImages.length}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
}

/* ---------- Hobby Card Component ---------- */
function HobbyCard({ item }) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, #121212 0%, #202020 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#fff",
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(34,211,238,0.25)" },
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
          <Box sx={{ display: "grid", placeItems: "center", width: 48, height: 48, borderRadius: "12px", background: `${item.color}20`, color: item.color, fontSize: 24 }}>
            {item.icon}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff" }}>
            {item.title}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", mb: 2, lineHeight: 1.6 }}>
          {item.description}
        </Typography>
        {item.tools && (
          <Stack direction="row" spacing={0.75} sx={{ mb: 2, flexWrap: "wrap", gap: 0.75 }}>
            {item.tools.map((tool, i) => (
              <Chip key={i} label={tool} size="small" sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff", fontWeight: 600 }} />
            ))}
          </Stack>
        )}
        {item.achievements && (
          <Box>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.65)", fontWeight: 700, mb: 0.5, display: "block" }}>
              Achievements:
            </Typography>
            {item.achievements.map((achievement, i) => (
              <Typography key={i} variant="body2" sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", mb: 0.25 }}>
                ✓ {achievement}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

/* ---------- Hikes Gallery Component with See More ---------- */
function HikesImageGallery({ images }) {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Calculate images to show: 1 row
  // Mobile (xs): 2 columns = 2 images
  // Tablet (sm): 3 columns = 3 images
  // Desktop (md+): 4 columns = 4 images
  const imagesPerRow = isMobile ? 2 : isTablet ? 3 : 4;
  const initialImagesCount = imagesPerRow;
  const displayedImages = showAll ? images : images.slice(0, initialImagesCount);
  const hasMoreImages = images.length > initialImagesCount;

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
    // Add a state to history so back button closes modal
    window.history.pushState({ modalOpen: true }, '');
  };

  const handleClose = () => {
    setOpen(false);
    // Replace the current state to remove modal state without navigating
    if (window.history.state?.modalOpen) {
      window.history.replaceState({}, '', window.location.pathname + window.location.search + window.location.hash);
    }
  };

  React.useEffect(() => {
    const handlePopState = (e) => {
      if (open) {
        // If modal is open and user presses back, just close the modal
        setOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [open]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev(e);
    if (e.key === "ArrowRight") handleNext(e);
    if (e.key === "Escape") handleClose();
  };

  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {displayedImages.map((img, idx) => {
          // Calculate the actual index in the full images array
          const actualIndex = idx;
          return (
            <Grid item xs={6} sm={4} md={3} key={idx}>
              <Box
                onClick={() => handleOpen(actualIndex)}
                sx={{
                  position: "relative",
                  paddingTop: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "2px solid rgba(34,211,238,0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    borderColor: "rgba(34,211,238,0.6)",
                    boxShadow: "0 8px 24px rgba(34,211,238,0.3)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  loading={idx < 4 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={idx === 0 ? "high" : "low"}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "opacity 0.3s ease",
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {!showAll && hasMoreImages && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <IconButton
            onClick={() => setShowAll(true)}
            sx={{
              border: "2px solid rgba(34,211,238,0.4)",
              color: "#22d3ee",
              background: "rgba(34,211,238,0.08)",
              borderRadius: "50%",
              width: 48,
              height: 48,
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "#22d3ee",
                background: "rgba(34,211,238,0.15)",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(34,211,238,0.3)",
              },
            }}
            aria-label="See More"
          >
            <ExpandMore sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      )}

      {showAll && hasMoreImages && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <IconButton
            onClick={() => setShowAll(false)}
            sx={{
              border: "2px solid rgba(34,211,238,0.4)",
              color: "#22d3ee",
              background: "rgba(34,211,238,0.08)",
              borderRadius: "50%",
              width: 48,
              height: 48,
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "#22d3ee",
                background: "rgba(34,211,238,0.15)",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(34,211,238,0.3)",
              },
            }}
            aria-label="See Less"
          >
            <ExpandLess sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0,0,0,0.95)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
          onClick={handleClose}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: { xs: 10, md: -50 },
              right: { xs: 10, md: 0 },
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.7)",
              zIndex: 10,
              "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={images[currentIndex]}
            alt="Full size"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: { xs: 10, md: -60 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.7)",
                  "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: { xs: 10, md: -60 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.7)",
                  "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
                }}
              >
                <ChevronRight />
              </IconButton>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: { xs: 10, md: -40 },
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.7)",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: "0.9rem",
                }}
              >
                {currentIndex + 1} / {images.length}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

/* ---------- Main Component ---------- */
export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ background: "linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #121212 100%)", minHeight: "100vh", py: 8, color: "#fff" }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Stack spacing={4} sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: "#22d3ee",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontFamily: "sans-serif",
            }}
          >
            About Me
          </Typography>
          
          {/* Intro Paragraph */}
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              fontFamily: "sans-serif",
              "& strong": {
                color: "#fff",
                fontWeight: 700,
              },
            }}
          >
            I was born in <strong>Maryland</strong> in 2006 and lived there for 10 years before moving to <strong>Sri Lanka</strong> in 2016. I attended <strong>Gateway College Colombo</strong> until graduation, where I spent a lot of my time in <strong>MUN, ICT,</strong> and <strong>swimming</strong>. I am now enrolled at <strong>Pennsylvania State University</strong>, studying <strong>Electrical Engineering</strong>.
          </Typography>
        </Stack>

        {/* Personal Bio Card */}
        <FadeIn>
          <Card
            sx={{
              mb: 8,
              background: "linear-gradient(145deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(34,211,238,0.3)",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,211,238,0.1)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #22d3ee 0%, #06b6d4 50%, #22d3ee 100%)",
                opacity: 0,
                transition: "opacity 0.4s ease",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at top right, rgba(34,211,238,0.1) 0%, transparent 70%)",
                opacity: 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
              },
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 56px rgba(34,211,238,0.35), 0 0 0 1px rgba(34,211,238,0.2)",
                border: "1px solid rgba(34,211,238,0.5)",
                "&::before": {
                  opacity: 1,
                },
                "&::after": {
                  opacity: 1,
                },
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#22d3ee", mb: 1 }}>
                {personalInfo.name}
              </Typography>
              <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", mb: 3, fontWeight: 600 }}>
                Electrical Engineering Student
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, mb: 3 }}>
                Driven to integrate electrical engineering, IoT, and software development, I bring leadership experience in Model UN operations, community service, and international competitions, complemented by technical work in IoT development, game design, and competitive programming.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Chip
                  label="📍 Niskayuna, NY 12309"
                  sx={{
                    bgcolor: "rgba(34,211,238,0.2)",
                    color: "#fff",
                    border: "1px solid rgba(34,211,238,0.3)",
                    fontWeight: 600,
                  }}
                />
                <Chip
                  label="📧 sineth.jayasundera@gmail.com"
                  sx={{
                    bgcolor: "rgba(34,211,238,0.2)",
                    color: "#fff",
                    border: "1px solid rgba(34,211,238,0.3)",
                    fontWeight: 600,
                  }}
                />
                <Chip
                  label="📱 +1 518-243-9892"
                  sx={{
                    bgcolor: "rgba(34,211,238,0.2)",
                    color: "#fff",
                    border: "1px solid rgba(34,211,238,0.3)",
                    fontWeight: 600,
                  }}
                />
              </Stack>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Personal Interests Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ mb: 3 }}>
            <Chip
              label="Personal Interests"
              sx={{
                bgcolor: "rgba(34,211,238,0.2)",
                color: "#22d3ee",
                fontWeight: 700,
                p: 2,
                border: "1px solid rgba(34,211,238,0.3)",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              "& strong": {
                color: "#fff",
                fontWeight: 700,
              },
            }}
          >
            Outside academics I enjoy <strong>game design</strong> using <strong>Godot and Unity</strong>, playing <strong>soccer and swimming</strong>. I also love <strong>traveling</strong> and have visited countries including <strong>Australia, Brunei, India, Italy, and the United Arab Emirates</strong>.
          </Typography>
        </Box>

        {/* Education Timeline */}
        <Box sx={{ mb: 6 }}>
          <SectionHeader title="Education Timeline" subtitle="My academic journey and achievements" icon={<SchoolIcon />} />
          <Box
            sx={{
              position: "relative",
              maxWidth: "900px",
              mx: "auto",
              "&::before": {
                content: '""',
                position: "absolute",
                left: { xs: "20px", md: "50%" },
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(180deg, #22d3ee 0%, rgba(34,211,238,0.3) 100%)",
                transform: { xs: "none", md: "translateX(-50%)" },
                zIndex: 0,
              },
            }}
          >
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={index} delay={index * 0.15}>
                  <Box
                    sx={{
                      position: "relative",
                      mb: 2.5,
                      display: "flex",
                      flexDirection: { xs: "row", md: isEven ? "row" : "row-reverse" },
                      alignItems: "flex-start",
                      "&:last-child": { mb: 0 },
                    }}
                  >
                    {/* Timeline Node */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: "20px", md: "50%" },
                        top: { xs: "20px", md: "24px" },
                        transform: { xs: "translateX(-50%)", md: "translate(-50%, -50%)" },
                        width: { xs: 36, md: 48 },
                        height: { xs: 36, md: 48 },
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                        border: "3px solid #121212",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: { xs: 16, md: 20 },
                        zIndex: 2,
                        boxShadow: "0 0 16px rgba(34,211,238,0.5), 0 3px 10px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: { xs: "translateX(-50%) scale(1.1)", md: "translate(-50%, -50%) scale(1.1)" },
                          boxShadow: "0 0 24px rgba(34,211,238,0.8), 0 5px 14px rgba(0,0,0,0.4)",
                        },
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Timeline Card */}
                    <Box
                      sx={{
                        width: { xs: "calc(100% - 60px)", md: "calc(50% - 40px)" },
                        ml: { xs: "60px", md: isEven ? 0 : "auto" },
                        mr: { xs: 0, md: isEven ? "auto" : 0 },
                        position: "relative",
                      }}
                    >
                      <Card
                        sx={{
                          background: "linear-gradient(145deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 100%)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(34,211,238,0.3)",
                          borderRadius: 2,
                          p: 2,
                          boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "24px",
                            ...(isEven
                              ? {
                                  right: { xs: "-10px", md: "-10px" },
                                  borderRight: { xs: "10px solid rgba(34,211,238,0.3)", md: "10px solid rgba(34,211,238,0.3)" },
                                }
                              : {
                                  left: { xs: "-10px", md: "-10px" },
                                  borderLeft: { xs: "10px solid rgba(34,211,238,0.3)", md: "10px solid rgba(34,211,238,0.3)" },
                                }),
                            width: 0,
                            height: 0,
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            display: { xs: "block", md: "block" },
                          },
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 12px 36px rgba(34,211,238,0.3)",
                            border: "1px solid #22d3ee",
                            "&::before": {
                              ...(isEven
                                ? { borderRightColor: "#22d3ee" }
                                : { borderLeftColor: "#22d3ee" }),
                            },
                          },
                        }}
                      >
                        <Stack spacing={1}>
                          <Typography variant="subtitle2" sx={{ color: "#22d3ee", fontWeight: 800, fontSize: "0.875rem", letterSpacing: 0.5 }}>
                            {item.year}
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff", fontSize: { xs: "1rem", md: "1.15rem" } }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 500, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                            {item.subtitle}
                          </Typography>
                          {item.location && (
                            <Typography variant="body2" sx={{ color: "#22d3ee", fontWeight: 600, fontSize: { xs: "0.75rem", md: "0.8rem" } }}>
                              📍 {item.location}
                            </Typography>
                          )}
                          <Divider sx={{ bgcolor: "rgba(34,211,238,0.2)", my: 0.5 }} />
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6, fontSize: { xs: "0.8rem", md: "0.85rem" } }}>
                            {item.details}
                          </Typography>
                        </Stack>
                      </Card>
                    </Box>
                  </Box>
                </FadeIn>
              );
            })}
          </Box>
        </Box>

        {/* Graduation Memories */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Graduation 2025" subtitle="Gateway College Colombo Graduation Ceremony" icon={<SchoolIcon />} />
          <FadeIn>
            <ImageGallery images={graduationImages} title="High School Graduation" />
          </FadeIn>
        </Box>

        {/* Interests & Skills */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Interests & Skills" subtitle="" icon={<TrophyIcon />} />
          <StaggerChildren>
            <Grid container spacing={3}>
              {[
                {
                  title: "Electrical Engineering",
                  icon: "⚡",
                  skills: ["Circuit Design", "Power Systems", "Embedded Systems", "Signal Processing"]
                },
                {
                  title: "IoT Development",
                  icon: "🔌",
                  skills: ["Smart Home Systems", "Sensor Integration", "Cloud Connectivity", "Energy Monitoring"]
                },
                {
                  title: "Leadership & MUN",
                  icon: "🧠",
                  skills: ["Model United Nations", "Public Speaking", "Diplomacy", "Team Management"]
                },
                {
                  title: "Game Design",
                  icon: "🎮",
                  skills: ["Game Design", "Godot Engine", "Unity Engine", "Level Design", "Game Mechanics"]
                },
              ].map((item, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card sx={{
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 100%)",
                    border: "1px solid rgba(34,211,238,0.3)",
                    borderRadius: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(34,211,238,0.1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #22d3ee 0%, #06b6d4 50%, #22d3ee 100%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "radial-gradient(circle at center, rgba(34,211,238,0.08) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      pointerEvents: "none",
                    },
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: "0 20px 56px rgba(34,211,238,0.35), 0 0 0 1px rgba(34,211,238,0.2)",
                      border: "1px solid rgba(34,211,238,0.5)",
                      "&::before": {
                        opacity: 1,
                      },
                      "&::after": {
                        opacity: 1,
                      },
                    }
                  }}>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 70,
                      height: 70,
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(6,182,212,0.1) 100%)",
                      color: "#22d3ee",
                      fontSize: 40,
                      mb: 2,
                      border: "1px solid rgba(34,211,238,0.3)",
                      transition: "all 0.3s ease",
                      position: "relative",
                      zIndex: 1,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "12px",
                        background: "radial-gradient(circle at center, rgba(34,211,238,0.2) 0%, transparent 70%)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover::before": {
                        opacity: 1,
                      }
                    }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{
                      fontWeight: 700,
                      color: "#fff",
                      mb: 1.5,
                      fontSize: "1.1rem",
                      letterSpacing: 0.5
                    }}>
                      {item.title}
                    </Typography>
                    <Divider sx={{ 
                      width: 40, 
                      mb: 2, 
                      bgcolor: "#22d3ee",
                      height: 2,
                      borderRadius: 1
                    }} />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        justifyContent: "center",
                      }}
                    >
                      {item.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          sx={{
                            bgcolor: "rgba(18,18,18,0.8)",
                            color: "#fff",
                            fontWeight: 600,
                            border: "1px solid rgba(34,211,238,0.3)",
                            height: 32,
                            fontSize: "0.85rem",
                            borderRadius: "16px",
                            px: 1.5,
                            "&:hover": {
                              border: "1px solid #22d3ee",
                              bgcolor: "rgba(34,211,238,0.15)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 4px 12px rgba(34,211,238,0.2)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </StaggerChildren>
        </Box>


        {/* Extracurricular Activities */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Extracurricular Activities" subtitle="Leadership roles and organizational involvement" icon={<TrophyIcon />} />
          <StaggerChildren>
            <Grid container spacing={3}>
              {extracurricularData.map((activity, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card sx={{ 
                    background: "linear-gradient(135deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 100%)", 
                    border: "1px solid rgba(34,211,238,0.3)", 
                    borderRadius: 3, 
                    p: 3, 
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(34,211,238,0.1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #22d3ee 0%, #06b6d4 50%, #22d3ee 100%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    },
                    "&:hover": { 
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: "0 20px 56px rgba(34,211,238,0.35), 0 0 0 1px rgba(34,211,238,0.2)",
                      border: "1px solid rgba(34,211,238,0.5)",
                      "&::before": {
                        opacity: 1,
                      },
                    } 
                  }}>
                    <Box sx={{ 
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center",
                      width: 70,
                      height: 70,
                      borderRadius: "16px",
                      background: "rgba(34,211,238,0.1)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      fontSize: 36, 
                      mb: 2.5,
                      mx: "auto"
                    }}>
                      {activity.icon}
                    </Box>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 800, 
                      color: "#fff", 
                      mb: 1.5,
                      textAlign: "center",
                      lineHeight: 1.3
                    }}>
                      {activity.title}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: "rgba(255,255,255,0.85)", 
                      mb: 1.5,
                      textAlign: "center",
                      fontSize: "0.95rem"
                    }}>
                      {activity.organization}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: activity.button ? 2.5 : 0 }}>
                      <Chip 
                        label={activity.year} 
                        size="small" 
                        sx={{ 
                          bgcolor: `${activity.color}20`, 
                          color: activity.color,
                          fontWeight: 700,
                          border: `1px solid ${activity.color}40`,
                          px: 1
                        }} 
                      />
                    </Box>
                    {activity.button && (
                      <Box sx={{ mt: "auto", pt: 1 }}>
                        <Button
                          href={activity.button.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          fullWidth
                          size="large"
                          sx={{
                            background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            px: 3,
                            py: 1.25,
                            borderRadius: 2,
                            boxShadow: "0 4px 16px rgba(34,211,238,0.4)",
                            transition: "all 0.3s ease",
                            textTransform: "none",
                            "&:hover": {
                              background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
                              boxShadow: "0 6px 24px rgba(34,211,238,0.6)",
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          {activity.button.text}
                        </Button>
                      </Box>
                    )}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </StaggerChildren>
        </Box>

        {/* Community Service & ICT Equipment Donation Project */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Community Service & ICT Equipment Donation Project" subtitle="Making a positive impact through technology and education" icon={<VolunteerIcon />} />
          <FadeIn>
            {/* Puhudiula School, Medawachchiya, Anuradhapura */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#22d3ee",
                  mb: 3,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  textAlign: "center",
                }}
              >
                Puhudiula School, Medawachchiya, Anuradhapura
              </Typography>
              <ImageGallery images={donationImages} video={danceVideo} title="" />
            </Box>
            
            <Card sx={{ background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 3, boxShadow: "0 8px 24px rgba(0,0,0,0.3)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 12px 32px rgba(34,211,238,0.4)" } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#22d3ee", mb: 2 }}>
                  Tech for Community
                </Typography>
                <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", mb: 1 }}>
                  Community Technology Initiative
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                  <Chip label="📍 Colombo & University Park" sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                  <Chip label="📅 2020 - Present" sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                </Stack>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", mb: 3, lineHeight: 1.8 }}>
                  Led a digital literacy programs for underprivileged communities. Organized both donations and fundraisers for ICT equipment like computers and peripherals. Donated said equipment to multiple schools along with helping students bridge the digital divide via training programs. I also aided directly within these training programs, ensuring students were aware of the basic in computer operation and literacy.
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#22d3ee", fontWeight: 700, mb: 1 }}>
                  Key Achievements:
                </Typography>
                {communityServiceData.achievements.map((achievement, i) => (
                  <Typography key={i} variant="body2" sx={{ color: "rgba(255,255,255,0.8)", mb: 1, pl: 2 }}>
                    ✓ {achievement}
                  </Typography>
                ))}
              </CardContent>
            </Card>
            <Box sx={{ mt: 4 }}>
              <ImageGallery images={[]} video={communityVideo1} title="" />
            </Box>
          </FadeIn>
        </Box>

        {/* Hobbies & Interests */}
        <Box sx={{ mb: 8 }}>
          <Stack alignItems="center" spacing={1} sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                letterSpacing: 0.5,
                color: "#22d3ee",
                fontSize: { xs: "1.75rem", md: "2.2rem" },
                fontFamily: "sans-serif",
              }}
            >
              Hobbies & Interests
            </Typography>
            <Divider sx={{ width: 70, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1 }} />
          </Stack>
          <StaggerChildren>
            <Grid container spacing={3}>
              {[
                {
                  title: "Competitive Swimming",
                  description: "Passionate about competitive swimming with extensive training and participation in various tournaments.",
                  icon: "🏊",
                  achievements: [
                    "School Swim Team Captain (2021/2022, 2022/2023)",
                    "Multiple inter-school competition medals",
                    "Regular training and endurance development"
                  ]
                },
                {
                  title: "Marathon Running",
                  description: "Dedicated long-distance runner with experience in marathons and road races.",
                  icon: "🏃",
                  achievements: [
                    "Completed multiple half-marathons",
                    "Regular participant in Colombo road races",
                    "Focused on endurance and mental resilience"
                  ]
                },
                {
                  title: "PC Gaming & Tech",
                  description: "Avid PC gamer and technology enthusiast, exploring the latest in gaming hardware and software.",
                  icon: "🎮",
                },
                {
                  title: "Game Development",
                  description: "Creating interactive experiences using modern game engines and programming.",
                  icon: "🎯",
                  tags: ["Unity", "Godot", "C#", "GDScript"]
                },
              ].map((hobby, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card sx={{
                    background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                    border: "1px solid rgba(34,211,238,0.3)",
                    borderRadius: 3,
                    p: 3,
                    height: "100%",
                    transition: "transform .25s ease",
                    "&:hover": { transform: "translateY(-6px)" }
                  }}>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      borderRadius: "12px",
                      background: "rgba(34,211,238,0.1)",
                      color: "#22d3ee",
                      fontSize: 32,
                      mb: 2
                    }}>
                      {hobby.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff", mb: 1 }}>
                      {hobby.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mb: 2, lineHeight: 1.6 }}>
                      {hobby.description}
                    </Typography>
                    {hobby.achievements && (
                      <Stack spacing={0.5}>
                        {hobby.achievements.map((achievement, idx) => (
                          <Typography key={idx} variant="body2" sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>
                            • {achievement}
                          </Typography>
                        ))}
                      </Stack>
                    )}
                    {hobby.tags && (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                        {hobby.tags.map((tag, idx) => (
                          <Chip
                            key={idx}
                            label={tag}
                            size="small"
                            sx={{
                              bgcolor: "rgba(18,18,18,0.8)",
                              color: "#fff",
                              fontWeight: 600,
                              border: "1px solid rgba(34,211,238,0.3)",
                              borderRadius: "16px",
                              fontSize: "0.75rem",
                              height: 28,
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </StaggerChildren>

          {/* Hikes */}
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#22d3ee",
                fontSize: { xs: "1.5rem", md: "1.8rem" },
                letterSpacing: 0.5,
                textAlign: "center",
                mb: 4,
              }}
            >
              Hikes
            </Typography>
            <Stack spacing={8}>
              {[
                {
                  title: "Pekoe Trail Hiking, Sri Lanka",
                  description: "Scenic hiking experience on Pekoe trail",
                  images: pecoImages,
                },
                {
                  title: "Pidurangala Hiking, Sri Lanka",
                  description: "Adventure trails in Pidurangala",
                  images: pidurangalaImages,
                },
              ].map((hike, i) => (
                <FadeIn key={i} delay={i * 0.2}>
                   <Box>
                     <Stack spacing={2} sx={{ mb: 3, textAlign: "center", alignItems: "center" }}>
                       <Typography
                         variant="h6"
                         sx={{
                           fontWeight: 700,
                           color: "#fff",
                           fontSize: { xs: "1.2rem", md: "1.4rem" },
                           letterSpacing: 0.5,
                           textAlign: "center",
                           width: "100%",
                         }}
                       >
                         {hike.title}
                       </Typography>
                       <Typography
                         variant="body1"
                         sx={{
                           color: "rgba(255,255,255,0.85)",
                           fontSize: { xs: "0.95rem", md: "1.05rem" },
                           maxWidth: "800px",
                           mx: "auto",
                           textAlign: "center",
                           width: "100%",
                           display: "block",
                         }}
                       >
                         {hike.description}
                       </Typography>
                     </Stack>
                    <Box
                      sx={{
                        background: "linear-gradient(135deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 100%)",
                        border: "1px solid rgba(34,211,238,0.2)",
                        borderRadius: 3,
                        p: { xs: 2, md: 4 },
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                      }}
                    >
                      <HikesImageGallery images={hike.images} />
                    </Box>
                  </Box>
                </FadeIn>
              ))}
            </Stack>
          </Box>

          {/* International Travel */}
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#22d3ee",
                fontSize: { xs: "1.5rem", md: "1.8rem" },
                letterSpacing: 0.5,
                textAlign: "center",
                mb: 4,
              }}
            >
              International Travel
            </Typography>
            <StaggerChildren>
              <Grid container spacing={3} justifyContent="center">
                {travelData.map((travel, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <TravelCard item={travel} />
                  </Grid>
                ))}
              </Grid>
            </StaggerChildren>
          </Box>
        </Box>

        {/* Family Moments */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Family Moments" subtitle="Cherished memories with loved ones" icon={<TrophyIcon />} />
          <FadeIn>
            <ImageGallery images={familyImages} title="" />
          </FadeIn>
        </Box>
      </Container>
    </Box>
  );
}
