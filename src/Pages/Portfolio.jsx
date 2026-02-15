import React, { useState, useEffect } from "react";
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
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import {
  WorkOutline,
  CheckCircle,
  Code,
  Description,
  ExpandMore,
  Download,
  Apps,
  Work,
  Web,
  EmojiEvents,
  School as SchoolIcon,
  Language as LanguageIcon,
  Sports as SportsIcon,
  Public as GlobalIcon,
  Star as StarIcon,
  WorkspacePremium as AwardIcon,
} from "@mui/icons-material";
import { FadeIn, SlideInLeft, SlideInRight, StaggerChildren } from "../Components/ScrollAnimations";
import ImageGallery from "../Components/ImageGallery";
import cv from "../Files/Sanuja Jayasundara.pdf";

// APICTA Images
import apicta1 from "../Images/APICTA/WhatsApp Image 2025-11-28 at 09.53.52 (1).jpeg";
import apicta3 from "../Images/APICTA/WhatsApp Image 2025-11-28 at 09.53.53 (1).jpeg";
import apicta4 from "../Images/APICTA/WhatsApp Image 2025-11-28 at 09.53.53.jpeg";
import apicta5 from "../Images/APICTA/WhatsApp Image 2025-11-28 at 09.53.54 (1).jpeg";
import apicta6 from "../Images/APICTA/WhatsApp Image 2025-11-28 at 09.53.54.jpeg";
import apicta8 from "../Images/APICTA/WhatsApp Image 2025-11-28 at 09.53.55.jpeg";
import apictaVideo from "../Images/APICTA/WhatsApp Video 2025-11-28 at 13.28.24.mp4";

// MUN Images
import mun1 from "../Images/MUN/WhatsApp Image 2025-11-28 at 13.31.30.jpeg";
import mun2 from "../Images/MUN/WhatsApp Image 2025-11-28 at 13.31.31 (1).jpeg";
import mun3 from "../Images/MUN/WhatsApp Image 2025-11-28 at 13.31.31 (2).jpeg";
import mun4 from "../Images/MUN/WhatsApp Image 2025-11-28 at 13.31.31.jpeg";
import mun5 from "../Images/MUN/WhatsApp Image 2025-12-29 at 22.44.44.jpeg";
import mun6 from "../Images/MUN/WhatsApp Image 2025-12-29 at 22.46.22 (1).jpeg";
import mun7 from "../Images/MUN/WhatsApp Image 2025-12-29 at 22.46.22.jpeg";
import mun8 from "../Images/MUN/WhatsApp Image 2025-12-29 at 22.46.23 (1).jpeg";
import mun9 from "../Images/MUN/WhatsApp Image 2025-12-29 at 22.46.23 (2).jpeg";
import mun10 from "../Images/MUN/WhatsApp Image 2025-12-29 at 22.46.23 (3).jpeg";
import mun11 from "../Images/MUN/WhatsApp Image 2025-12-29 at 22.46.23.jpeg";

// Road Race Images
import race1 from "../Images/Road Race/WhatsApp Image 2025-11-28 at 09.56.49 (1).jpeg";
import race2 from "../Images/Road Race/WhatsApp Image 2025-11-28 at 09.56.49.jpeg";
import race3 from "../Images/Road Race/WhatsApp Image 2025-11-28 at 09.56.50 (1).jpeg";
import race4 from "../Images/Road Race/WhatsApp Image 2025-11-28 at 09.56.50 (2).jpeg";
import race5 from "../Images/Road Race/WhatsApp Image 2025-11-28 at 09.56.50.jpeg";

// Swimming Images
import swim1 from "../Images/Swiming/471326619_10161171043337903_1437554290299634049_n.jpg";
import swim2 from "../Images/Swiming/471795018_10161164598512903_2254285664295972909_n.jpg";
import swim3 from "../Images/Swiming/508382053_10161712461522903_3268396813881835528_n.jpg";
import swim4 from "../Images/Swiming/81911472_10157097450777903_4466391814584139776_n.jpg";
import swim5 from "../Images/Swiming/81922529_10157097459567903_5093151856603955200_n.jpg";

