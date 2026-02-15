import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link as MLink,
  IconButton,
  Button,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import NorthIcon from "@mui/icons-material/North";

const year = new Date().getFullYear();

const social = [
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/sanuja-jayasundara-5b8866340", label: "LinkedIn" },
  { icon: <EmailIcon />, href: "mailto:sanuja.jayasundara@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "About Me", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Research", href: "/research" },
  { label: "Achievements", href: "/portfolio#achievements" },
  { label: "Contact", href: "/contact" },
];

function SocialRow({ size = "medium" }) {
  return (
    <Stack direction="row" spacing={1.5}>
      {social.map((s, i) => (
        <IconButton
          key={i}
          aria-label={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "transform .2s, color .2s",
            "&:hover": { transform: "translateY(-3px)", color: "primary.light" },
          }}
          size={size}
        >
          {s.icon}
        </IconButton>
      ))}
    </Stack>
  );
}

/* ---------------- Desktop render ---------------- */
function DesktopFooter() {
  const location = useLocation();
  const pathname = location.pathname.replace('/Sanuja-Jayasundara-potfolio', '') || location.pathname;
  const showIcons = ['/about', '/portfolio', '/research'].includes(pathname);
  const hideGetInTouchButton = ['/', '/contact'].includes(pathname);
  
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 6,
        pb: 2,
        background:
          "linear-gradient(180deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 50%, rgba(18,18,18,1) 100%)",
        borderTop: "1px solid rgba(34,211,238,0.2)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.2)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand + tagline */}
          <Grid item md={4}>
            <Stack spacing={2}>
              <Typography
                variant="h5"
                sx={{ 
                  fontWeight: 800, 
                  letterSpacing: 0.3,
                  background: "linear-gradient(135deg, #fff 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sanuja.Jayasundara
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
                Electrical Engineering student at Penn State, passionate about IoT development,
                embedded systems, and innovative solutions in electrical engineering.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip 
                  label="Penn State" 
                  size="small" 
                  sx={{ 
                    bgcolor: "rgba(34,211,238,0.15)", 
                    color: "#22d3ee",
                    border: "1px solid rgba(34,211,238,0.3)",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(34,211,238,0.25)",
                      borderColor: "rgba(34,211,238,0.5)",
                      transform: "translateY(-2px)",
                    }
                  }} 
                />
                <Chip 
                  label="Class of 2029" 
                  size="small" 
                  sx={{ 
                    bgcolor: "rgba(34,211,238,0.15)", 
                    color: "#22d3ee",
                    border: "1px solid rgba(34,211,238,0.3)",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(34,211,238,0.25)",
                      borderColor: "rgba(34,211,238,0.5)",
                      transform: "translateY(-2px)",
                    }
                  }} 
                />
              </Stack>
              {showIcons && (
                <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                  <IconButton
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/sanuja-jayasundara-5b8866340"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#fff",
                      transition: "transform .2s, color .2s",
                      "&:hover": { transform: "translateY(-3px)", color: "#22d3ee" },
                    }}
                    size="small"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    aria-label="Email"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sanuja.jayasundara@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#fff",
                      transition: "transform .2s, color .2s",
                      "&:hover": { transform: "translateY(-3px)", color: "#22d3ee" },
                    }}
                    size="small"
                  >
                    <EmailIcon />
                  </IconButton>
                </Stack>
              )}
            </Stack>
          </Grid>

          {/* Quick links */}
          <Grid item md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Quick Links
            </Typography>
            <Grid container spacing={1} columns={12}>
              {quickLinks.map((q) => (
                <Grid item xs={6} key={q.label}>
                  <MLink
                    component={RouterLink}
                    to={q.href}
                    underline="hover"
                    color="inherit"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    sx={{
                      display: "inline-block",
                      py: 0.5,
                      color: "rgba(255,255,255,0.8)",
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {q.label}
                  </MLink>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact */}
          <Grid item md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <MLink href="mailto:sanuja.jayasundara@gmail.com" color="inherit" underline="hover">
                sanuja.jayasundara@gmail.com
              </MLink>
              <MLink href="https://wa.link/lcn6x6" target="_blank" rel="noopener" color="inherit" underline="hover">
                WhatsApp: +94 76 908 8578
              </MLink>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.87)" }}>
                Available for opportunities and collaborations
              </Typography>
              {!hideGetInTouchButton && (
                <Button
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    mt: 1,
                    textTransform: "none",
                    borderRadius: 2,
                    px: 2.5,
                    py: 1,
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
                    color: "#fff",
                    alignSelf: "start",
                    boxShadow: "0 2px 8px rgba(34,211,238,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      opacity: 0.95,
                      boxShadow: "0 4px 12px rgba(34,211,238,0.3)",
                      transform: "translateY(-4px)",
                    },
                    "&:focus-visible": {
                      outline: "3px solid rgba(34,211,238,0.8)",
                      outlineOffset: "3px",
                    },
                  }}
                >
                  Get in Touch
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Bottom strip */}
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ pb: 1 }}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
            © Website designed and developed by EFLASH24
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

