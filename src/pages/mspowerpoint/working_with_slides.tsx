import React from "react";
import { MainContent } from "@/components/MainContent";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ClickableImage } from "@/components/ClickableImage";

// Import images
import Image61 from "./Images/6_1.png";
import Image62 from "./Images/6_2.png";
import Image63 from "./Images/6_3.png";
import Image64 from "./Images/6_4.png";
import Image65 from "./Images/6_5.png";
import Image66 from "./Images/6_6.png";
import Image67 from "./Images/6_7.png";
import Image68 from "./Images/6_8.png";

const WorkingWithSlides: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Working with Slides in PowerPoint - RSP Education</title>
                <meta name="keywords" content="Microsoft PowerPoint, presentation skills, slide design, PowerPoint tutorials, RSP Education, working with slides, PowerPoint tips" />
                <meta name="description" content="Microsoft PowerPoint is a powerful tool for creating dynamic and visually appealing presentations. Understanding how to work with slides is fundamental to building engaging presentations." />
                <meta property="og:title" content="Working with Slides in PowerPoint - RSP Education" />
                <meta property="og:description" content="Learn how to work with slides in Microsoft PowerPoint effectively." />
                <meta name="author" content="Rangaswamy RSP" />
            </Helmet>

            <MainContent>
                <article className="rspmain">
                    <h1>Working with Slides in PowerPoint</h1>

                    <p>Microsoft PowerPoint is a powerful tool for creating dynamic and visually appealing presentations. Understanding how to work with slides is fundamental to building engaging presentations. Here's a guide to working with slides in PowerPoint:</p>

                    <h2>1. Creating a New Slide:</h2>
                    <p>To create a new slide, navigate to the "Home" tab and click on the "New Slide" button. You can choose from various slide layouts depending on your content.</p>
                    <ClickableImage src={Image61} alt="Creating a New Slide" />

                    <h2>2. Selecting a Slide:</h2>
                    <p>You can easily select a slide by clicking on its thumbnail in the left sidebar or using the slide sorter view. This allows you to navigate through your presentation quickly.</p>
                    <ClickableImage src={Image62} alt="Selecting a Slide" />

                    <h2>3. Adding Content:</h2>
                    <p>Each slide can contain various types of content, such as text, images, charts, and more. Use the "Insert" tab to add elements to your slide.</p>
                    <ClickableImage src={Image63} alt="Adding Content" />

                    <h2>4. Designing Slides:</h2>
                    <p>Customize the design of your slides using the "Design" tab. Choose from pre-built themes, color schemes, and fonts to give your presentation a professional look.</p>
                    <ClickableImage src={Image64} alt="Designing Slides" />

                    <h2>5. Transitions and Animations:</h2>
                    <p>Make your presentation more dynamic by adding transitions between slides and animations to individual elements. Explore the "Transitions" and "Animations" tabs for options.</p>
                    <ClickableImage src={Image65} alt="Transitions and Animations" />

                    <h2>Animations</h2>
                    <ClickableImage src={Image66} alt="Slide Show" />

                    <h2>6. Slide Show:</h2>
                    <p>Preview your presentation using the "Slide Show" option. This allows you to see how your slides will appear to the audience.</p>
                    <ClickableImage src={Image67} alt="Saving and Sharing" />

                    <h2>7. Saving and Sharing:</h2>
                    <p>Save your PowerPoint presentation regularly. You can also export it to different formats or share it directly from PowerPoint.</p>
                    <ClickableImage src={Image68} alt="Saving and Sharing" />

                    <p>With these fundamental steps, you can efficiently work with slides in PowerPoint and create impactful presentations for various purposes.</p>

                    <div className="NEXT-BTN">
                        <Link to="/mspowerpoint/editing_a_slide">
                            <button title="Previous Topics" className="Preview">❮ Previous</button>
                        </Link>
                        <Link to="/mspowerpoint/slide_background">
                            <button title="Next Topics" className="Next">Next ❯</button>
                        </Link>
                    </div>
                </article>
            </MainContent>
        </>
    );
};

export default WorkingWithSlides;
