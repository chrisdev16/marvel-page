import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';

export const navigationItems = [
    { label: "ΑΡΧΙΚΗ ΣΕΛΙΔΑ", path: "/", icon: <HomeIcon /> },
    { label: "ΑΝΑΖΗΤΗΣΗ", path: "/search", icon: <SearchIcon /> },
    { label: "ΚΟΜΙΚΣ", path: "/comics", icon: <MenuBookIcon /> },
    { label: "ΧΑΡΑΚΤΗΡΕΣ", path: "/characters", icon: <PersonIcon /> },
    { label: "ΔΗΜΙΟΥΡΓΟΙ", path: "/creators", icon: <Person2Icon /> },
];