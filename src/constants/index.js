import { FaWifi } from "react-icons/fa";
import { PiMonitorBold } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";

export const NavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export const FeaturesData = [
  {
    icon: <FaWifi />,
    title: "Idea Submission",
    description:
      "Submit your unique ideas and gain the opportunity to win exciting prizes.",
  },
  {
    icon: <PiMonitorBold />,
    title: "Monitor Your Idea",
    description:
      "Embrace valuable feedback to drive your ideas toward realization",
  },
  {
    icon: <FaAward />,
    title: "Reward System",
    description:
      "Earn rewards for your innovative contributions, enhancing the value of sharing knowledge.",
  },
];

export const FaqQuestions = [
  {
    q: "How to Submit?",
    ans: "To submit, simply sign up using your email address and provide a brief description of your idea.",
  },
  {
    q: "When are Winners announced?",
    ans: "Winners will be announced according to the specified date in the guidelines. Keep track to stay updated on the results.",
  },
  {
    q: "Who can participate?",
    ans: "Participation is open to all individuals. Your valuable ideas are welcomed and encouraged.",
  },
  {
    q: "What are the prizes?",
    ans: "Prizes encompass a range of rewards such as cash prizes, certificates of recognition, and additional perks.",
  },
];
