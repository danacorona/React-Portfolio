import React from "react";
import ProjectCard from "../projectcard/projectcard.js";
import project from "../../project.json";

function Project () {
    return (
        <div>
        <ProjectCard
        pic={project[0].pic}
        projectname={project[0].projectname}
        projectinfo={project[0].projectinfo}
        site={project[0].site}
        gh={project[0].gh}
        />
        <ProjectCard
        pic={project[1].pic}
        projectname={project[1].projectname}
        projectinfo={project[1].projectinfo}
        site={project[1].site}
        gh={project[1].gh}
        />
        <ProjectCard
        pic={project[2].pic}
        projectname={project[2].projectname}
        projectinfo={project[2].projectinfo}
        site={project[2].site}
        gh={project[2].gh}
        />
        <ProjectCard
        pic={project[3].pic}
        projectname={project[3].projectname}
        projectinfo={project[3].projectinfo}
        site={project[3].site}
        gh={project[3].gh}
        />
        <ProjectCard
        pic={project[4].pic}
        projectname={project[4].projectname}
        projectinfo={project[4].projectinfo}
        site={project[4].site}
        gh={project[4].gh}
        />
        <ProjectCard
        pic={project[5].pic}
        projectname={project[5].projectname}
        projectinfo={project[5].projectinfo}
        site={project[5].site}
        gh={project[5].gh}
        />
        </div>
    );     
}

export default Project;