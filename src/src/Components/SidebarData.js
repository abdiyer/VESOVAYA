import React from "react";
import WatchVideo from '@mui/icons-material/Slideshow';
import Reports from '@mui/icons-material/Summarize';
import Settings from '@mui/icons-material/Album';
import Spravochnik from '@mui/icons-material/Airplay';


export const SidebarData = [
    {
        title: "Просмотр видео",
        icon: <WatchVideo/>,
        link: "/watch-video"
    },
    {
        title: "Отчеты",
        icon: <Reports/>,
        link: "/reports"
    },
    {
        title: "Настройки",
        icon: <Settings/>,
        link: "/settings"
    },
    {
        title: "Справочник",
        icon: <Spravochnik/>,
        link: "/home"
    }
]