/* ---------------- Mobile render ---------------- */
function MobileFooter() {
  const location = useLocation();
  const pathname = location.pathname.replace('/Sanuja-Jayasundara-potfolio', '') || location.pathname;
  const showIcons = ['/about', '/portfolio', '/research'].includes(pathname);
  const hideFooterSocialIcons = ['/', '/contact'].includes(pathname);
  
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 4,
        pb: 2,
        px: 2,
        background:
          "linear-gradient(180deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 50%, rgba(18,18,18,1) 100%)",
        borderTop: "1px solid rgba(34,211,238,0.2)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}>
          {/* Brand */}
          <Stack spacing={0.5} alignItems="flex-start">
            <Typography variant="h6" sx={{ 
              fontWeight: 800,
              background: "linear-gradient(135deg, #fff 0%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Sanuja.Jayasundara
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.87)" }}>
              Electrical Engineering Student.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip 
                label="Penn State" 
                size="small" 
                sx={{ 
                  bgcolor: "rgba(34,211,238,0.15)", 
                  color: "#22d3ee",
                  border: "1px solid rgba(34,211,238,0.3)",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(34,211,238,0.25)",
                    borderColor: "rgba(34,211,238,0.5)",
                    transform: "translateY(-2px)",
                  }
                }} 
              />
              <Chip 
                label="Class of 2029" 
                size="small" 
                sx={{ 
                  bgcolor: "rgba(34,211,238,0.15)", 
                  color: "#22d3ee",
                  border: "1px solid rgba(34,211,238,0.3)",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(34,211,238,0.25)",
                    borderColor: "rgba(34,211,238,0.5)",
                    transform: "translateY(-2px)",
                  }
                }} 
              />
            </Stack>
          </Stack>

          {/* Links */}
          <Grid container spacing={1}>
            {quickLinks.map((q) => (
              <Grid item xs={6} key={q.label}>
                <MLink
                  component={RouterLink}
                  to={q.href}
                  underline="hover"
                  color="inherit"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  sx={{
                    display: "inline-block",
                    py: 0.5,
                    color: "rgba(255,255,255,0.85)",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {q.label}
                </MLink>
              </Grid>
            ))}
          </Grid>

          {/* Contact + Social */}
          <Stack spacing={1}>
            <MLink href="mailto:sanuja.jayasundara@gmail.com" color="inherit" underline="hover">
              sanuja.jayasundara@gmail.com
            </MLink>
            <MLink href="https://wa.link/lcn6x6" target="_blank" rel="noopener" color="inherit" underline="hover">
              WhatsApp: +94 76 908 8578
            </MLink>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
              Available for opportunities and collaborations
            </Typography>
            {!hideFooterSocialIcons && <SocialRow size="small" />}
          </Stack>

          <Divider sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Bottom strip */}
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic", fontSize: "0.7rem" }}>
              © Designed by EFLASH24
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

/* ---------------- Main export: two renders ---------------- */
export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // split at <600px
  return isMobile ? <MobileFooter /> : <DesktopFooter />;
}



