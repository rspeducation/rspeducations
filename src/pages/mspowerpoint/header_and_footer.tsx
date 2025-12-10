import React from "react";
import { MainContent } from "@/components/MainContent";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ClickableImage } from "@/components/ClickableImage";

// Import images
import Image201 from "./Images/20_1.png";

const HeaderAndFooter: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Adding Header and Footer in PowerPoint - RSP Education</title>
                <meta name="keywords" content="Microsoft PowerPoint, presentation skills, slide design, PowerPoint tutorials, RSP Education, header, footer, PowerPoint tips" />
                <meta name="description" content="Including a header and footer in your PowerPoint presentation is a professional way to provide contextual information and maintain consistency throughout your slides." />
                <meta property="og:title" content="Adding Header and Footer in PowerPoint - RSP Education" />
                <meta property="og:description" content="Learn how to add header and footer elements to your PowerPoint slides." />
                <meta name="author" content="Rangaswamy RSP" />
            </Helmet>

            <MainContent>
                <article className="rspmain">
                    <h1>Adding Header and Footer in PowerPoint</h1>

                    <p>Including a header and footer in your PowerPoint presentation is a professional way to provide contextual information and maintain consistency throughout your slides. In this guide, we'll explore the steps to add header and footer elements to your PowerPoint slides.</p>

                    <h2>Step 1: Open Your PowerPoint Presentation</h2>
                    <p>Begin by opening your PowerPoint presentation. Make sure you are in the slide editing view where you can make modifications to individual slides.</p>

                    <h2>Step 2: Access the Insert Tab</h2>
                    <p>Click on the "Insert" tab in the PowerPoint ribbon. This tab contains various options for adding elements to your slides, including the header and footer.</p>

                    <h2>Step 3: Click on Header & Footer</h2>
                    <p>In the "Insert" tab, locate and click on the "Header & Footer" option. This will open a dialog box where you can customize the header and footer settings for your slides.</p>

                    <ClickableImage src={Image201} alt="Click on Header & Footer" />

                    <h2>Step 4: Customize Header and Footer Options</h2>
                    <p>In the "Header and Footer" dialog box, you can choose to include a date and time, slide numbers, and other options. Check the boxes for the elements you want to include, and enter any relevant text or information.</p>

                    <h2>Step 5: Apply to All or Selected Slides</h2>
                    <p>Decide whether you want the header and footer to appear on all slides or only on selected slides. Use the radio buttons in the dialog box to make your selection.</p>

                    <h2>Step 6: Click on Apply and Close</h2>
                    <p>After customizing the header and footer settings, click on the "Apply to All" button to add the elements to all slides. If you chose to apply to selected slides, click "Apply" and then "Close" to save your changes.</p>

                    <h2>Step 7: Review Your Presentation</h2>
                    <p>Review your presentation to ensure that the header and footer elements are displayed as intended. Adjust the settings as needed for a polished and professional look.</p>

                    <h2>Conclusion</h2>
                    <p>Adding a header and footer to your PowerPoint presentation enhances its professionalism and provides valuable context for your audience. By following these steps, you can easily customize and apply header and footer elements to your slides, contributing to a more organized and visually appealing presentation.</p>

                    <div className="NEXT-BTN">
                        <Link to="/mspowerpoint/custom_show">
                            <button title="Previous Topics" className="Preview">❮ Previous</button>
                        </Link>
                        <Link to="/mspowerpoint/hide_or_show_slide">
                            <button title="Next Topics" className="Next">Next ❯</button>
                        </Link>
                    </div>
                </article>
            </MainContent>
        </>
    );
};

export default HeaderAndFooter;