const apictaImages = [apicta1, apicta3, apicta4, apicta5, apicta6, apicta8];
const munImages = [mun1, mun5, mun6, mun7, mun8, mun9, mun10, mun11];
const raceImages = [race1, race2, race3, race4, race5];
const swimImages = [swim1, swim2, swim3, swim4, swim5];

/* ---------- Work Experience Data ---------- */
const workExperience = [
  {
    emoji: "🏛️",
    title: "President, Interpol General Assembly",
    company: "Colombo Model United Nations",
    location: "Sri Jayewardenepura Kotte, Colombo, Sri Lanka",
    duration: "Summer 2025",
    type: "Leadership",
    description: "Acted as Committee Chair for the Interpol General Assembly at Colombo Model United Nations 2025, leading more than 100 participants from across Sri Lanka in discussions on transnational crime, cyber-security, and global law enforcement cooperation.",
    responsibilities: [
      "Moderated debates with over 100 delegates from across Sri Lanka",
      "Led discussions on transnational crime and cyber-security",
      "Facilitated dialogue on global law enforcement cooperation",
      "Trained delegates in diplomacy skills and negotiation techniques",
      "Conducted policy-writing workshops under real-world UN procedures",
      "Supported research-based argumentation and critical thinking",
    ],
    skills: ["Leadership", "Public Speaking", "Diplomacy", "Negotiation", "Policy Writing", "Research"],
  },
  {
    emoji: "💻",
    title: "Assistant Developer",
    company: "Flix 11 (Pvt) Ltd",
    location: "Rajagiriya, Colombo, Sri Lanka",
    duration: "Summer 2023 - Summer 2024",
    type: "Engineering",
    description: "Collaborated with the engineering team on the development of several IoT-based smart home products, supporting tasks such as embedded programming, sensor integration, and system testing. Contributed significantly to the Energy Reader – Research Contribution project, including the design of its data-collection architecture, energy-monitoring algorithms enabling real-time tracking of household power consumption through a cloud-based dashboard.",
    responsibilities: [
      "Developed IoT-based smart home products with engineering team",
      "Performed embedded programming for microcontroller systems",
      "Integrated various sensors for smart home automation",
      "Led comprehensive system testing and debugging to ensure reliability and performance",
      "Designed data-collection architecture for Energy Reader – Research Contribution",
      "Implemented energy-monitoring algorithms for real-time tracking",
      "Created cloud-based dashboard for household power consumption",
    ],
    skills: ["IoT Development", "Embedded Systems", "C/C++", "Sensor Integration", "Cloud Computing", "Data Analytics"],
  },
];

/* ---------- Skills Data ---------- */
const skillCategories = {
  "Technical Skills": ["Python", "C++", "Data Analysis", "Accounting", "Engineering", "Microsoft Office Suite"],
  "Soft Skills": ["Communication", "Leadership", "Teamwork", "Problem Solving", "Analytical"],
  "Language Skills": ["English (Native Speaker)", "Sinhalese"],
};

const categoryIcons = {
  "Technical Skills": <Code sx={{ color: "#22d3ee" }} />,
  "Soft Skills": <Work sx={{ color: "#22d3ee" }} />,
  "Language Skills": <Web sx={{ color: "#22d3ee" }} />,
};

