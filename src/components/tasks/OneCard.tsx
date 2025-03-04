import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

interface Task {
  id: number;
  priority: string;
  company: string;
  phone: string;
  email: string;
  description: string;
  date: string;
}

const OneCard: React.FC<Task> = ({
  id,
  priority,
  company,
  phone,
  email,
  description,
  date,
}) => {
  return (
    <Card key={id} sx={{ mb: 2 }}>
      <CardContent>
        <Typography
          variant="subtitle1"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ContactMailIcon sx={{ color: "lightblue", mr: "4px" }} />
            <b>ID {id}</b>
            <Chip label={priority} size="small" sx={{ color: "red" }} />
          </div>
          <div>
            <HeadsetMicOutlinedIcon sx={{ color: "green" }} />
          </div>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "gray",
            paddingY: "2px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <BusinessOutlinedIcon sx={{ color: "lightgray" }} />
          {company}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "gray",
            paddingY: "2px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <PhoneOutlinedIcon sx={{ color: "lightgray" }} />
          {phone}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "gray",
            paddingY: "2px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <EmailOutlinedIcon sx={{ color: "lightgray" }} />
          {email}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "gray",
            paddingY: "2px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <UpdateOutlinedIcon sx={{ color: "lightgray" }} />
          {description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "gray",
            paddingY: "2px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <CalendarMonthOutlinedIcon sx={{ color: "lightgray" }} />
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OneCard;
