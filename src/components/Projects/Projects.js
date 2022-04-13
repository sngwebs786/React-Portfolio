import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";

import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {
      const [search, setSearch] = useState("");

   const filteredArticles = projectsData.filter((project) => {
     const content = project.projectName + project.projectDesc + project.tags;
     return content.toLowerCase().includes(search.toLowerCase());
   });
    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.white, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.white,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
      <>
        {projectsData.length > 0 && (
          <div
            className="projects"
            id="projects"
            style={{ backgroundColor: theme.white }}
          >
            <div className="projects--header">
              <h1 style={{ color: theme.primary }}>Projects</h1>
            </div>
            {/* <div className="projects--body">
              <div className="projects--bodyContainer">
                {projectsData.slice(0, 3).map((project) => (
                  <SingleProject
                    theme={theme}
                    key={project.id}
                    id={project.id}
                    name={project.projectName}
                    desc={project.projectDesc}
                    tags={project.tags}
                    code={project.code}
                    demo={project.demo}
                    image={project.image}
                  />
                ))}
              </div>

              {projectsData.length > 3 && (
                <div className="projects--viewAll">
                  <a href="https://github.com/rafay51698" target="_blank">
                    <button className={classes.viewAllBtn}>
                      View All
                      <HiArrowRight className={classes.viewArr} />
                    </button>
                  </a>
                </div>
              )}
            </div> */}

            <div className="project-container">
              <Grid
                className="project-grid"
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                {filteredArticles.map((project) => (
                  <SingleProject
                    theme={theme}
                    key={project.id}
                    id={project.id}
                    name={project.projectName}
                    desc={project.projectDesc}
                    tags={project.tags}
                    code={project.code}
                    demo={project.demo}
                    image={project.image}
                  />
                ))}
              </Grid>
              <div className="projects--viewAll">
                <a href="https://github.com/rafay51698" target="_blank">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Projects
