import React, { useState } from "react";
import { Box, Grid, Modal, IconButton, Typography } from "@mui/material";
import { Close as CloseIcon, ChevronLeft, ChevronRight, PlayCircleOutline } from "@mui/icons-material";

export default function ImageGallery({ images, title, video, videoPoster, subtitle, cardContent }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaType, setMediaType] = useState('image'); // 'image' or 'video'

  const handleOpen = (index, type = 'image') => {
    setCurrentIndex(index);
    setMediaType(type);
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
      {title && (
        <>
          <Typography
            variant="h5"
            sx={{
              color: "#22d3ee",
              fontWeight: 700,
              mb: subtitle ? 1 : 3,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.7)",
                mb: 3,
                fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign: "center",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </>
      )}
      
      {/* Custom card content (e.g., APICTA description) */}
      {cardContent && (
        <Box sx={{ mb: 3 }}>
          {cardContent}
        </Box>
      )}
      
      <Grid container spacing={2} justifyContent="center">
        {video && (
          <Grid item xs={6} sm={4} md={3}>
            <Box
              onClick={() => handleOpen(0, 'video')}
              sx={{
                position: "relative",
                paddingTop: "100%", // Square aspect ratio to match images
                borderRadius: 2,
                overflow: "hidden",
                border: "2px solid rgba(34,211,238,0.2)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: "rgba(34,211,238,0.6)",
                  boxShadow: "0 8px 24px rgba(34,211,238,0.3)",
                },
              }}
            >
              <Box
                component="video"
                src={video}
                playsInline
                preload="metadata"
                disablePictureInPicture
                controlsList="nodownload"
                muted
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  background: "#000",
                }}
              />
              {/* Play button overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  pointerEvents: "none",
                }}
              >
                <PlayCircleOutline sx={{ fontSize: { xs: 48, md: 64 }, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }} />
              </Box>
            </Box>
          </Grid>
        )}
        {images.map((img, idx) => (
          <Grid item xs={6} sm={4} md={3} key={idx}>
            <Box
              onClick={() => handleOpen(idx, 'image')}
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
        ))}
      </Grid>

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

          {mediaType === 'video' ? (
            <Box
              component="video"
              src={video}
              controls
              autoPlay
              playsInline
              disablePictureInPicture
              controlsList="nodownload"
              onClick={e => e.stopPropagation()}
              sx={{
                maxWidth: "70vw",
                maxHeight: "60vh",
                objectFit: "contain",
                borderRadius: 2,
                background: "#000",
              }}
            />
          ) : (
            <>
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
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