/* ---------- Achievements Data ---------- */
const achievementsData = {
  academic: [
    {
      title: "Academic Scholar - Gateway College Colombo",
      description: "Recognized for outstanding academic achievement",
      year: "2024-2025",
      icon: <SchoolIcon />,
      color: "#22d3ee",
    },
    {
      title: "Edexcel Academic Excellence Award",
      description: "Outstanding performance in Edexcel examinations",
      year: "2024",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
    {
      title: "Edexcel Advanced Level",
      description: "Mathematics (A*), Further Maths (A*), Physics (A), Chemistry (A), Computer Science (A)",
      year: "2025",
      icon: <SchoolIcon />,
      color: "#22d3ee",
    },
  ],
  technology: [
    {
      title: "Asian Pacific ICT Alliance Merit Award",
      description: "Recognition for excellence in ICT and technology leadership",
      year: "2025",
      icon: <AwardIcon />,
      color: "#22d3ee",
    },
    {
      title: "Young Computer Scientist Competition Sri Lanka",
      description: "1st Place - National Level Competition",
      year: "2025",
      icon: <EmojiEvents />,
      color: "#22d3ee",
    },
  ],
  modelUN: [
    {
      title: "Colombo Model United Nations Best Chair Award",
      description: "Recognized as Best Chair for exceptional committee leadership",
      year: "2025",
      icon: <EmojiEvents />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lanka Model United Nations Higher Commendation Award",
      description: "Outstanding performance in committee deliberations",
      year: "2025",
      icon: <AwardIcon />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lanka Model United Nations Best Delegate Award",
      description: "Top delegate recognition for diplomacy and negotiation",
      year: "2024",
      icon: <EmojiEvents />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lanka Model United Nations Best Working Paper Award",
      description: "Excellence in policy writing and research",
      year: "2024",
      icon: <AwardIcon />,
      color: "#22d3ee",
    },
    {
      title: "Colombo Model United Nations Higher Commendation Award",
      description: "Strong performance in committee debates",
      year: "2024",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
    {
      title: "Colombo Model United Nations Best Crisis Delegation Award",
      description: "Outstanding crisis committee performance",
      year: "2024",
      icon: <EmojiEvents />,
      color: "#22d3ee",
    },
  ],
  sports: [
    {
      title: "Age Group Relay Championships - 4x50m Medley Relay",
      description: "Third Place - Boys Under-17",
      year: "2022",
      icon: <SportsIcon />,
      color: "#22d3ee",
    },
    {
      title: "Age Group Relay Championships - 4x50m Freestyle Relay",
      description: "Third Place - Boys Under-17",
      year: "2022",
      icon: <SportsIcon />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lankan Schools' Aquatic Sports Championships",
      description: "First Place - 200 LC Meter Freestyle",
      year: "2019",
      icon: <EmojiEvents />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lankan Schools' Aquatic Sports Championships",
      description: "Second Place - 400 LC Meter Freestyle",
      year: "2019",
      icon: <StarIcon />,
      color: "#22d3ee",
      images: swimImages,
    },
  ],
  leadership: [
    {
      title: "Secretary General - Model UN, Gateway College Colombo (2024-2025)",
      description: "Led the organization of Gateway MUN conference",
      year: "2024-2025",
      icon: <LanguageIcon />,
      color: "#22d3ee",
    },
    {
      title: "Deputy Head Prefect, Gateway College Colombo (2024-2025)",
      description: "Student leadership and school governance",
      year: "2024-2025",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
    {
      title: "Vice President - ICT Society, Gateway College Colombo (2024-2025)",
      description: "Led technology initiatives and ICT education programs",
      year: "2024-2025",
      icon: <AwardIcon />,
      color: "#22d3ee",
    },
    {
      title: "House Captain, Gateway College Colombo (2023-2024)",
      description: "House leadership and inter-house competition coordination",
      year: "2023-2024",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
    {
      title: "Swim Team Captain, Gateway College Colombo (2022-2024)",
      description: "Led competitive swim team to multiple victories",
      year: "2022-2024",
      icon: <SportsIcon />,
      color: "#22d3ee",
    },
  ],
  international: [
    {
      title: "Asian Pacific ICT Alliance",
      description: "Represented Sri Lanka at regional ICT conference",
      year: "2025",
      icon: <GlobalIcon />,
      color: "#22d3ee",
    },
  ],
  extracurricular: [
    {
      title: "TEDxYouth@GCNegombo Speaker",
      description: "Delivered a TEDx talk on innovation and youth leadership",
      year: "Oct 2023",
      icon: <LanguageIcon />,
      color: "#22d3ee",
      video: "https://www.youtube.com/watch?v=CyrafePiUFs",
    },
  ],
};

/* ---------- Section Header ---------- */
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
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          letterSpacing: 0.5,
          background: "linear-gradient(135deg, #fff 0%, #22d3ee 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "1.75rem", md: "2.2rem" },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 600, fontSize: { xs: "0.9rem", md: "1rem" } }}>
          {subtitle}
        </Typography>
      )}
      <Divider sx={{ width: 70, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1 }} />
    </Stack>
  );
}

