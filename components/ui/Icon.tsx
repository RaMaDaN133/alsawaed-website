import {
  FaBalanceScale,
  FaBriefcase,
  FaUsers,
  FaGavel,
  FaHandshake,
  FaFileSignature,
  FaFileContract,
  FaLightbulb,
  FaAward,
  FaRegClock,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  scale: FaBalanceScale,
  briefcase: FaBriefcase,
  users: FaUsers,
  gavel: FaGavel,
  handshake: FaHandshake,
  fileCheck: FaFileSignature,
  document: FaFileContract,
  lightbulb: FaLightbulb,
  award: FaAward,
  clock: FaRegClock,
  shield: FaShieldAlt,
  refresh: FaSyncAlt,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = iconMap[name] ?? FaBalanceScale;
  return <Component className={className} />;
}
