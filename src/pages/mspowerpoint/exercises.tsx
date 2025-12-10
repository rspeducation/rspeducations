import React from "react";
import { MainContent } from "@/components/MainContent";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Exercises: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>PowerPoint Exercises - RSP Education</title>
                <meta name="keywords" content="Microsoft PowerPoint, presentation skills, slide design, PowerPoint tutorials, RSP Education, exercises, PowerPoint practice, PowerPoint tips" />
                <meta name="description" content="Practice your PowerPoint skills with these exercises designed to reinforce what you've learned throughout the tutorial series." />
                <meta property="og:title" content="PowerPoint Exercises - RSP Education" />
                <meta property="og:description" content="Practice exercises for Microsoft PowerPoint to reinforce your learning." />
                <meta name="author" content="Rangaswamy RSP" />
            </Helmet>

            <MainContent>
                <article className="rspmain">
                    <h1>PowerPoint Exercises</h1>

                    <p>Congratulations on completing the PowerPoint tutorial series! Now it's time to put your knowledge into practice with these exercises. These activities are designed to reinforce what you've learned and help you become more proficient with Microsoft PowerPoint.</p>

                    <h2>Exercise 1: Create a Basic Presentation</h2>
                    <p>Create a presentation about your favorite hobby or interest with the following requirements:</p>
                    <ul>
                        <li>At least 5 slides</li>
                        <li>Apply a professional theme</li>
                        <li>Include a title slide with your name</li>
                        <li>Use at least 2 different slide layouts</li>
                        <li>Add appropriate images to at least 3 slides</li>
                    </ul>

                    <h2>Exercise 2: Work with Text and Lists</h2>
                    <p>Create a presentation about "Benefits of Learning PowerPoint" that includes:</p>
                    <ul>
                        <li>A bulleted list with at least 5 benefits</li>
                        <li>A numbered list showing steps to get started</li>
                        <li>Custom bullet styles</li>
                        <li>Properly formatted headings and subheadings</li>
                    </ul>

                    <h2>Exercise 3: Add Visual Elements</h2>
                    <p>Enhance an existing presentation by:</p>
                    <ul>
                        <li>Creating a table with at least 3 columns and 4 rows</li>
                        <li>Inserting a chart to display data</li>
                        <li>Adding an organization chart showing a team structure</li>
                        <li>Applying custom colors and styles to all visual elements</li>
                    </ul>

                    <h2>Exercise 4: Apply Animations and Transitions</h2>
                    <p>Take any presentation and:</p>
                    <ul>
                        <li>Apply slide transitions to all slides</li>
                        <li>Add entrance animations to at least 5 objects</li>
                        <li>Use the Animation Pane to adjust timing</li>
                        <li>Ensure animations enhance rather than distract from content</li>
                    </ul>

                    <h2>Exercise 5: Master Slide Show Features</h2>
                    <p>Practice presentation delivery by:</p>
                    <ul>
                        <li>Setting up a custom slide show with selected slides</li>
                        <li>Rehearsing timings for your presentation</li>
                        <li>Adding header and footer information</li>
                        <li>Hiding specific slides for different audiences</li>
                        <li>Running the presentation in Presenter View</li>
                    </ul>

                    <h2>Exercise 6: Create a Professional Presentation</h2>
                    <p>Create a complete professional presentation on a topic of your choice that demonstrates:</p>
                    <ul>
                        <li>Consistent design and branding throughout</li>
                        <li>Effective use of images, charts, and tables</li>
                        <li>Appropriate animations and transitions</li>
                        <li>Clear and concise content</li>
                        <li>Proper use of headers, footers, and slide numbers</li>
                        <li>A well-structured flow from introduction to conclusion</li>
                    </ul>

                    <h2>Challenge Exercise: Multimedia Presentation</h2>
                    <p>Create an advanced presentation that includes:</p>
                    <ul>
                        <li>Embedded video content</li>
                        <li>Background music or audio narration</li>
                        <li>Action buttons for navigation</li>
                        <li>Hyperlinks to external resources</li>
                        <li>Custom animations with precise timing</li>
                        <li>A self-running presentation with automatic slide advancement</li>
                    </ul>

                    <h2>Tips for Success</h2>
                    <ul>
                        <li>Start with simple exercises and gradually increase complexity</li>
                        <li>Review tutorial sections if you need help with specific features</li>
                        <li>Practice regularly to build confidence and proficiency</li>
                        <li>Experiment with different designs and features</li>
                        <li>Seek feedback from others on your presentations</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>These exercises are designed to help you apply what you've learned throughout this tutorial series. Take your time with each exercise, and don't hesitate to revisit earlier lessons if needed. The more you practice, the more confident and skilled you'll become with PowerPoint!</p>

                    <div className="NEXT-BTN">
                        <Link to="/mspowerpoint/printing">
                            <button title="Previous Topics" className="Preview">❮ Previous</button>
                        </Link>
                        <Link to="/mspowerpoint/slide_show">
                            <button title="Next Topics" className="Next">Next ❯</button>
                        </Link>
                    </div>
                </article>
            </MainContent>
        </>
    );
};

export default Exercises;
