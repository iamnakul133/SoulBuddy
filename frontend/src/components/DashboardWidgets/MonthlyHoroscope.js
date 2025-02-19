import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { API_URL } from '../../config';
import {marked } from 'marked';

const MonthlyHoroscope = () => {
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoroscope = async () => {
      try {
        const response = await fetch(`${API_URL}monthly`);
        if (!response.ok) {
          throw new Error('Failed to fetch monthly horoscope');
        }
        const data = await response.json();
        setHoroscope(data?.data.horoscope_data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, []);

  if (loading) {
    return (
      <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Card>
    );
  }

  if (error) {
    return (
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography color="error">Error: {error}</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ height: '100%', overflow: 'auto' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CalendarMonthIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="h2">
            Monthly Horoscope
          </Typography>
        </Box>
        {horoscope ? (
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              whiteSpace: 'pre-line',
              '& ul': { paddingLeft: 2, marginTop: 1 },
              '& li': { marginBottom: 0.5 }
            }}
            dangerouslySetInnerHTML={{ 
              __html:horoscope
            }}
          />
        ) : (
          <Typography variant="body1" color="text.secondary">
            No horoscope available for this month.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MonthlyHoroscope;
