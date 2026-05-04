import { useState, useRef } from 'react';
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import Fade from 'react-reveal/Fade';
import { Box, TextField, Button, Snackbar, Alert, Tooltip, CircularProgress } from "@mui/material";
import emailjs from '@emailjs/browser';

// Configure these via EmailJS (https://www.emailjs.com)
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

const EMAIL = 'bartaliskrisztian4@gmail.com';

const styles = {
  link: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    color: '#fff',
  },
};

const iconCardSx = {
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  p: 1.5,
  transition: 'all 300ms ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(133, 196, 103, 0.12)',
    borderColor: 'rgba(133, 196, 103, 0.4)',
    boxShadow: '0 4px 16px rgba(133, 196, 103, 0.2)',
    transform: 'translateY(-2px)',
  },
};

const inputSx = {
  '& .MuiOutlinedInput-root': {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.875rem',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
    '&:hover fieldset': { borderColor: 'rgba(133,196,103,0.4)' },
    '&.Mui-focused fieldset': { borderColor: 'rgba(133,196,103,0.7)' },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.875rem',
    '&.Mui-focused': { color: '#85c467' },
  },
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false, message: '', severity: 'success',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setToast({ open: true, message: 'Email service not configured yet.', severity: 'error' });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formState.name, from_email: formState.email, message: formState.message },
        EMAILJS_PUBLIC_KEY,
      );
      setFormState({ name: '', email: '', message: '' });
      setToast({ open: true, message: 'Message sent! I\'ll get back to you soon.', severity: 'success' });
    } catch {
      setToast({ open: true, message: 'Something went wrong. Try emailing me directly.', severity: 'error' });
    } finally {
      setSending(false);
    }
  };

  return (
    <Fade>
      <Grid pt={3} width="100%" id="contact">
        <Typography variant="h3" sx={{ color: 'text.primary' }}>
          follow me
        </Typography>

        <Grid pt={3} display="flex" gap={1.5} alignItems="center">
          {/* Email — copy to clipboard */}
          <Tooltip title={copied ? 'Copied!' : 'Copy email'} placement="top">
            <Box sx={iconCardSx} onClick={handleCopyEmail}>
              {copied
                ? <CheckIcon style={{ ...styles.icon, color: '#85c467' }} />
                : <EmailIcon style={styles.icon} />
              }
            </Box>
          </Tooltip>

          <Box sx={iconCardSx}>
            <a style={styles.link} target="_blank" rel="noreferrer" href='https://github.com/bartaliskrisztian'>
              <GitHubIcon style={styles.icon} />
            </a>
          </Box>
          <Box sx={iconCardSx}>
            <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.facebook.com/bartalis.krisztian'>
              <FacebookIcon style={styles.icon} />
            </a>
          </Box>
          <Box sx={iconCardSx}>
            <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.instagram.com/bartaliskrisztian'>
              <InstagramIcon style={styles.icon} />
            </a>
          </Box>
          <Box sx={iconCardSx}>
            <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bartaliskrisztian'>
              <LinkedInIcon style={styles.icon} />
            </a>
          </Box>
        </Grid>

        {/* Contact form */}
        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{
            mt: 4,
            p: { xs: 2.5, md: 3 },
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '16px',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', mb: 0.5 }}>
            or drop me a message directly
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="name" value={formState.name} onChange={handleChange} sx={inputSx} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" name="email" type="email" value={formState.email} onChange={handleChange} sx={inputSx} size="small" />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formState.message}
            onChange={handleChange}
            sx={inputSx}
            size="small"
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="outlined"
              disabled={sending || !formState.name || !formState.email || !formState.message}
              endIcon={sending ? <CircularProgress size={14} color="inherit" /> : <SendIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: '#85c467',
                borderColor: 'rgba(133, 196, 103, 0.4)',
                fontSize: '0.8rem',
                textTransform: 'none',
                px: 2.5,
                '&:hover': {
                  borderColor: '#85c467',
                  background: 'rgba(133, 196, 103, 0.08)',
                },
                '&.Mui-disabled': {
                  color: 'rgba(255,255,255,0.25)',
                  borderColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              {sending ? 'sending...' : 'send message'}
            </Button>
          </Box>
        </Box>

        <Snackbar
          open={toast.open}
          autoHideDuration={4000}
          onClose={() => setToast(t => ({ ...t, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            severity={toast.severity}
            onClose={() => setToast(t => ({ ...t, open: false }))}
            sx={{
              background: toast.severity === 'success' ? 'rgba(133,196,103,0.12)' : 'rgba(220,50,50,0.12)',
              border: `1px solid ${toast.severity === 'success' ? 'rgba(133,196,103,0.4)' : 'rgba(220,50,50,0.4)'}`,
              color: '#fff',
            }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      </Grid>
    </Fade>
  );
};
