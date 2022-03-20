import Nav from "./Nav";
import NavItem from "./NavItem";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

export default function Movies({ movies }) {
    return (
        <div className="divide-y divide-slate-100">
            <Nav>
                <NavItem href="/new" isActive>
                    New Releases
                </NavItem>
                <NavItem href="/top">
                    Top Rated 
                </NavItem>
                <NavItem href="/picks">
                    My picks
                </NavItem>
            </Nav>
            <List>
                {movies.map((movie) => (
                    <ListItem key={movie.id} movie={movie}/>
                ))}
            </List>
        </div>
    )
}