/* ---------- Experience Card ---------- */
function ExperienceCard({ item }) {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        mb: 3,
        transition: "transform .25s ease",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
                borderRadius: 2,
                bgcolor: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.3)",
              }}
            >
              {item.emoji}
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <Stack spacing={2}>
              <Box>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#fff" }}>
                    {item.title}
                  </Typography>
                  <Chip label={item.type} size="small" sx={{ bgcolor: "#22d3ee", color: "#fff" }} />
                </Stack>
                <Typography variant="h6" sx={{ color: "#22d3ee", mb: 0.5 }}>
                  {item.company}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    📍 {item.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    📅 {item.duration}
                  </Typography>
                </Stack>
              </Box>

              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                {item.description}
              </Typography>

              <Box>
                <Typography variant="subtitle2" sx={{ color: "#22d3ee", fontWeight: 700, mb: 1 }}>
                  Key Responsibilities:
                </Typography>
                <List dense>
                  {item.responsibilities.map((resp, i) => (
                    <ListItem key={i} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircle sx={{ fontSize: 18, color: "#22d3ee" }} />
                      </ListItemIcon>
                      <ListItemText primary={resp} primaryTypographyProps={{ sx: { color: "rgba(255,255,255,0.8)" } }} />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {item.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: "rgba(34,211,238,0.2)",
                      color: "#22d3ee",
                      border: "1px solid rgba(34,211,238,0.3)",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

/* ---------- Achievement Card ---------- */
function AchievementCard({ achievement }) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 16px 40px ${achievement.color}40`,
          borderColor: achievement.color,
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${achievement.color}20, ${achievement.color}10)`,
                color: achievement.color,
                fontSize: 24,
              }}
            >
              {achievement.icon}
            </Box>
            <Chip
              label={achievement.year}
              size="small"
              sx={{
                bgcolor: `${achievement.color}20`,
                color: achievement.color,
                fontWeight: 700,
                border: `1px solid ${achievement.color}40`,
              }}
            />
          </Stack>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff", mb: 1, lineHeight: 1.3 }}>
              {achievement.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, mb: achievement.video ? 2 : 0 }}>
              {achievement.description}
            </Typography>
            {achievement.video && (
              <Button
                href={achievement.video}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="medium"
                startIcon={<StarIcon />}
                sx={{
                  background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  px: 3,
                  py: 1.25,
                  borderRadius: 2,
                  boxShadow: "0 4px 16px rgba(34,211,238,0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
                    boxShadow: "0 6px 24px rgba(34,211,238,0.6)",
                    transform: "translateY(-2px)",
                  }
                }}
              >
                🎬 Watch TEDx Talk
              </Button>
            )}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

/* ---------- Achievement Category Section ---------- */
function AchievementCategory({ title, achievements, icon, images, video, videoPoster }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #22d3ee20, #22d3ee10)",
            color: "#22d3ee",
            fontSize: 20,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800, color: "#fff" }}>
          {title}
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {achievements.map((achievement, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <AchievementCard achievement={achievement} />
          </Grid>
        ))}
      </Grid>
      
      {/* Image Gallery with Video */}
      {(images && images.length > 0 || video) && (
        <Box sx={{ mt: 4 }}>
          <ImageGallery 
            images={images} 
            video={video}
            videoPoster={videoPoster}
            title={`${title} Gallery`}
            cardContent={title === "Technology and ICT" ? (
              <Card sx={{ background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 3, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ color: "#22d3ee", fontWeight: 700, mb: 2 }}>
                    Asia Pacific ICT Alliance (APICTA)
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, mb: 2 }}>
                    After placing first in the national Young Computer Scientist Competition, I was selected to represent Sri Lanka as part of a national youth innovation team at the Asia Pacific ICT Alliance (APICTA) Gallery, an international ICT convention. Engaging with technology companies and innovators from across the Asia-Pacific region exposed me to cutting-edge applications ranging from AI-driven media localization to large-scale indoor navigation systems used in complex urban environments such as Hong Kong.
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
                    I also had the opportunity to present my own work and engage with youth-led innovations from around the world, deepening my understanding of how technology can be scaled for real-world impact across diverse societies.
                  </Typography>
                </CardContent>
              </Card>
            ) : undefined}
          />
        </Box>
      )}
    </Box>
  );
}

