import React from "react";
import { IconSchool } from '@tabler/icons-react';

interface LogoProps {
  color: string;
}
const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <h1 className={`flex items-center gap-2 font-bold ${color}`}>
        <IconSchool className={`${color}`}/>
        <span>MasterRSM</span>
    </h1>
  );
};

export default Logo;