/* ---------- Main Portfolio Component ---------- */
export default function Portfolio() {
  const [tabValue, setTabValue] = useState(0);
  const [pdfLoading, setPdfLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Handle URL hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const tabMap = {
      'work': 0,
      'skills': 1,
      'resume': 2,
      'achievements': 3
    };
    if (hash && tabMap[hash] !== undefined) {
      setTabValue(tabMap[hash]);
    }
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Update URL hash
    const hashMap = ['work', 'skills', 'resume', 'achievements'];
    window.history.replaceState(null, '', `#${hashMap[newValue]}`);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #1e2433 100%)",
        minHeight: "100vh",
        py: 10,
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Header */}
        <Stack alignItems="center" spacing={2} sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              background: "linear-gradient(135deg, #fff 0%, #22d3ee 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Portfolio
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 700 }}>
            My professional experience, technical skills, resume and achievements
          </Typography>
          <Divider sx={{ width: 100, height: 4, bgcolor: "#22d3ee", borderRadius: 2, mt: 2 }} />
        </Stack>

        {/* Tab Navigation */}
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered={!isMobile}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            allowScrollButtonsMobile
            aria-label="Portfolio navigation tabs"
            sx={{
              "& .MuiTabs-indicator": { bgcolor: "#22d3ee", height: 4 },
              "& .MuiTab-root": {
                color: "rgba(255,255,255,0.6)",
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.1rem" },
                minHeight: { xs: 56, md: 72 },
                px: { xs: 2, md: 4 },
                py: { xs: 1.5, md: 2 },
                border: "2px solid rgba(255,255,255,0.1)",
                borderRadius: 2,
                mx: 0.5,
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.3s ease",
                "&.Mui-selected": { 
                  color: "#22d3ee",
                  background: "rgba(34,211,238,0.1)",
                  border: "2px solid rgba(34,211,238,0.3)",
                  boxShadow: "0 4px 12px rgba(34,211,238,0.2)",
                  transform: "translateY(-2px)",
                },
                "&:hover": {
                  background: "rgba(255,255,255,0.05)",
                  border: "2px solid rgba(255,255,255,0.2)",
                },
                "&:focus": {
                  outline: "2px solid #22d3ee",
                  outlineOffset: "2px",
                },
              },
            }}
          >
            <Tab label="Work and Leadership Experience" icon={<WorkOutline />} iconPosition="start" aria-label="Work and leadership experience section" />
            <Tab label="Skills" icon={<Code />} iconPosition="start" aria-label="Technical skills section" />
            <Tab label="Resume" icon={<Description />} iconPosition="start" aria-label="Resume and CV section" />
            <Tab label="Achievements" icon={<EmojiEvents />} iconPosition="start" aria-label="Achievements section" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {tabValue === 0 && (
          <Box>
            <SectionHeader title="Work and Leadership Experience" subtitle="Professional work roles and leadership positions" icon={<WorkOutline />} />
            <StaggerChildren>
              {workExperience.map((exp, i) => (
                <ExperienceCard key={i} item={exp} />
              ))}
            </StaggerChildren>
            
            {/* Leadership Experience */}
            <Box sx={{ mt: 6 }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #22d3ee20, #22d3ee10)",
                    color: "#22d3ee",
                    fontSize: 20,
                  }}
                >
                  <StarIcon />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#fff" }}>
                  Leadership Experience
                </Typography>
              </Stack>
              
              <Card
                sx={{
                  background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  borderRadius: 3,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <List>
                    {achievementsData.leadership.map((achievement, i) => (
                      <React.Fragment key={i}>
                        <ListItem
                          alignItems="flex-start"
                          sx={{
                            flexDirection: "column",
                            py: 2.5,
                            px: 2,
                            borderRadius: 2,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: "rgba(34,211,238,0.05)",
                            },
                          }}
                        >
                          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ width: "100%", mb: 1 }}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40,
                                borderRadius: "10px",
                                background: `linear-gradient(135deg, ${achievement.color}20, ${achievement.color}10)`,
                                color: achievement.color,
                                fontSize: 20,
                              }}
                            >
                              {achievement.icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                              {achievement.title}
                            </Typography>
                          </Stack>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6, ml: 7 }}>
                            {achievement.description}
                          </Typography>
                        </ListItem>
                        {i < achievementsData.leadership.length - 1 && (
                          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mx: 2 }} />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <SectionHeader title="Technical Skills" subtitle="Programming languages, tools, and competencies" icon={<Code />} />
            <Grid container spacing={3}>
              {Object.entries(skillCategories).map(([category, skills], i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Accordion
                    defaultExpanded
                    sx={{
                      background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      borderRadius: 2,
                      "&:before": { display: "none" },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMore sx={{ color: "#22d3ee" }} />}>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        {categoryIcons[category]}
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff" }}>
                          {category}
                        </Typography>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {skills.map((skill, j) => (
                          <Chip
                            key={j}
                            label={skill}
                            sx={{
                              bgcolor: "rgba(34,211,238,0.2)",
                              color: "#22d3ee",
                              border: "1px solid rgba(34,211,238,0.3)",
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {tabValue === 2 && (
          <Box>
            <SectionHeader title="Resume" subtitle="Download or view my complete resume" icon={<Description />} />
            <Card
              sx={{
                background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                p: 3,
              }}
            >
              <Stack spacing={3} alignItems="center">
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", textAlign: "center" }}>
                  Sanuja Jayasundara - Resume
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", textAlign: "center", maxWidth: 600 }}>
                  View my complete resume with detailed information about my education, work experience, skills, and achievements.
                </Typography>
                <Button
                  href={cv}
                  download="Sanuja_Jayasundara_Resume.pdf"
                  variant="contained"
                  startIcon={<Download />}
                  aria-label="Download Sanuja Jayasundara resume as PDF"
                  sx={{
                    background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
                    color: "#fff",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: "0 4px 16px rgba(34,211,238,0.4)",
                    minHeight: 48,
                    touchAction: "manipulation",
                    "&:hover": {
                      background: "linear-gradient(135deg, #5558e3, #7c4de8)",
                      boxShadow: "0 6px 24px rgba(34,211,238,0.6)",
                    },
                    "&:focus": {
                      outline: "2px solid #22d3ee",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  Download Resume
                </Button>
                <Box
                  sx={{
                    width: "100%",
                    height: isMobile ? 500 : 700,
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "2px solid rgba(34,211,238,0.3)",
                    position: "relative",
                  }}
                >
                  {pdfLoading && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(35,37,38,0.95)",
                        zIndex: 1,
                      }}
                      role="status"
                      aria-live="polite"
                    >
                      <Stack alignItems="center" spacing={2}>
                        <CircularProgress size={50} sx={{ color: "#22d3ee" }} />
                        <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>Loading Resume...</Typography>
                      </Stack>
                    </Box>
                  )}
                  <iframe
                    src={cv}
                    title="Sanuja Jayasundara Resume PDF"
                    onLoad={() => setPdfLoading(false)}
                    aria-label="Resume PDF viewer"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </Box>
              </Stack>
            </Card>
          </Box>
        )}

        {tabValue === 3 && (
          <Box>
            <SectionHeader title="Achievements & Awards" subtitle="A collection of accomplishments spanning academic excellence, technology, sports, extracurricular activities and international engagements" icon={<EmojiEvents />} />
            <StaggerChildren>
              <AchievementCategory
                title="Academic Excellence"
                achievements={achievementsData.academic}
                icon={<SchoolIcon />}
              />
              <AchievementCategory
                title="Technology and ICT"
                achievements={achievementsData.technology}
                icon={<Code />}
                images={apictaImages}
                video={apictaVideo}
              />
              <AchievementCategory
                title="Model United Nations"
                achievements={achievementsData.modelUN}
                icon={<LanguageIcon />}
                images={munImages}
              />
              <AchievementCategory
                title="Sports - Swimming / Soccer / Athletics"
                achievements={achievementsData.sports}
                icon={<SportsIcon />}
                images={[...swimImages, ...raceImages]}
              />
              <AchievementCategory
                title="International Experiences"
                achievements={achievementsData.international}
                icon={<GlobalIcon />}
              />
              <AchievementCategory
                title="Extracurricular Activities"
                achievements={achievementsData.extracurricular}
                icon={<EmojiEvents />}
              />
            </StaggerChildren>
          </Box>
        )}
      </Container>
    </Box>
  );
}
